<template lang="pug">
li.pizza-item(v-for="(pizza,i) of list" :key="pizza.id")
    span.pizza-item__img
        img(:src="`${pizza.imageUrl}`").pizza-item__img
    h3.pizza-item__title {{pizza.name}}
    .pizza-item__content
        .pizza-item__dough(@click.prevent="handlerDough(pizza.id,$event)")
            a(href="#" :class="{'active': pizza.dough}" :data-val="1").pizza-item__dough-link тонкое
            a(href="#" :class="{'active': !pizza.dough}" :data-val="0").pizza-item__dough-link традиционное 
        .pizza-item__depth
            .pizza-item__depth-item(v-for="(size,i) of defaultSize" @click.prevent="handlerSizes(pizza.id,size,$event)")
                a(href="#" v-if="pizza.sizes.includes(size)" :class="{'active': pizza.defaultSize === size}").pizza-item__depth-link {{size}} см.
                span(v-else).pizza-item__depth-disabled {{size}} см.
    .pizza-item__bottom
        span.pizza-item__price от {{getCurrency(pizza.price)}} 
        a(href="#" @click.prevent="addCart(pizza.id)" :class="{'active': getCounter(pizza.id) === 1,'padding-right': getCounter(pizza.id) > 1}").pizza-item__btn
            i.fa-solid.fa-plus 
            span Добавить  
            span.pizza-item__btn-counter(v-if="GET_CART.length !== 0 && getCounter(pizza.id) > 1") {{getCounter(pizza.id)}}  
</template>

<script>
import getCurrency from "@/mixins/getCurrency"
import {mapActions,mapGetters} from "vuex"
export default {
    props: {
        list: Array
    },
    mixins: [getCurrency],
    data() {
        return {
            defaultSize: [26,30,40],
        }
    },
    computed: {
        ...mapGetters(["GET_PIZZA","GET_CART","GET_PIZZA_ID"]),
        getCounter() {
            return (id) => {
                const cartId = [...this.GET_CART].map(el => el.id);
                const result = [...this.GET_CART].find(el => el.id === id)
                if(cartId.includes(id)) {
                    return result.counter > 1 ? result.counter : 1
                }
                
            }
      },
    },
    methods: {
        ...mapActions(["ADD_CART","CART_INCREMENT","GET_DOUGH_PIZZA","GET_DEPTH_PIZZA"]),
        addCart(id) {
            const listId = this.GET_CART.map(el => el.id)
            const pizzaId = this.GET_PIZZA_ID(id);
            if(!listId.includes(id)) {
                this.ADD_CART({
                    name: pizzaId.name,
                    img: pizzaId.imageUrl,
                    price: pizzaId.price,
                    dough: pizzaId.dough,
                    defaultSize: pizzaId.defaultSize,
                    id,
                    counter: 0
                })
            }
            this.CART_INCREMENT(id)
            localStorage.setItem("cart",JSON.stringify(this.GET_CART))
      },
      handlerDough(id,e) {  
            const target = Boolean(+e.target.dataset.val);
            const s = this.GET_PIZZA.find(el => el.id === id)
            if(s.dough != target) {
                this.GET_DOUGH_PIZZA(id)
            }
      },
      handlerSizes(id,value,e) {
          if(e.target.classList.contains("pizza-item__depth-link")) {
              const data = {id,value}
              this.GET_DEPTH_PIZZA(data)
          }
      }
    }
}
</script>

<style lang="scss">
.pizza {
    &-item {
        width: 25%;
        font-size: 16px;
        padding: 0 15px;
        margin-bottom: 65px;
        &__img {
            display: block;
        }
        &__btn {
            position: relative;
            display: flex;
            font-size: 16px;
            padding: 10px 20px 10px 20px;
            align-items: center;
            transition: all 0.3s ease-in-out;
            border: 1px solid $orange;
            border-radius: 30px;
            color: $orange;
            cursor: pointer;
            &.padding-right {
                padding-right: 40px;
            }
            &-counter {
                display: flex;
                position: absolute;
                right: 10px;
                top: 50%;
                width: 25px;
                height: 25px;
                font-family: $regular;
                font-size: 14px;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                transform: translateY(-50%);
                background: $orange;
                color: #fff;
            }
            &.active {
                background: $orange;
                color: #fff;
            }
            & svg {
                margin-right: 10px;
            }
        }
        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__price {
            font-family: $bold;
            font-size: 22px;
        }
        &__dough {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            &-disabled {
                display: block;
                width: 48%;
                font-family: $regular;
                font-size: 14px;   
                padding: 10px 0;
                text-align: center;
                color: gray;
            }
            &-link {
                display: flex;
                width: 48%;
                font-family: $bold;
                font-size: 14px;
                justify-content: center;
                padding: 10px 0;
                border-radius: 5px;
                color: #2C2C2C;
                &.active {
                    background: #fff;    
                }
            }
        }
        &__depth {
            display: flex;
            justify-content: space-between;
            &-item {
                width: 32%;
            }
            &-disabled {
                display: flex;
                font-family: $regular;
                font-size: 14px;
                justify-content: center;
                padding: 10px 0;
                color: gray;
            }
            &-link {
                display: flex;
                font-size: 14px;
                padding: 10px 0;
                justify-content: center;
                color: #282828;
                &.active {
                    background: #fff;
                    color: #282828;
                }
            }
        }
        &__title {
            font-family: $exbold;
            font-size: 20px;
            text-align: center;
            margin: 20px 0;
        }
        &__content {
            padding: 5px;
            border-radius: 10px;
            margin-bottom: 30px;
            background: #F3F3F3;
        }
    }
}
</style>