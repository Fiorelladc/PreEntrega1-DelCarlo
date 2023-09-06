import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from '../Home';
import Children from "../Children";
import NavBar from '../../components/NavBar/NavBar';



const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/:categoryId" element= {<Children/>} />
                <Route path="/:itemId" element= {<Home/>} />
            </Routes>
        </Router>
    );
}

export default MainRouter;
