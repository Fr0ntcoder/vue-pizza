<template lang="pug">
.container
    .pizza-top
        filter-category
        sort
    .pizza-wrap
        h2.pizza-title Все пиццы
        ul.pizza-list(v-if="GET_PIZZA.length != 0")
            pizza-item(:list="GET_PIZZA")
        p.pizza-empty(v-else) Нет такой пиццы
</template>
<script>
import filterCategory from "@/components/ui/filter-category"
import sort from "@/components/ui/sort"
import pizzaItem from "@/components/pizza/pizza-item"
import {mapActions,mapGetters} from "vuex"
export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    sort,
    filterCategory,
    pizzaItem
  },
  computed: {
        ...mapGetters(["GET_PIZZA"])
  },
  methods: {
      ...mapActions(["GET_FETCH_PIZZA"]),
  },
  mounted() {
        this.GET_FETCH_PIZZA();
  }
}
</script>
<style lang="scss">
.pizza {
    &-empty {
        font-size: 20px;
    }
    &-title {
        font-size: 32px;
        font-family: $bold;
        margin-bottom: 35px;
    }
    &-top {
        display: flex;
        justify-content: space-between;
        padding-top: 80px;
        margin-bottom: 50px;
    }
    &-list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

}

</style>
