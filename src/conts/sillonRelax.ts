import type { Product } from "@/types/product";

export const SILLON_RELAX: Product[] = [
    {
        id: "sillon-relax-oregon",
        name: "Oregón",
        description: "Sillón relax elevador de 1 motor.",
        price: 564.27,
        mainImage: "/images/products/oregon.png",
        images: [
            "/images/products/oregon.png",
            "/images/products/oregon_2.png",
            "/images/products/oregon_3.png",
            "/images/products/oregon_4.png"
        ],
        colors: [
            "/images/products/colors/oregon_1.png",
            "/images/products/colors/oregon_2.png",
            "/images/products/colors/oregon_3.png"
        ],
        category: "Sillón relax",
        
    },
    {
        id: "sillon-relax-paris",
        name: "París",
        description: "Sillón relax eléctrico con puerto USB-C.",
        price: 760,
        mainImage: "/images/products/paris_sillon.png",
        images: [
        ],
        colors: [
            "/images/products/colors/paris_chai_azul.png",
            "/images/products/colors/paris_chai_gris_osc.png",
            "/images/products/colors/paris_chai_gris_cla.png"
        ],
        category: "Sillón relax",
    }
] as const;