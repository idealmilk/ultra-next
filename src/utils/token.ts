/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any, max-len */
import Cookies from 'universal-cookie'
import { LOGIN_TOKEN_KEY } from '../config'

export const getToken = (req?: { headers: { cookie: any } }): string => {
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const token: string = cookies.get(LOGIN_TOKEN_KEY) || ''
  return token
}