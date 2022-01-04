export function state () {
  return {
    name: 'Name'
  }
}

export const getters = {
  name (state) {
    return state.name
  }
}

export const actions = {
  setName ({ commit }, name) {
    commit('setName', name)
  }
}

export const mutations = {
  setName (state, name) {
    state.name = name
  }
}
