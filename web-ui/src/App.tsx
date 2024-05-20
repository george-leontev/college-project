import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main/main-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { RegistrationPage } from './pages/registration/registration-page';


function App() {
    return (
        <div style={{display: 'flex'}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/catalog' element={<CatalogPage />}></Route>
                    <Route path='/registration' element={<RegistrationPage />}></Route>
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
