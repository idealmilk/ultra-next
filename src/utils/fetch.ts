import axios from 'axios'
import Cookies from 'universal-cookie'
import { removeUserId } from '@/data/cache/user'
import { log, logError } from './logger'
import { getToken } from './token'
import type { AxiosRequestConfig } from 'axios'
import { API_HOST } from '@/config'

type TFetchResponse<T> = Promise<T | { error: string }>;

export const fetchWithErrorHandling = async <T>(
  url: string,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  const cookies = new Cookies()
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Accept-Language': cookies.get('locale') || 'en',
  }

  if (options.method) {
    headers['Content-Type'] = 'application/json'
  }
  if (
    options.headers &&
    options.headers['Content-Type'] === 'multipart/form-data'
  ) {
    delete headers['Content-Type']
    delete options.headers['Content-Type']
  }

  const token =
    options.headers?.Authorization?.replace('Bearer ', '') ||
    getToken(options.headers?.cookie && { headers: { cookie: options.headers.cookie }})
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const message = `Trying to ${options.method || 'GET'} from ${url}`
  log(message)

  const response = await axios({
    url,
    timeout: 30000,
    validateStatus: (status: number) => status >= 200 && status < 400,
    ...options,
    headers,
  }).catch((e) => {
    logError('Error with ', e)
    if ('response' in e && e.response.status === 500) {
      return {
        error: 'エラーが発生しました。しばらく置いてから再度お試しください。',
      }
    }
    if (
      'response' in e &&
      e.response.status === 401 &&
      e.response.data instanceof Object &&
      'isInvalidToken' in e.response.data &&
      e.response.data.isInvalidToken
    ) {
      removeUserId()
    }
    if (
      'response' in e &&
      e.response.data instanceof Object &&
      'error' in e.response.data
    ) {
      return { error: e.response.data.error as string }
    }
    if (e instanceof Error) {
      return { error: e.message }
    }
    return { error: '不明なエラーが発生しました。' }
  })

  if ('error' in response) {
    return { error: response.error }
  }

  return response.data
}

export const get = <T>(
  url: string,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  return fetchWithErrorHandling<T>(`${API_HOST}${url}`, {
    method: 'GET',
    ...options,
  })
}

export const getAbs = <T>(
  url: string,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  return fetchWithErrorHandling(url, {
    method: 'GET',
    ...options,
  })
}

export const post = <T>(
  url: string,
  body: Record<string, unknown> | FormData | File,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  const data = JSON.stringify(body || {})
  return fetchWithErrorHandling(`${API_HOST}${url}`, {
    method: 'POST',
    data,
    ...options,
  })
}

export const postAbs = <T>(
  url: string,
  body: Record<string, unknown> | FormData | File,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  const data = JSON.stringify(body || {})
  return fetchWithErrorHandling(url, {
    method: 'POST',
    data,
    ...options,
  })
}

export const put = <T>(
  url: string,
  body: Record<string, unknown> | FormData | File,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  const data = JSON.stringify(body || {})
  return fetchWithErrorHandling(`${API_HOST}${url}`, {
    method: 'PUT',
    data,
    ...options,
  })
}

export const destroy = <T>(
  url: string,
  options: AxiosRequestConfig = {},
): TFetchResponse<T> => {
  return fetchWithErrorHandling(`${API_HOST}${url}`, {
    method: 'DELETE',
    ...options,
  })
}
