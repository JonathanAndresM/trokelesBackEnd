import { Schema, model } from "mongoose";

let collection = "users";
let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "editor", "user"], default: "user" },
    isWholesale: { type: Boolean, default: false },
    fiscalInfo: {
        taxId: { type: String, default: "" },
        companyName: { type: String, default: "" },
    },
    productsPurchased: [{ type: Schema.Types.ObjectId, ref: "products" }],
}, {
    timestamps: true
});

let User = model(collection, schema);
export default User;