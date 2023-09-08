import React from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../helpers/getData';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = () => {

    const { categoryId } = useParams();
    const data=getData(categoryId)

    return (
        <div>
            <ItemListContainer products={data}/>
        </div>
    )
}

export default Category
