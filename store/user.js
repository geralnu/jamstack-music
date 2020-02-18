const path = ".netlify/functions/get-deezer-user"
const URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:34567/${path}`
    : `/${path}`

export const state = () => ({
  data : ''
})

export const mutations = {
  SET_USER: (state, payload) => {
    state.data = payload
  }
}

export const actions = {
  async setUser({commit}, id) {
    const response = await fetch(`${URL}/?id=${id}` )
    const user = await response.json()
    localStorage.setItem('deezer_user', user.id)
    commit('SET_USER', user)
  },
  removeUser({ commit }){
    localStorage.clear()
    commit('SET_USER', null)
  }
}
