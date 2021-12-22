import axios from 'axios'
import env from '../constants/Env'

const RECORDS_PERPAGE = 30

export interface Gif {
  id: string
  images: {
    original: { url: string }
  }
}

type SearchParams = {
  search: string
  page?: number
}

const gifService = {
  search: async ({ search, page = 1 }: SearchParams): Promise<Gif[]> => {
    const offset = (page - 1) * RECORDS_PERPAGE

    return axios
      .get(env.giphy_api_url, {
        params: {
          q: search,
          limit: RECORDS_PERPAGE,
          offset,
          api_key: env.api_key,
        },
      })
      .then(({ data }) => data.data)
  },
}
export default gifService
