import type { Product } from "@/types/product";

export const SOFAS: Product[] = [
    {
        id: "sofa-ibiza",
        name: "Ibiza",
        description: "Sofá de dos plazas y media con un diseño contemporáneo.",
        price: 1115.44,
        mainImage: "/images/products/ibiza.png",
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
            dimensions: "270 x 90 x 85 cm",
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "sofa-bella",
        name: "Bella",
        description: "Sofá cama con apertura italiana.",
        price: 779.38,
        mainImage: "/images/products/bella.png",
        images: [
            "/images/products/bella.png",
            "/images/products/bella_2.png",
            "/images/products/bella_3.png",
            "/images/products/bella_4.png"
        ],
        category: "Sofás",
        specifications: {
            material: "Tela",
            color: "Orquidea",
            dimensions: "185 x 95 x 105 cm",
            weight: 30,
            warranty: "1 año",
            assemblyRequired: false,
        },
    }
] as const;