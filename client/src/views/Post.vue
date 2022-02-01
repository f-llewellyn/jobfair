<template>
    <Header />
    <form autocomplete="off">
        <label for="title">Job Title:</label>
        <input type="text" name="title" class="input-field" v-model="title" required>
        
        <label for="location">Location:</label>
        <input type="text" name="location" class="input-field" step="any" v-model="location" required>
        
        <label for="hours">Hours:</label>
        <input type="number" name="hours" class="input-field" step="any" v-model="hours" required>
        
        <label for="pay">Pay (Hourly):</label>
        <input type="number" name="pay" class="input-field" v-model="pay" required>
        
        <label for="company">Company:</label>
        <input type="text" name="company" class="input-field" v-model="company" required>

        <label for="url">Application URL:</label>
        <input type="text" name="url" class="input-field" v-model="url" required>

        <input type="submit" @click.prevent="submitRequest" class="btn submit-btn">
    </form>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "post",
    components: {
        Header,
    }, 
    data() {
        let title, location, hours, pay, company, url
        return {title, location, hours, pay, company, url}
    },
    methods: {
        async submitRequest() {
            if (this.title && this.location && this.hours && this.pay && this.company && this.url) {

                this.pay = this.pay * 100

                let listing = {
                    title: this.title,
                    location: this.location,
                    hours: this.hours,
                    pay: this.pay,
                    company: this.company,
                    applicationUrl: this.url
                }

                fetch("http://localhost:3000/api", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(listing),
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Success:", data)
                })
                .catch((error) => {
                    console.error("Error:", error)
                })
            }
        },
        displayValues(title) {
            console.log(title)
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