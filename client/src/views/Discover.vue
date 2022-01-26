<template>
    <Header />
    <Search @receiveFilters="checkFilters($event)"/>
    <ListingContainer :filters="this.filters"/>
</template>

<script>
import { ref } from "vue"
import Header from "../components/Header.vue"
import Search from "../components/Search.vue"
import ListingContainer from "../components/ListingContainer.vue"

export default {
    name: "discover",
    components: {
        Header,
        Search,
        ListingContainer
    },
    data() {
        let filters = ref({})

        return {filters}
    },
    methods: {
        checkFilters(data) {
            this.filters = data
        }
    }
}

</script>

<style scoped>

</style>

