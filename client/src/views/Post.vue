<template>
    <Header />
    <form>
        <label for="title">Job Title:</label>
        <input type="text" name="title" class="input-field">
        
        <label for="location">Location:</label>
        <input type="text" name="location" class="input-field">
        
        <label for="hours">Hours:</label>
        <input type="number" name="hours" class="input-field">
        
        <label for="pay">Pay (Hourly):</label>
        <input type="number" name="pay" class="input-field">
        
        <label for="company">Company:</label>
        <input type="text" name="company" class="input-field">

        <label for="url">Application URL:</label>
        <input type="text" name="url" class="input-field">

        <button type="submit" class="btn submit-btn">Submit Job</button>
    </form>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "post",
    components: {
        Header,
    },
    methods: {
        submitRequest {
            
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        margin: 2rem;
        margin-top: 1rem;
    }

    label {
        margin-bottom: .2rem;
        font-weight: bold;
    }

    .input-field {
        padding: .3rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        border: 2px solid var(--grey);
        font-size: 14px;
    }

    .input-field:focus {
        outline: none;
    }

    .submit-btn {
        background: var(--blue);
        color: var(--light-grey);
        padding: .5rem;
        margin-bottom: 3rem;
    }
</style>