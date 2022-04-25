<template lang="pug">
.cart-empty
    h3.cart-empty__title
        p Корзина пуста 😕
    p.cart-empty__text Вероятней всего, вы не заказывали ещё пиццу.<br/> Для того, чтобы заказать пиццу, перейди на главную страницу.
    span.cart-empty__img
        img(src="@/assets/img/shopping-cart.svg")
    a(href="#" @click.prevent="$route.go(-1)")
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cart {
    &-empty {
        display: flex;
        max-width: 800px;
        width: 100%;
        margin: 0 auto;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 200px;
        &__title {
            font-size: 32px;
            margin-bottom: 10px;
        }
        &__text {
            font-size: 18px;
            text-align: center;
            margin-bottom: 45px;
            color: #777777;
        }
    }
}
</style>