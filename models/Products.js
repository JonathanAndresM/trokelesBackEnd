import { Schema, model } from "mongoose";

let collection = "products";
let schema = new Schema({
    sku: { type: String, required: true, unique: true, trim: true }, // Código único del producto
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    priceWholesale: { type: Number, required: true },
    minQuantityWholesale: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true },
    images: { type: String, required: true },
    colors: [{ type: String }],
    sizes: [{ type: String }],
    weight: { type: Number },
    dimensions: {
        width: { type: Number },
        height: { type: Number },
        depth: { type: Number }
    },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false }, // Producto destacado para el home
    isNewProduct: { type: Boolean, default: false }, // Producto novedoso para el home
    discount: {
        percentage: { type: Number, default: 0 },
        validUntil: { type: Date }
    },
    ratings: {
        average: { type: Number, default: 0 },
        reviews: [
            {
                userId: { type: Schema.Types.ObjectId, ref: 'User' },
                comment: { type: String },
                rating: { type: Number, min: 1, max: 5 },
                createdAt: { type: Date, default: Date.now }
            }
        ]
    }
}, {
    timestamps: true
});

// Generar SKU automáticamente si no se proporciona
/*productSchema.pre("save", function (next) {
    if (!this.sku) {
        this.sku = `PROD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    }
    next();
});*/

let Product = model(collection, schema);
export default Product;