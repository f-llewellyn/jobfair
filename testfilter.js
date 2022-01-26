let filters = {
    title: "",
    pay: 0,
    hours: 0,
    location: "",
}

let data = [
    {
        _id: "61d8607b1b0158c8cc3259ef",
        title: "Project Manager",
        location: "Sheffield",
        hours: 40,
        pay: 25,
        company: "Serverlec",
        applicationUrl: "https://fllewellyn.com",
        __v: 0
    },
    {
        _id: "61d861c91b0158c8cc3259f3",
        title: "Customer Advisor",
        location: "Chesterfield",
        hours: 16,
        pay: 10,
        company: "Tesco",
        applicationUrl: "https://fllewellyn.com",
        __v: 0
    },
    {
        _id: "61d861e01b0158c8cc3259f5",
        title: "Casual It Technician",
        location: "Chesterfield",
        hours: 16,
        pay: 10,
        company: "Redhill academy",
        applicationUrl: "https://fllewellyn.com",
        __v: 0
    }
]

data = data
    .filter(listing => {
        if (filters.title) {
            return listing.title.includes(filters.title)
        } else {
            return listing
        }
    })
    .filter(listing => {
        return listing.pay >= filters.pay
    })
    .filter(listing => {
        if (filters.hours > 0) {
            return listing.hours <= filters.hours
        } else {
            return listing
        }
    })
    .filter(listing => {
        if (filters.location) {
            return listing.location === filters.location
        } else {
            return listing
        }
    })

console.log(data)