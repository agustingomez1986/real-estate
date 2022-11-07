import { Routes, Route } from 'react-router-dom';

import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import Footer from './routes/footer/footer.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Footer />}>
          <Route index element={<Home />} />
        {/* <Route path='about-us' element={<AboutUs />} />
          <Route path='products' element={<Products />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;