<template>
    <header>
        <h1>jobfair</h1>
    </header>
    
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--green);
        min-height: 4rem;
        padding: 0 1rem;
    }

    h1 {
        color: var(--light-grey);
        text-transform: uppercase;
        font-size: 48px;
    }
</style>