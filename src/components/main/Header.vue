<template lang="pug">
header.header 
    .container
        .header-wrap
            router-link(to="/").header-logo
                img(:src="require('@/assets/img/logo.svg')").header-logo__img
                .header-logo__content
                    span.header-logo__name Vue pizza
                    span.header-logo__text самая вкусная пицца во вселенной    
            cart
</template>

<script>
import cart from "@/components/cart/cart"
export default {
    components: {
        cart,
    }
}
</script>

<style lang="scss">
.header {
    padding-top: 50px;
    &-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-logo {
        display: flex;
        align-items: center;
        &__img {
            width: 38px;
            margin-right: 15px;
        }
        &__name {
            display: block;
            font-family: $exbold;
            font-size: 24px;
            line-height: 25px;
            text-transform: uppercase;
            color: #181818;
        }
        &__text {
            display: block;
            font-size: 16px;
            line-height: 18px;
            color: #7B7B7B;
        }
    }
}
</style>