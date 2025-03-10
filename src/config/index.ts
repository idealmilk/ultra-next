export const ENV = process.env.NEXT_PUBLIC_NODE_ENV || 'local'

export const isProd = ENV === 'production' || ENV === 'canary'

export const HOST = process.env.VERCEL_URL
  ? `${/localhost/.test(process.env.VERCEL_URL) ? 'http' : 'https'}://${process.env.VERCEL_URL}`
  : ''

export const API_HOST = `${HOST}/api`

export const LOGIN_TOKEN_KEY = 'token'