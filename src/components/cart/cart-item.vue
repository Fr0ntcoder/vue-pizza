<template lang="pug">
.cart-item
    .cart-item__left
        span.cart-item__img
            img(:src="`${item.img}`")
        .cart-item__content
            h4.cart-item__title {{item.name}}
            .cart-item__dough
                span(v-if="item.dough") Тонкое,
                span(v-else) Традиционное,
                span {{item.defaultSize}} см.
    .cart-item__counter
        a(href="#" @click.prevent="cartMinus(item.id)").cart-item__counter-change 
            i.fa-solid.fa-minus  
        span.cart-item__counter-value {{item.counter}} 
        a(href="#" @click.prevent="cartPlus(item.id)").cart-item__counter-change
            i.fa-solid.fa-plus
    .cart-item__price {{getCurrency(GET_CART_ID_SUM(item.id))}}
    a(href="#" @click.prevent="cartRemove(item.id)").cart-item__remove 
        i.fa-solid.fa-xmark 
</template>

<script>
import getCurrency from "@/mixins/getCurrency"
import {mapActions,mapGetters} from "vuex"
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: []
        }
    },
    mixins: [getCurrency],
    computed: {
        ...mapGetters(["GET_CART_ID_SUM"])
    },
    methods: {
        ...mapActions(["CART_INCREMENT","CART_DECREMENT","CART_REMOVE"]),
        cartPlus(id) {
            this.CART_INCREMENT(id) 
        },
        cartMinus(id) {
            this.CART_DECREMENT(id) 
        },
        cartRemove(id) {
            this.CART_REMOVE(id)
        },
    }
}
</script>

<style lang="scss">
.cart {
    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 45px;
        margin-bottom: 45px;
        border-bottom: 1px solid #F4F4F4;
        &:first-child {
            padding-top: 45px;
            margin-bottom: 45px;
            border-top: 1px solid #F4F4F4;
        }
        &:last-child {
            border: none;
        }
        &__img {
            max-width: 80px;
            width: 100%;
            margin-right: 15px;
        }
        &__left {
            display: flex;
            max-width: 400px;
            width: 100%;
            align-items: center;
        }
        &__title {
            font-size: 22px;
            margin-bottom: 5px;
        }
        &__dough {
            font-size: 18px;
            color: #8D8D8D;
            & span:last-child {
                margin-left: 5px;
            }

        }
        &__counter {
            display: flex;
            align-items: center;
            &-change {
                display: flex;
                flex: none;
                width: 30px;
                height: 30px;
                font-size: 18px;
                align-items: center;
                justify-content: center;
                border: 2px solid $orange;
                border-radius: 50%;
                color: $orange;
            }
            &-value {
                display: flex;
                width: 25px;
                font-size: 22px;
                font-family: $bold;
                justify-content: center;
                margin: 0 12px;
            }
        }
        &__price {
            font-size: 22px;
            font-family: $bold;
        }
        &__remove {
            display: flex;
            width: 30px;
            height: 30px;
            font-size: 15px;
            justify-content: center;
            align-items: center;
            border: 2px solid #D7D7D7;
            border-radius: 50%;
            color: #D7D7D7;
        }
    }
}
</style>