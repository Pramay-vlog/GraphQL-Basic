import express from "express"
const app = express()
import { graphqlHTTP } from "express-graphql"
import schema from "./data/models"
import resolvers from "./data/resolvers"
import "./data/db.connect"

app.get("/", (req, res) => {
    res.send("GraphQL is Amazing")
})

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(8080, () => {
    console.log(`running server on http://localhost:8080/graphql`)
})