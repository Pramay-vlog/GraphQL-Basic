import mongoose from "mongoose";
import { Sequelize, DataType, DataTypes } from "sequelize"
import _ from "lodash"
import casual from "casual"

// Mongodb
mongoose
    .connect(`mongodb://localhost/graphqlTest`)
    .then(() => {
        console.log('DB connection established')
    }).catch((e) => {
        console.log(`DB connection error: ${e}`)
    })

const widgetSchema = new mongoose.Schema({
    name: String,
    price: Number,
    isSoldOut: String,
    stock: Number,
    stores: Array,
})

const widgetModel = mongoose.model('widget', widgetSchema, 'widget')

// Sequelize
const sequelize = new Sequelize("sqlite::memory:")

const categories = sequelize.define("Categories", {
    category: DataTypes.STRING,
    description: DataTypes.STRING
})

categories.sync({ force: true }).then(() => {
    _.times(5, (i) => {
        categories.create({
            category: casual.word,
            description: casual.sentence
        })
    })
})

export { widgetModel, categories }