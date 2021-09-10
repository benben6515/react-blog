const { REACT_APP_BASE_URL:BASE_URL } = process.env

// api ------------------------
const getPosts =  async (page, perPageItem) => {
  try {
    const res = await fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc&_page=${page}&_limit=${perPageItem}`)
    const data = await res.json()
    const link = await res.headers.get('link')
    const lastPage = link.slice(link.lastIndexOf('page=') + 5,link.lastIndexOf('&'))
    return { data, lastPage }
  }
  catch (err) {
    throw err
  }
}

const getPost =  async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`)
    const json = await res.json()
    return json
  }
  catch (err) {
    throw err
  }
}

const register = async (nickname, username, password) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nickname,
        username,
        password
      })
    })
    const json = await res.json()
    return json
  }
  catch (err) {
    throw err
  }
}

const login = async (username, password) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const json = await res.json()
    return json
  }
  catch (err) {
    throw err
  }
}

const getMe = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/me`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    const json = await res.json()
    return json
  }
  catch (err) {
    throw err
  }
}

const addPost = async (token, title, body) => {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        body,
      })
    })
    const json = await res.json()
    return json
  }
  catch (err) {
    throw err
  }
}

export { getPosts, getPost, register, login, getMe, addPost }