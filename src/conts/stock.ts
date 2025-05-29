import type { Product } from "@/types/product";

export const STOCK: Product[] = [
    {
        id: "stock-sillon-relax-beni",
        name: "Beni",
        description: "Butaca fija.",
        price: 260.80,
        mainImage: "/images/products/beni.png",
        images: [
            "/images/products/beni.png",
            "/images/products/beni_2.png",
            "/images/products/beni_3.png"
        ],
        colors: [
            "/images/products/colors/tecno_1.png",
            "/images/products/colors/tecno_2.png",
            "/images/products/colors/tecno_3.png"
        ],
        category: "Sillón relax",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "50.000 ciclos."
        }
    },
    {
        id: "stock-sofas-night",
        name: "Night",
        description: "Sofá cama, apertura italiana, colchón 140 cms x 190 cms y 14 cms de alto con viscoelástica. Medida total 211 cms.",
        price: 973.10,
        mainImage: "/images/products/night.png",
        images: [
            "/images/products/night.png",
            "/images/products/night_2.png",
            "/images/products/night_3.png",
            "/images/products/night_4.png"
        ],
        colors: [
            "/images/products/colors/night_1.png",
            "/images/products/colors/night_2.png",
            "/images/products/colors/night_3.png"
        ],
        category: "Sofás",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "20.000 ciclos.",
            resistencia_piling: "4-5."
        },
        features: {
            estructura: "Mecanismo cama de fácil apertura tipo italiano, con malla electrosoldada y cincha tipo nea en la sentada. Resto de estructura en madera de pino.",
            asientos: "Espuma de poliuretano de 30 kg. Recubierta de poliéster. Desenfundables para facilitar su limpieza.",
            respaldo: "Fibra hueca siliconada. 100% desenfundables para facilitar su limpieza.",
            patas: "Madera color wengué.",
            brazos: "Desenfundables en fibra hueca 100%.",
        }
    },
    {
        id: "stock-sillon-relax-heart",
        name: "Heart",
        description: "Sillón relax eléctrico con pulsador.",
        price: 702.19,
        mainImage: "/images/products/heart.png",
        images: [],
        colors: [
            "/images/products/colors/heart_1.png",
            "/images/products/colors/heart_2.png",
            "/images/products/colors/heart_3.png"
        ],
        category: "Sillón relax",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "25.000 ciclos.",
            resistencia_piling: "4-5."
        },
        features: {
            estructura: "Madera de pino.",
            asientos: "Espuma de poliuretano de alta densidad.",
            respaldo: "Almohadas de fibra hueca siliconada.",
            patas: "Madera color wengué.",
            brazos: "Desenfundables en fibra hueca 100%.",
        }
    }, 
    {
        id: "stock-sofas-luz",
        name: "Luz",
        description: "Sofá 3 plazas fijo. Medida total 185 cms.",
        price: 526.15,
        mainImage: "/images/products/luz.png",
        images: [
            "/images/products/luz.png",
            "/images/products/luz_2.png",
            "/images/products/luz_3.png",
            "/images/products/luz_4.png"
        ],
        colors: [
            "/images/products/colors/luz_1.png",
            "/images/products/colors/luz_2.png",
            "/images/products/colors/luz_3.png"
        ],
        category: "Sofás",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "25.000 ciclos.",
            resistencia_piling: "4."
        },
        features: {
            estructura: "Madera de pino y tablero aglomerado. Cinchas elásticas.",
            asientos: "Goma 25 kg con labio.",
            respaldo: "Mezcla de fibra y goma.",
            patas: "Madera color wengué",
            brazos: "Desenfundables en fibra hueca 100%",
        }
    },
    {
        id: "stock-sofas-ruth",
        name: "Ruth",
        description: "Sofá 3 plazas fijo. Medida total 197 cms.",
        price: 595.74,
        mainImage: "/images/products/ruth.png",
        images: [
            "/images/products/ruth.png",
            "/images/products/ruth_2.png",
            "/images/products/ruth_3.png",
            "/images/products/ruth_4.png"
        ],
        colors: [
            "/images/products/colors/ruth_1.png",
            "/images/products/colors/ruth_2.png",
            "/images/products/colors/ruth_3.png"
        ],
        category: "Sofás",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "25.000 ciclos.",
            resistencia_piling: "4-5."
        },
        features: {
            estructura: "Madera de pino de alta calidad",
            asientos: "Espuma de poliuretano de 28 kg. Recubierta de poliéster. Desenfundables para facilitar el lavado.",
            respaldo: "Fibra hueca siliconada. 100% desenfundables para facilitar el lavado.",
            patas: "Madera color wengué",
            brazos: "Desenfundables en fibra hueca 100%",
        }
    }, 
    {
        id: "stock-sillon-relax-hot",
        name: "Hot",
        description: "Sillón relax 1 motor eléctrico.",
        price: 478.18,
        mainImage: "/images/products/hot.png",
        images: [
            "/images/products/hot.png",
            "/images/products/hot_2.png",
            "/images/products/hot_3.png",
            "/images/products/hot_4.png"
        ],
        colors: [
            "/images/products/colors/hot_1.png",
            "/images/products/colors/hot_2.png"
        ],
        category: "Sillón relax",
        
    }
] as const;