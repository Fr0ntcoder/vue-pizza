import { createStore } from 'vuex'
import pizza from "./pizza"
import cart from "./pizza/cart"
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pizza,
    cart
  }
})
