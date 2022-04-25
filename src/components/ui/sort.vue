<template lang="pug">
.pizza-sort(v-click-outside="close")
    .pizza-sort__text
        span(v-if="active").pizza-sort__icon.pizza-sort__icon-down
            .fa-solid.fa-sort-down
        span(v-else).pizza-sort__icon.pizza-sort__icon-up
            .fa-solid.fa-sort-up
        span.pizza-sort__text-inner 
            span Сортировка по: 
            a(href="#" @click.prevent="dropMenu($event)") {{defaultSort}}
        ul.pizza-sort__list(v-if="active" @click.prevent="handlerSort($event)")
            li.pizza-sort__item(v-for="(item,i) of sort" :key="i")
                a(href="#" :data-sort="`${item.value}`" :class="{'active': item.name === defaultSort}").pizza-sort__link {{item.name}}
</template>

<script>
import clickOutside from '@/directives/clickOutside'
import {mapActions} from "vuex"
export default {
    data() {
        return {
            defaultSort: "популярности", 
            active: false,
            sort: [
                {
                    name: "популярности",
                    value: "popular"
                },
                {
                    name: "по цене ",
                    value: "price"
                },
                {
                    name: "по алфавиту",
                    value: "alpha"
                },
            ],
        }
    },
    directives: {
        clickOutside
    },
    methods: {
        ...mapActions(["GET_SORT_PIZZA"]),
        dropMenu() {
            this.active = !this.active;
        },
        close() {
            this.active = false;
        },
        handlerSort(event) {
           const target = event.target.dataset.sort;
           const result = [...this.sort].find(el => el.value === target);
           this.defaultSort = result.name;
           this.GET_SORT_PIZZA(target)
           this.active = false;
        }
    }
}
</script>

<style lang="scss">
.pizza {
    &-sort {
        &__list {
            position: absolute;
            top: 120%;
            right: 0;
            padding: 15px 0;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
        }
        &__item {

        }
        &__link {
            display: block;
            font-family: $regular;
            font-size: 14px;
            padding: 10px 15px;
            color: #000;
            &.active {
                background: rgba(254, 95, 30,0.05);
            }
        }
        &__text {
            position: relative;
            display: flex;
            font-size: 14px;
            align-items: center;
            padding-left: 15px;
            &-inner {
                font-family: $bold;
                & a {
                    border-bottom: 1px dashed $orange;
                    color: $orange;
                }
            }
        }
        &__icon {
            position: absolute;
            left: 0;
            flex: none;
            &-down {
                top: -2px;
            }
            &-up {
                top: 4px;
            }
        }
    }
}
</style>