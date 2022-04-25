<template lang="pug">
.cart-content__info
    .cart-content__block  
        p Всего пицц: 
        span.cart-content__counter {{GET_CART_LENGTH}} шт. 
    .cart-content__block   
        p Сумма заказа: 
        span.cart-content__sum {{getCurrency(GET_CART_SUM)}}  
</template>

<script>
import getCurrency from "@/mixins/getCurrency"
import {mapGetters} from "vuex"
export default {
     mixins: [getCurrency],
     computed: {
         ...mapGetters(["GET_CART_SUM","GET_CART_LENGTH"])
     }
}
</script>

<style lang="scss">
.cart {
    &-content {
        &__info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
        }
        &__counter {
            font-family: $bold;
            margin-left: 10px;
        }
        &__sum {
            font-family: $bold;
            margin-left: 10px;
            color: $orange;
        }
        &__block {
            display: flex;
            font-size: 22px;
        }
    }
}
</style>