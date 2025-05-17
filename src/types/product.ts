
export type productCategory = 'Sofá chaiselongue' | 'Sofás' | 'Sillón relax' | 'Descanso' | 'Stock';

type idProduct = 
'sofa-chaise-longue-paris' | 
'sofa-ibiza' | 
'sofa-bella' | 
'sofa-chaise-longue-toscama' | 
'stock-sillon-relax-beni' |
'sofa-chaise-longue-berlin' | 
'sofa-chaise-longue-techno' |
'sofa-chaise-longue-blue' |
'sillon-relax-oregon' |
'sillon-relax-paris' |
'sofa-chaise-longue-ilusion' |
'descanso-pack-colchon-canape' |
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
'Techno' |
'Blue' |
'Oregón' |
'Ilusión' |
'Pack colchón + canapé' |
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
    category: productCategory;
    specifications: {
        [key: string]: string | number | boolean;
    };
}