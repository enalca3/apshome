import type { Product } from "@/types/product";

export const SOFA_CHAISELONGUE: Product[] = [
    {
        id: "sofa-chaise-longue-paris",
        name: "Paris",
        description: "Sofá chaiselongue 3 plazas con arcón, brazo arcón, asiento eléctrico deslizante y puerto USB.",
        price: 1428.00,
        mainImage: "/images/products/paris.png",
        images: [
            "/images/products/paris.png",
            "/images/products/paris_2.png",
            "/images/products/paris_3.png",
            "/images/products/paris_4.png"
        ],
        category: "Sofá chaiselongue",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "330 x 150 x 90 cm",
            weight: 80,
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "sofa-chaise-longue-toscama",
        name: "Toscama",
        description: "Sofá chaiselongue 3 plazas + CH fijo, brazo arco. Medida total 285 cms.",
        price: 1476.27,
        mainImage: "/images/products/toscama.png",
        images: [
            "/images/products/toscama.png",
            "/images/products/toscama_2.png",
            "/images/products/toscama_3.png",
            "/images/products/toscama_4.png"
        ],
        category: "Sofá chaiselongue",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "295 x 150 x 90 cm",
            weight: 80,
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
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