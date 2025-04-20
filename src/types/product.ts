
export type productCategory = 'Sofá chaiselongue' | 'Sofás' | 'Sillón relax' | 'Descanso';

type idProduct = 'paris' | 'ibiza' | 'love' | 'ilusion';

type productName = 'Paris' | 'Ibiza' | 'Love' | 'Ilusión';

export interface Product {
    id: idProduct;
    name: productName;
    description: string;
    price: number;
    imageUrl: string;
    category: productCategory;
}