import type { Product } from "@/types/product";

export const SOFAS: Product[] = [
    {
        id: "sofa-ibiza",
        name: "Ibiza",
        description: "Sofá de tres plazas, asientos extensibles y brazo abatible.",
        price: 1436,
        mainImage: "/images/products/ibiza.png",
        images: [
            "/images/products/ibiza.png",
            "/images/products/ibiza_2.png",
            "/images/products/ibiza_3.png",
            "/images/products/ibiza_4.png"
        ],
        colors: [
            "/images/products/colors/ibiza-magia-3.png",
            "/images/products/colors/ibiza-magia-26.png",
            "/images/products/colors/ibiza-magia-20.png"
        ],
        category: "Sofás",
        specifications: {
            composicion: "100% poliéster.",
            resistencia_abrasion: "25.000 ciclos.",
            resistencia_piling: "4-5."
        },
        features: {
            estructura: "Madera de pino de alta calidad.",
            asientos: "Espuma de poliuretano de 32 kg. Recubierta de poliéster. Desenfundables para facilitar su limpieza. Mecanismo deslizante de gran apertura a línea del chaiselongue.",
            respaldo: "Espuma de poliuretano de 25 kg. Súper suave. Reclinable por puntos con mecanismo italiano cromado. Riñoneras en fibra hueca siliconada. 100% desenfundables para facilitar su limpieza.",
            patas: "Madera de color wengué.",
            brazos: "Desenfundables en fibra hueca 100%. Brazos arcón de 30 cm con reclinable punto a punto.",
        }
    },
    {
        id: "sofa-bella",
        name: "Bella",
        description: "Sofá cama con apertura italiana, colchón 140 x 190 cm. 14 cm de alto con viscoelástica.",
        price: 870,
        mainImage: "/images/products/bella.png",
        images: [
            "/images/products/bella.png",
            "/images/products/bella_2.png",
            "/images/products/bella_3.png",
            "/images/products/bella_4.png"
        ],
        colors: [
            "/images/products/colors/bella_1.png",
            "/images/products/colors/bella_2.png",
            "/images/products/colors/bella_3.png"
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
    }
] as const;