import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
//import axios from 'axios';
import products from '../data/products.json'

const Home = () => {

    const [data , setData] = useState ([]);
    const [loading , setLoading] = useState (true);

console.log (data)

    useEffect(() => {
        /*axios
        .get ("https://dummyjson.com/products")
        .then ((res) => {})
        .catch ((err) => {});*/
        setData (products)
        setLoading (false)
    }, []);
    return loading ? (
        <span>Cargando...</span>
    ) : (
        <ItemListContainer products={data} />
    )
}

export default Home; 