import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Footer/>
        </BrowserRouter>
    )
}