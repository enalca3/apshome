
export type productCategory = 'Sofá chaiselongue' | 'Sofás' | 'Sillón relax' | 'Descanso';

type idProduct = 'sofa-chaise-longue-paris' | 'sofa-ibiza' | 'sofa-bella' | 'sofa-chaise-longue-toscama' | 'sillon-relax-beni' | 'sofa-chaise-longue-berlin';

type productName = 'Paris' | 'Ibiza' | 'Bella' | 'Toscama' | 'Beni' | 'Berlin';

export interface Product {
    id: idProduct;
    name: productName;
    description: string;
    price: number;
    mainImage: string;
    images: string[];
    category: productCategory;
    specifications: {
        [key: string]: string | number | boolean;
    };
}