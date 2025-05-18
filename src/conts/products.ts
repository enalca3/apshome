import type { Product } from "@/types/product";


export const PRODUCTS: Product[] = [
    {
        id: "sofa-chaise-longue-paris",
        name: "París",
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
        description: "Sofá chaiselongue 3 plazas, deslizante al suelo tipo cama y cabezal reclinable.",
        price: 967.40,
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
    },
    {
        id: "sillon-relax-beni",
        name: "Beni",
        description: "Butaca fija de diseño moderno y elegante.",
        price: 219.99,
        mainImage: "/images/products/beni.png",
        images: [
            "/images/products/beni.png",
            "/images/products/beni_2.png",
            "/images/products/beni_3.png"
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