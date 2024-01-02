import { widgetModel } from './db.connect'

const resolvers = {
    getProduct: async ({ id }) => {
        const widgetExists = await widgetModel.findById(id)
        if (!widgetExists) console.log(`COUND NOT FIND WIDGET`)
        return widgetExists
    },
    getAllProduct: async () => {
        return await widgetModel.find()
    },
    createProduct: async ({ input }) => {
        const newWidget = await widgetModel.create({ ...input })
        return newWidget
    },
    updateProduct: async ({ input }) => {
        const updateWidget = await widgetModel.findByIdAndUpdate(input.id, input, {new: true})
        return updateWidget
    },
    deleteProduct: async ({id}) => {
        const deleteWidget = await widgetModel.findByIdAndDelete(id)
        if (!deleteWidget) return "Product Not Found"
        return "Product Deleted!"
    }
}

export default resolvers