import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useItemCollection } from "../hooks/useItemCollection"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";


const ItemDetails = () => {
    const { itemId } = useParams();
    const {data, loading}= useItemCollection("products", itemId)

    return <ItemDetailContainer data={data} />;
};

export default ItemDetails;