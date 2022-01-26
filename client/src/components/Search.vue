<template>
    <form action="#">
        <input v-model="filters.title" type="text" placeholder="SEARCH" class="search-bar">
        <button class="btn search-btn" @click="shareFilters" ><i class="fas fa-search"></i></button>
        <button class="btn filter" @click="filterDropdown = !filterDropdown"><i class="fas fa-filter"></i></button>

        <div class="dropdowns" :class="{active: filterDropdown}">
            <div class="triangle"></div>
            <input v-model="filters.location" type="text" placeholder="Find a location..." class="search-bar">
            
            <div class="range">
                <p>Min Pay: £{{filters.pay}}</p>
                <vue3-slider v-model="filters.pay" tooltip color="#05386B" track-color="#f4f4f4" width="100%" :max="25"/>
                
            </div>

            <div class="range">
                <p>Max Hours: {{filters.hours}}</p>
                <vue3-slider v-model="filters.hours" tooltip color="#05386B" track-color="#f4f4f4" width="100%" :max="40"/>
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from "vue"
import slider from "vue3-slider"

export default {
    name: "search",
    components: {
        "vue3-slider": slider
    },
    data() {
        let filters = ref({
            title: "",
            pay: 0,
            hours: 0,
            location: ""
        })
        let filterDropdown = false
        return {filters, filterDropdown}
    },
    methods: {
        shareFilters() {
            this.$emit("receiveFilters", this.filters)
        }
    },
    mounted() {
        this.$emit("receiveFilters", this.filters)
    }
}

</script>

<style scoped>

    form {
        position: relative;
        width: 95%;
        max-width: 350px;
        margin: 1rem auto;
        display: flex;
        justify-content: space-between;
    }

    .search-btn {
        aspect-ratio: 1/1;
        background: var(--green);
        color: var(--light-grey);
        padding: .25rem;
        min-width:  37px;
    }

    .filter {
        position: relative;
        aspect-ratio: 1/1;
        background: var(--blue);
        color: var(--light-grey);
        padding: .25rem;
        min-width:  37px;
    }

    .search-bar {
        padding: .5rem 1.5rem;
        color: var(--grey);
        font-weight: bold;
        border: 2px solid var(--grey);
        border-radius: 1rem;
        font-size: 14px;
        min-width: 50%;
        max-width: 100%;
    }

    .search-bar:focus {
        outline: none;
        border: 2px solid var(--grey);
    }

    .active {
        display: flex !important;
    }

    .dropdowns {
        position: absolute;
        z-index: 100;
        top: 3rem;
        right: 1rem;
        background: var(--light-green);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        gap: 1rem;
        border-radius: 10px;
        width: 70vw;
    }

    .triangle {
        background: var(--light-green);
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        position: absolute;
        top: -1rem;
        right: 0;
        aspect-ratio: 1/1;
        width: 2rem;
    }

    select {
        background: var(--blue);
        border: none;
        color: var(--light-grey);
        text-transform: uppercase;
        width: 100%;
        padding: .25rem .5rem;
        border-radius: 10px;
        font-weight: bold;
        font-size: 14px;
    }

    .range {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        gap: .25rem;
        width: 100%;
        color: var(--grey);
        text-transform: uppercase;
        font-size: 14px;
    }

    label {
        color: var(--grey);
        font-weight: bold;
        text-transform: uppercase;
    }
</style>