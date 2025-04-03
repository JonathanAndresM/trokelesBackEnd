import "dotenv/config.js";
import "../../config/db.js";
import Product from "../Products.js";

const products = [
    {
        sku: "CTN001",
        name: "Globo Metalizado Feliz Cumpleaños",
        description: "Globo metalizado con diseño de 'Feliz Cumpleaños' en varios colores.",
        category: "Globos",
        price: 500,
        priceWholesale: 450,
        minQuantityWholesale: 10,
        stock: 100,
        images: "url_globo_metalizado.jpg",
        colors: ["Rojo", "Azul", "Dorado"],
        sizes: ["18 pulgadas"],
        weight: 0.02,
        dimensions: { width: 45, height: 45, depth: 5 },
        isActive: true,
        isFeatured: true,
        isNewProduct: false,
        discount: { percentage: 10, validUntil: "2025-12-31" },
        ratings: { average: 4.5, reviews: [] }
    },
    {
        sku: "CTN002",
        name: "Confeti de Papel Multicolor",
        description: "Bolsa de confeti de papel en varios colores, ideal para fiestas y celebraciones.",
        category: "Decoración",
        price: 300,
        priceWholesale: 250,
        minQuantityWholesale: 15,
        stock: 200,
        images: "url_confeti_multicolor.jpg",
        colors: ["Multicolor"],
        sizes: ["Pequeño", "Mediano"],
        weight: 0.1,
        dimensions: { width: 10, height: 15, depth: 5 },
        isActive: true,
        isFeatured: false,
        isNewProduct: true,
        discount: { percentage: 5, validUntil: "2025-06-30" },
        ratings: { average: 4.2, reviews: [] }
    },
    {
        sku: "CTN003",
        name: "Antifaz de Fiesta Brillante",
        description: "Antifaz decorado con brillo y detalles en purpurina, disponible en varios colores.",
        category: "Accesorios",
        price: 250,
        priceWholesale: 200,
        minQuantityWholesale: 20,
        stock: 150,
        images: "url_antifaz_fiesta.jpg",
        colors: ["Dorado", "Plateado", "Negro"],
        sizes: ["Único"],
        weight: 0.05,
        dimensions: { width: 20, height: 10, depth: 2 },
        isActive: true,
        isFeatured: true,
        isNewProduct: false,
        discount: { percentage: 0 },
        ratings: { average: 4.7, reviews: [] }
    },
    {
        sku: "CTN004",
        name: "Gorro de Cumpleaños",
        description: "Gorro cónico de cartón con diseño de cumpleaños, elástico ajustable.",
        category: "Accesorios",
        price: 150,
        priceWholesale: 120,
        minQuantityWholesale: 30,
        stock: 250,
        images: "url_gorro_cumpleanos.jpg",
        colors: ["Rojo", "Azul", "Verde"],
        sizes: ["Único"],
        weight: 0.02,
        dimensions: { width: 15, height: 25, depth: 5 },
        isActive: true,
        isFeatured: false,
        isNewProduct: false,
        discount: { percentage: 10, validUntil: "2025-09-15" },
        ratings: { average: 4.0, reviews: [] }
    },
    {
        sku: "CTN005",
        name: "Serpentina en Aerosol",
        description: "Aerosol con serpentina en varios colores, ideal para fiestas y eventos.",
        category: "Accesorios",
        price: 600,
        priceWholesale: 550,
        minQuantityWholesale: 10,
        stock: 120,
        images: "url_serpentina_aerosol.jpg",
        colors: ["Amarillo", "Azul", "Rosa"],
        sizes: ["250ml"],
        weight: 0.3,
        dimensions: { width: 6, height: 20, depth: 6 },
        isActive: true,
        isFeatured: true,
        isNewProduct: true,
        discount: { percentage: 15, validUntil: "2025-08-31" },
        ratings: { average: 4.8, reviews: [] }
    },
    {
        sku: "CTN006",
        name: "Piñata Estrella",
        description: "Piñata en forma de estrella con compartimento para dulces y juguetes.",
        category: "Juegos",
        price: 1200,
        priceWholesale: 1100,
        minQuantityWholesale: 5,
        stock: 50,
        images: "url_pinata_estrella.jpg",
        colors: ["Rojo", "Azul", "Verde"],
        sizes: ["Mediano", "Grande"],
        weight: 0.8,
        dimensions: { width: 50, height: 50, depth: 20 },
        isActive: true,
        isFeatured: false,
        isNewProduct: false,
        discount: { percentage: 5, validUntil: "2025-07-30" },
        ratings: { average: 4.3, reviews: [] }
    }
];

Product.insertMany(products)
    .then(() => {
        console.log("Products added successfully!");
    })
    .catch((error) => {
        console.error("Error adding products: ", error.message);
    });
