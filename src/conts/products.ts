import type { Product } from "@/types/product";


export const PRODUCTS: Product[] = [
    {
        id: "sofa-chaise-longue-paris",
        name: "Paris",
        description: "Sofá chaiselongue de diseño moderno y elegante.",
        price: 899.99,
        imageUrl: "/images/products/paris.png",
        images: [
            "/images/products/paris.png",
            "/images/products/paris_2.png",
            "/images/products/paris_3.png"
        ],
        category: "Sofá chaiselongue",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "250 x 150 x 90 cm",
            weight: 80,
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "ibiza",
        name: "Ibiza",
        description: "Sofá de dos plazas con un diseño contemporáneo.",
        price: 499.99,
        imageUrl: "/images/products/ibiza.png",
        images: [
            "/images/products/ibiza.png",
            "/images/products/ibiza_2.png",
            "/images/products/ibiza_3.png",
            "/images/products/ibiza_4.png"
        ],
        category: "Sofás",
        specifications: {
            material: "Cuero sintético",
            color: "Negro",
            weight: 50,
            dimensions: "200 x 90 x 85 cm",
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "love",
        name: "Love",
        description: "Sillón relax con función de masaje y calefacción.",
        price: 299.99,
        imageUrl: "/images/logo.webp",
        images: [
            "/images/products/love.png",
            "/images/products/love_2.png",
            "/images/products/love_3.png",
            "/images/products/love_4.png"
        ],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "90 x 100 x 110 cm",
            weight: 30,
            warranty: "1 año",
            assemblyRequired: false,
        },
    },
    {
        id: "ilusion",
        name: "Ilusión",
        description: "Colchón viscoelástico de alta calidad para un descanso óptimo.",
        price: 399.99,
        imageUrl: "/images/logo.webp",
        images: [
            "/images/products/ilusion.png",
            "/images/products/ilusion_2.png",
            "/images/products/ilusion_3.png",
            "/images/products/ilusion_4.png"
        ],
        category: "Descanso",
        specifications: {
            material: "Viscoelástico",
            firmness: "Media",
            dimensions: "150 x 190 x 25 cm",
            weight: 25,
            warranty: "10 años",
            assemblyRequired: false,
        },
    },
    {
        id: "descanso-beni",
        name: "Beni",
        description: "Butaca fija de diseño moderno y elegante.",
        price: 219.99,
        imageUrl: "/images/products/beni.png",
        images: [
            "/images/products/beni.png",
            "/images/products/beni_2.png",
            "/images/products/beni_3.png",
            "/images/products/beni_4.png"
        ],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "80 x 90 x 100 cm",
            weight: 20,
            warranty: "2 años",
            assemblyRequired: false,
        },
    },
] as const; // Use 'as const' to ensure the array is treated as a constant