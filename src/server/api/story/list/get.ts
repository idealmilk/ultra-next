import * as yup from 'yup'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getStoryListPerPage } from '@/server/models/story'
import { BAD_REQUEST_400, NOT_FOUND_404 } from '@/server/utils/error-texts'

const validationSchema = yup.object().shape({
  page: yup.number().required(),
  perPage: yup.number().required(),
})

interface Query {
  deletedAt: undefined
  category: {
    '$in': string[]
  }
  limitedAt: {
    '$lt': number
  }
  budget: {
    '$gt': number
  }
}

const storyListGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const validQuery = await validationSchema.validate(req.query)

  if ('error' in validQuery) {
    return res.status(400).json({ error: BAD_REQUEST_400 })
  }

  const { page, perPage } = validQuery

  const query: Partial<Query> = {
    deletedAt: undefined,
  }

  const results = await getStoryListPerPage(
    query,
    Number(page || 1),
    Number(perPage || 20),
  )

  if (!results) {
    return res.status(404).json({ error: NOT_FOUND_404 })
  }

  if ('error' in results) {
    // eslint-disable-next-line no-console
    console.error(results.error)
    return res.status(500).json({})
  }

  if (results.length <= 0) {
    return res.json([])
  }

  return res.json(results)
}

export default storyListGet
