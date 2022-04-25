import axios from "axios"

const state = () => ({
    pizza: []
})

const mutations = {
    SET_PIZZA(state,data) {
        state.pizza = data;
    }
}

const actions = {
    async GET_FETCH_PIZZA({commit}) {
        const res = await axios.get("http://localhost:3001/pizzas");
        const data = await res.data;
        commit("SET_PIZZA",data)
    },
    async GET_CATEGORY_PIZZA({commit},value) {
        const res = await axios.get(`http://localhost:3001/pizzas?category=${value}`);
        commit("SET_PIZZA",res.data)
    },
    async GET_SORT_PIZZA({commit},value) {
        const res = await axios.get(`http://localhost:3001/pizzas?_sort=${value}&_order=asc`);
        commit("SET_PIZZA",res.data) 
    },
    async GET_DOUGH_PIZZA({commit,state},id) {
        const data = state.pizza.map(el => {
                if(el.id === id) {
                    return {
                        ...el,
                        dough: !el.dough
                    }
                }else {
                    return el
                }
        })
        commit("SET_PIZZA",data) 
    },
    async GET_DEPTH_PIZZA({commit,state},arr) {
        const data = state.pizza.map(el => {
            if(el.id === arr.id) {
                return {
                    ...el,
                    defaultSize: arr.value
                }
            }else {
                return el
            }
        })
        commit("SET_PIZZA",data) 
    },
}

const getters = {
    GET_PIZZA: state => state.pizza,
    GET_PIZZA_ID: (state) => (id) => state.pizza.find(el => el.id === id) 
}

export default {
    state,
    mutations,
    actions,
    getters
}