import products from '../data/products.json';

export const getData= (categoryId) => {
    return products.filter(product=>product.category==categoryId)
}