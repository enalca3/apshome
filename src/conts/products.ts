import type { Product } from "@/types/product";


export const PRODUCTS: Product[] = [
    {
        id: "sofa-chaise-longue-paris",
        name: "Paris",
        description: "Sofá chaiselongue de diseño moderno y elegante.",
        price: 899.99,
        imageUrl: "/images/products/paris.png",
        category: "Sofá chaiselongue",
    },
    {
        id: "ibiza",
        name: "Ibiza",
        description: "Sofá de dos plazas con un diseño contemporáneo.",
        price: 499.99,
        imageUrl: "/images/products/ibiza.png",
        category: "Sofás",
    },
    {
        id: "love",
        name: "Love",
        description: "Sillón relax con función de masaje y calefacción.",
        price: 299.99,
        imageUrl: "/images/logo.webp",
        category: "Sillón relax",
    },
    {
        id: "ilusion",
        name: "Ilusión",
        description: "Colchón viscoelástico de alta calidad para un descanso óptimo.",
        price: 399.99,
        imageUrl: "/images/logo.webp",
        category: "Descanso",
    },
] as const; // Use 'as const' to ensure the array is treated as a constant