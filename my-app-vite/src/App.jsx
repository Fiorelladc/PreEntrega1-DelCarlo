import MainLayout from './layout/MainLayout';
import MainRouter from './pages/routes/MainRouter';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <MainLayout>
      <MainRouter/>
    </MainLayout>
  );
};

export default App;