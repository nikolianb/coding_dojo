const express = require("express");
const { faker } = require("@faker-js/faker"); 
const app = express();
const port = 5176;

const randomName = faker.person.fullName(); 

const createUser = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const newUser = {
        id : faker.string.uuid(), 
        firstName: firstName,
        lastName: lastName, 
        password: faker.internet.password({ length: 20 }),
        phone: faker.phone.number({ style: 'national' }),
        email: faker.internet.email({firstName: firstName, lastName: lastName})
    };
    return newUser;
};
    
const newUser = createUser();

const createCompany = () => {
  const newCompany = {
    id : faker.string.uuid(),
    companyName: faker.company.name(),
    Address: {
      Street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  }
  return newCompany;
}

const newCompany = createCompany()

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
  res.json({ newUser });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ newCompany });
});

app.get("/api/user/company", (req, res) => {
  res.json({ newUser, newCompany });
  res.json({ newCompany });
});



app.listen(port, () => console.log(`Listening on port: ${port}`));
