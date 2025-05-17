import type { Product } from "@/types/product";

export const STOCK: Product[] = [
    {
        id: "stock-sillon-relax-beni",
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
    }
] as const;