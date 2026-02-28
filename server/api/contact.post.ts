export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody<{
    name: string
    email: string
    message: string
  }>(event)

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: '全ての項目を入力してください'
    })
  }

  const { slackBotToken, slackChannelId } = useRuntimeConfig()

  if (!slackBotToken || !slackChannelId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Slack の設定が不足しています'
    })
  }

  const response = await $fetch<{ ok: boolean; error?: string }>('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${slackBotToken}`
    },
    body: {
      channel: slackChannelId,
      text: `${name}さんからお問い合わせがありました`,
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
              text: `*お名前:*\n${name}`
            },
            {
              type: 'mrkdwn',
              text: `*メールアドレス:*\n${email}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*メッセージ:*\n${message}`
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
