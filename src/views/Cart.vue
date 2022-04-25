<template lang="pug">
.cart-wrap(v-if="GET_CART.length != 0")
    .cart-top
        h3.cart-title
            i.fa-solid.fa-cart-shopping 
            p Корзина 
        a(href="#" @click.prevent="cartClear").cart-remove  
            i.fa-solid.fa-trash-can
            p Очистить корзину
    .cart-content
        .cart-list
            cart-item(v-for="pizza of GET_CART" :item="pizza" :key="pizza.id")
        cart-info
        .cart-content__bottom   
            a(href="#" @click.prevent="$router.go(-1)").cart-content__back 
                i.fa-solid.fa-angle-left
                p Вернуться назад
            button.cart-content__btn Оплатить сейчас
cart-empty(v-else)
</template>

<script>
import getCurrency from "@/mixins/getCurrency"
import cartEmpty from "@/components/cart/cart-empty"
import cartItem from "@/components/cart/cart-item"
import cartInfo from "@/components/cart/cart-info"
import {mapGetters,mapActions} from "vuex"
export default {
    mixins: [getCurrency],
    components: {
        cartItem,
        cartInfo,
        cartEmpty
    },
    computed: {
        ...mapGetters(["GET_CART"])
    },
    methods: {
        ...mapActions(["CART_CLEAR"]),
        cartClear() {
            this.CART_CLEAR()
        }
    }
}
</script>

<style lang="scss">
.cart {
    &-wrap {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        padding-top: 140px;
    }
    &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-title {
        display: flex;
        font-size: 32px;
        align-items: center;
        margin-bottom: 30px;
        & svg {
            margin-right: 15px;
        }
    }
    &-remove {
        display: flex;
        font-size: 16px;
        color: #B6B6B6;
        & svg {
            margin-right: 5px;
        }

    }
    &-content {
        &__back {
            display: flex;
            align-items: center;
            padding: 20px 30px;
            border: 1px solid #D3D3D3;
            border-radius: 30px;
            color: #D3D3D3;
            & svg {
                margin-right: 10px;
            }
        }
        &__bottom {
            display: flex;
            justify-content: space-between;
        }
        &__btn {
            font-size: 16px;
            padding: 20px 30px;
            border-radius: 30px;
            border: none;
            background: $orange;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>