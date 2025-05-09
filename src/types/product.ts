
export type productCategory = 'Sofá chaiselongue' | 'Sofás' | 'Sillón relax' | 'Descanso';

type idProduct = 'sofa-chaise-longue-paris' | 'ibiza' | 'love' | 'ilusion' | 'descanso-beni';

type productName = 'Paris' | 'Ibiza' | 'Love' | 'Ilusión' | 'Beni';

export interface Product {
    id: idProduct;
    name: productName;
    description: string;
    price: number;
    imageUrl: string;
    images: string[];
    category: productCategory;
    specifications: {
        [key: string]: string | number | boolean;
    };
}