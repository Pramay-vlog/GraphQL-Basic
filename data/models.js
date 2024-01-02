import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String
        price: Float
        isSoldOut: SoldOut
        stock: Int
        stores: [Store]!
    }

    enum SoldOut {
        IN_STOCK
        OUT_OF_STOCK
    }

    type Store {
        storeName: String
    }

    input storeInput {
        storeName: String
    }

    input productInput {
        id: ID
        name: String
        price: Float
        isSoldOut: SoldOut
        stock: Int
        stores: [storeInput]
    }

    input productInputUpdate {
        id: ID!
        name: String
        price: Float
        isSoldOut: SoldOut
        stock: Int
        stores: [storeInput]
    }

    type Query {
        getProduct(id: ID!): Product
        getAllProduct: [Product!]!
    }

    type Mutation {
        createProduct(input: productInput): Product
        updateProduct(input: productInputUpdate): Product
        deleteProduct(id: ID!): String
    }

`)

export default schema