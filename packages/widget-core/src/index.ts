export * from './config.js'
export * from './data-status.enum.js'
export * from './floatie-error.interface.js'

export const send = async (clientKey: string, type: 'BUG' | 'FEATURE' | 'COMMENT', message: string) => {
  const floatieInstance = 'http://localhost:3000/api/project/feedback'

  const requestBody = JSON.stringify({
    type,
    message,
  })

  try {
    await fetch(floatieInstance, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
        'x-floatie-client-key': clientKey,
      },
    })
  } catch (err) {
    throw new Error('Failed to send feedback')
  }
}
