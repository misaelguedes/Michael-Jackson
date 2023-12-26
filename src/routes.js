import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import History from './pages/history'
import Discography from './pages/discography'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<History/>}/>
                <Route path='/discografia' element={<Discography/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}