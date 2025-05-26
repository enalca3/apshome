import type { Product } from "@/types/product";

export const SOFA_CHAISELONGUE: Product[] = [
    {
        id: "sofa-chaiselongue-paris",
        name: "París",
        description: "Sofá chaiselongue 3 plazas + ch arcón, asiento eléctrico deslizante + USB-C. Medida total 300 cms.",
        price: 1800,
        mainImage: "/images/products/paris.png",
        images: [
            "/images/products/paris.png",
            "/images/products/paris_2.png",
            "/images/products/paris_3.png",
            "/images/products/paris_4.webp"
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
        id: "sofa-chaiselongue-toscama",
        name: "Toscama",
        description: "Sofá chaiselongue 3 plazas + CH fijo, brazo arco. Medida total 285 cms.",
        price: 1260,
        mainImage: "/images/products/toscama.png",
        images: [
            "/images/products/toscama.png",
            "/images/products/toscama_2.png",
            "/images/products/toscama_3.png"
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
        id: "sofa-chaiselongue-berlin",
        name: "Berlin",
        description: "Sofá chaiselongue 3 plazas + ch deslizante, asientos extraibles y brazo deslizante. Medida total 285 cms.",
        price: 1751.93,
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
        id: "sofa-chaiselongue-tecno",
        name: "Tecno",
        description: "Sofá chaiselongue 3 plazas ch fijo, asiento extraible y respaldo reclinable. Medida total 275 cms.",
        price: 1100,
        mainImage: "/images/products/tecno_chai.png",
        images: [
            "/images/products/tecno_chai.png",
            "/images/products/tecno_chai_2.png",
            "/images/products/tecno_chai_3.png",
            "/images/products/tecno_chai_4.png"
        ],
        category: "Sofá chaiselongue",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "275 x 150 x 90 cm",
            weight: 80,
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "sofa-chaiselongue-blue",
        name: "Blue",
        description: "Sofá chaiselongue 3 plazas + ch arcón, brazo con dos puffs extensibles. Medida total 285 cms.",
        price: 1500,
        mainImage: "/images/products/blue.png",
        images: [
            "/images/products/blue.png",
            "/images/products/blue_2.png",
            "/images/products/blue_3.png"
        ],
        category: "Sofá chaiselongue",
        specifications: {
            material: "Tela",
            color: "Azul",
            dimensions: "295 x 150 x 90 cm",
            weight: 80,
            warranty: "2 años",
            assemblyRequired: true,
        }
    },
    {
        id: "sofa-chaiselongue-ilusion",
        name: "Ilusión",
        description: "Sofá chaiselongue 3 plazas + ch fijo, asientos extensibles y respaldo reclinable. Medida total 290 cms.",
        price: 1250,
        mainImage: "/images/products/ilusion.png",
        images: [
            "/images/products/ilusion.png",
            "/images/products/ilusion_2.png",
            "/images/products/ilusion_3.png"
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
    }

] as const;