<template lang="pug">
Header
main.main
    router-view
Footer
</template>

<script>
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>