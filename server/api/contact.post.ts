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

  const { slackWebhookUrl } = useRuntimeConfig()

  if (!slackWebhookUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Slack Webhook URL が設定されていません'
    })
  }

  await $fetch(slackWebhookUrl, {
    method: 'POST',
    body: {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'お問い合わせがありました'
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

  return { success: true }
})
