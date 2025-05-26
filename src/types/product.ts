
export type productCategory = 'Sofá chaiselongue' | 'Sofás' | 'Sillón relax' | 'Stock';

type idProduct = 
'sofa-chaiselongue-paris' | 
'sofa-ibiza' | 
'sofa-bella' | 
'sofa-chaiselongue-toscama' | 
'stock-sillon-relax-beni' |
'sofa-chaiselongue-berlin' | 
'sofa-chaiselongue-tecno' |
'sofa-chaiselongue-blue' |
'sillon-relax-oregon' |
'sillon-relax-paris' |
'sofa-chaiselongue-ilusion' |
'stock-sofas-night' |
'stock-sofas-luz' |
'stock-sillon-relax-heart' |
'stock-sillon-relax-hot' |
'stock-sofas-ruth';

type productName = 
'París' | 
'Ibiza' | 
'Bella' | 
'Toscama' | 
'Beni' | 
'Berlin' | 
'Tecno' |
'Blue' |
'Oregón' |
'Ilusión' |
'Night' |
'Heart' |
'Luz' |
'Ruth' |
'Hot';

export interface Product {
    id: idProduct;
    name: productName;
    description: string;
    price: number;
    mainImage: string;
    images: string[];
    colors?: string[];
    category: productCategory;
    specifications: {
        [key: string]: string | number | boolean;
    };
}