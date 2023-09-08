import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { getDataById } from "../helpers/getDataById";


const ItemDetails = () => {
    const { itemId } = useParams();
    const data=getDataById(itemId)

    return <ItemDetailContainer data={data} />;
};

export default ItemDetails;