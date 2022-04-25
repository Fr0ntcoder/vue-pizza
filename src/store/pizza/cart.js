const state = () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || []
});

const mutations = {
    SET_ADD_CART(state,data) {
        state.cart.push(data);
    },
    SET_CART(state,data) {
        state.cart = data;
    },
}

const actions = {
    async ADD_CART({commit},value) {
        commit("SET_ADD_CART",value)
    },
    CART_REMOVE({commit,state},id) {
        const data = state.cart.filter(el => {
            return el.id != id
        })
        commit("SET_CART",data)
    },
    CART_INCREMENT({commit,state},id) {
        const data = state.cart.map(el => {
            if(el.id === id) {
                return {
                    ...el,
                    counter: el.counter + 1
                }
            }else {
                return {
                    ...el
                }
            }
        })
        commit("SET_CART",data)
        localStorage.setItem("cart",JSON.stringify(data))
    },
    CART_DECREMENT({commit,state},id) {
        const data = state.cart.map(el => {
            if(el.id === id) {
                return {
                    ...el,
                    counter: el.counter != 0 ? el.counter - 1 : 0
                }
            }else {
                return {
                    ...el
                }
            }
        })
        commit("SET_CART",data)
        localStorage.setItem("cart",JSON.stringify(data))
    },
    CART_CLEAR({commit}) {
        commit("SET_CART",[])
        localStorage.removeItem("cart")
    }
}

const getters = {
    GET_CART: state => state.cart,
    GET_CART_LENGTH: state => state.cart.length,
    GET_CART_SUM: state => state.cart.reduce((sum,el) => sum + (el.price * el.counter),0),
    GET_CART_ID_SUM: (state) => (id) => {
        const item = state.cart.find(el => el.id === id);
        return item.price * item.counter;
    } 
}

export default {
    state,
    mutations,
    actions,
    getters
}