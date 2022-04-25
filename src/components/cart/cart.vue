<template lang="pug">
router-link(to="/cart").header-cart
    span.header-cart__currency {{getCurrency(GET_CART_SUM)}}
    span.header-cart__line
    .header-cart__counter  
        i.fa-solid.fa-cart-shopping  
        span {{GET_CART_LENGTH}}
</template>

<script>
import getCurrency from "@/mixins/getCurrency"
import {mapGetters} from "vuex"
export default {
    mixins: [getCurrency],
    computed: {
        ...mapGetters(["GET_CART_LENGTH","GET_CART_SUM"])
    }
}
</script>

<style lang="scss">
.header {
    &-cart {
        display: flex;
        font-family: $bold;
        font-size: 16px;
        align-items: center;
        padding: 15px 25px;
        border-radius: 30px;
        background: $orange;
        color: #fff;
        &__counter {
            & svg {
                margin-right: 10px;
            }
        }
        &__line {
            display: block;
            width: 1px;
            height: 25px;
            margin: 0 15px;
            background: rgba(255,255,255,0.25);
        }
    }
}
</style>