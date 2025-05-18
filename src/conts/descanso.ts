import type { Product } from "@/types/product";

export const DESCANSO: Product[] = [
    {
        id: "descanso-pack-colchon-canape",
        name: "Pack colchón + canapé",
        description: "Pack colchón Descans 23 + canapé Amanda",
        price: 683.57,
        mainImage: "/images/logo.webp",
        images: [],
        category: "Descanso",
        specifications: {
            material: "Viscoelástico",
            firmness: "Media",
            dimensions: "150 x 190 x 25 cm",
            weight: 25,
            warranty: "10 años",
            assemblyRequired: false,
        },
    }
] as const;