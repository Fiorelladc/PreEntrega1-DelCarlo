import React from "react";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";

export const useCollection = (collectionName, category) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const db = getFirestore();
        let dataCollection;
        if (!category) {
            dataCollection = collection(db, collectionName);
        } 
        else {
            dataCollection = query(collection(db, collectionName), where("category", "==", category.toLowerCase()));
        }

        getDocs(dataCollection)
            .then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) => setError(true))
            .finally(() => setLoading(false));
    }, [category]);
    return { data, loading, error };
};