import type { Product } from "@/types/product";

export const DESCANSO: Product[] = [
    {
        id: "sofa-chaise-longue-berlin",
        name: "Berlin",
        description: "Sofá chaiselongue 3 plazas, brazo deslizante y asiento extraible.",
        price: 1184.94,
        mainImage: "/images/products/berlin.png",
        images: [
            "/images/products/berlin.png",
            "/images/products/berlin_2.png",
            "/images/products/berlin_3.png"
        ],
        category: "Sofá chaiselongue",
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