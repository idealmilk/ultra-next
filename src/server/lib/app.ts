import nextConnect from 'next-connect'

import getDatabase from './db'

import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: any = () => nextConnect<NextApiRequest, NextApiResponse>()
  .use(async (_, res, next) => {
    const db = await getDatabase()
    if (!db) {
      res.send(500)
      return
    }
    next()
  })

export default app
