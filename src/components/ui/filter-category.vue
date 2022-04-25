<template lang="pug">
ul.filter-category__list(@click.prevent="handlerCategory($event)")
    li.filter-category__item(v-for="(cat,i) of filterList" :key="i")
        a(href="#" :data-category="`${cat.category}`" :class="{'active': cat.category === defaultCategory}").filter-category__link {{cat.name}}
</template>

<script>
import {mapActions} from "vuex"
export default {
    data() {
        return {
            defaultCategory: "all",
            filterList: [
                {
                    name: "Все",
                    category: "all"
                },
                {
                    name: "Мясные",
                    category: "meat"
                },
                {
                    name: "Вегетарианская",
                    category: "vegan"
                },
                {
                    name: "Гриль",
                    category: "grill"
                },
                {
                    name: "Острые",
                    category: "acute"
                },
                {
                    name: "Закрытые",
                    category: "closed"
                }
            ]
        }
    },
    methods: {
        ...mapActions(["GET_CATEGORY_PIZZA","GET_FETCH_PIZZA"]),
        handlerCategory(event) {
            const category = event.target.dataset.category;
            this.defaultCategory = category
            category === "all" ? this.GET_FETCH_PIZZA(): this.GET_CATEGORY_PIZZA(category)
        }
    }
}
</script>

<style lang="scss">
.filter {
    &-category {
        &__list {
        display: flex;
        }
        &__item {
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
        &__link {
            font-family: $bold;
            font-size: 16px;
            padding: 10px 30px;
            border-radius: 30px;
            color: #282828;
            &.active {
                background: #282828;
                color: #fff;
            }
        }
    }
}
</style>