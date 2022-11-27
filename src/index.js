const app = require("./app")
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://matea:1234@cluster0.7sgpdg7.mongodb.net/rep10?retryWrites=true&w=majority").then(() => {
  console.log("*** DATABASE CONNECTED ***")
  app.listen(8080, () => {
    console.log("SERVER LISTENING ON PORT 8080")
  })
})
