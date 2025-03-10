/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any, max-len, no-console */
import { isProd } from '@/config'

export const log = (...props: any) => {
  if (isProd) {
    return
  }
  console.log(...props)
}

export const logInfo = (...props: any) => {
  if (isProd) {
    return
  }
  console.info(...props)
}

export const logError = (...props: any) => {
  if (isProd) {
    return
  }
  console.error(...props)
}
