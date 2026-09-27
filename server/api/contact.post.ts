// Slack mrkdwn の制御文字をエスケープし、<!channel> 等のメンションや偽リンクを埋め込めないようにする
const escapeMrkdwn = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTH = { name: 100, email: 254, message: 5000 }

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: unknown
    email?: unknown
    message?: unknown
    website?: unknown
  }>(event)

  // ハニーポット: 人間には見えない欄が埋まっていたらボットとみなし、送信したふりをして捨てる
  if (typeof body?.website === 'string' && body.website.trim()) {
    return { success: true }
  }

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: '全ての項目を入力してください'
    })
  }

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'メールアドレスの形式が正しくありません'
    })
  }

  if (name.length > MAX_LENGTH.name || email.length > MAX_LENGTH.email || message.length > MAX_LENGTH.message) {
    throw createError({
      statusCode: 400,
      statusMessage: '入力が長すぎます'
    })
  }

  const { slackBotToken, slackChannelId } = useRuntimeConfig()

  if (!slackBotToken || !slackChannelId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Slack の設定が不足しています'
    })
  }

  const response = await $fetch<{ ok: boolean, error?: string }>('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${slackBotToken}`
    },
    body: {
      channel: slackChannelId,
      text: `${escapeMrkdwn(name)}さんからお問い合わせがありました`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `${name}さんからお問い合わせがありました`
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お名前:*\n${escapeMrkdwn(name)}`
            },
            {
              type: 'mrkdwn',
              text: `*メールアドレス:*\n${escapeMrkdwn(email)}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*メッセージ:*\n${escapeMrkdwn(message)}`
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`
            }
          ]
        }
      ]
    }
  })

  if (!response.ok) {
    throw createError({
      statusCode: 500,
      statusMessage: `Slack送信エラー: ${response.error}`
    })
  }

  return { success: true }
})
