import { CartProvider } from './context/CartContext';
import MainLayout from './layout/MainLayout';
import MainRouter from './pages/routes/MainRouter';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    < CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  );
};

export default App;