import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const getGithubUserRepos = (username: string) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
