import { useParams } from 'react-router-dom';
import { useCollection } from '../Hooks/UseCollection';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';


const Home = () => {
    const {categoryId} = useParams();
    const {data, loading}= useCollection("products", categoryId)

    return loading ? ( <LoaderComponent />
    ) : (
        <ItemListContainer products={data} />
    )
}
export default Home; 