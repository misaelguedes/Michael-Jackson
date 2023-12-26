import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
}