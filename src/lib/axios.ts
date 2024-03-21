import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})

// API ENDPOINT:
// https://api.github.com/search/issues?q=:Luckmenez/