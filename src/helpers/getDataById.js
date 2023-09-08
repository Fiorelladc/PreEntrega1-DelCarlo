import products from '../data/products.json';

export const getDataById= (id) => {
    return products.find(product=>product.id==id)
}