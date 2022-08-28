import * as prismic from '@prismicio/client'

export const repositoryName = 'bieowignews'
export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})