import './header.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to='/' className='titulo'>
                <h1 className="titulo">Michael Jackson</h1>
            </Link>
            <div className="itens">
                <Link to='/'>Home</Link>
                <Link to='/historia'>História</Link>
                <Link to='/discografia'>Discografia</Link>
            </div>
        </header>
    )
}