import type { Product } from "@/types/product";

export const SILLON_RELAX: Product[] = [
    {
        id: "sillon-relax-oregon",
        name: "Oregón",
        description: "Sillón relax elevador 1 motor.",
        price: 564.27,
        mainImage: "/images/products/oregon.png",
        images: [
            "/images/products/oregon.png",
            "/images/products/oregon_2.png",
            "/images/products/oregon_3.png",
            "/images/products/oregon_4.png"
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
    {
        id: "sillon-relax-paris",
        name: "París",
        description: "Sillón relax eléctrico con puerto USB-C.",
        price: 700,
        mainImage: "/images/logo.webp",
        images: [
        ],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "80 x 90 x 100 cm",
            weight: 20,
            warranty: "2 años",
            assemblyRequired: false,
        },
    }
] as const;