import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import History from './pages/history/History'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<History/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}