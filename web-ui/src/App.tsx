import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main/main-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LoginPage } from './pages/login/login-page';
import { ProductPage } from './pages/product/product-page';


function App() {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/catalog' element={<CatalogPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/product/:catalogItemId' element={<ProductPage />}></Route>
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
