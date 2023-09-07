import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from '../Home';
import Category from "../Category";
import NavBar from '../../components/NavBar/NavBar';
import ItemDetails from "../ItemDetails";



const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/category/:categoryId" element= {<Category/>} />
                <Route path="/item/:itemId" element= {<ItemDetails/>} />
            </Routes>
        </Router>
    );
}

export default MainRouter;
