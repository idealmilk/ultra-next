import type { NextApiRequest, NextApiResponse } from 'next'
import { getStoryById } from '@/server/models/story'
import { NOT_FOUND_404 } from '@/server/utils/error-texts'

const storyGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req

  const result = await getStoryById(`${id}`)

  console.log('results: ', result)

  if (!result) {
    return res.status(404).json({ error: NOT_FOUND_404 })
  }

  if ('error' in result) {
    // eslint-disable-next-line no-console
    console.error(result.error)
    return res.status(500).json({})
  }

  return res.json(result.publicInfo)
}

export default storyGet
