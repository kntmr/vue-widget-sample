import axios from 'axios'

const api = {
  get: (url) => axios.get(url)
}

export default {
  getItems: () => api.get('https://qiita.com/api/v2/items?query=tag:vue.js').then(resp => {
    return Promise.resolve(resp.data)
  })
}
