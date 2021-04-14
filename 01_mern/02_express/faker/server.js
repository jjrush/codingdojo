const express = require("express");
const faker = require("faker");
const app = express();


class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.random.number();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

class Combo {
    constructor() {
        this.user = new User();
        this.company = new Company();
    }
}

function getNewUser() {
    return new User();
}

function getNewCompany() {
    return new Company();
}

function getNewCombo() {
    return new Combo();
}

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Sup nerd");
});

app.get("/api/users/new", (req, res) => {
    res.json( getNewUser() );
});

app.get("/api/company/new", (req, res) => {
    res.json( getNewCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( getNewCombo() );
});


// run the server
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);