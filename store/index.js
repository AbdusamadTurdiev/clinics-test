export const strict = false

export const state = () => ({
  services: []
})

export const getters = {
  generalPrice: state => {
    return state.services.reduce((acc, service) => acc + service.price, 0)
  }
}

export const mutations = {
  addService (state, service) {
    state.services.push(service)
  },
  removeService (state, service) {
    let index = state.services.indexOf(service)
    state.services.splice(index, 1)
  }
}
