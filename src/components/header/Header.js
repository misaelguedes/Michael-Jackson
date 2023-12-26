import './header.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className='titulo'>
                <h1 className="titulo">Michael Jackson</h1>
            </Link>
            <div className="itens">
                <Link>Home</Link>
                <Link>História</Link>
                <Link>Discografia</Link>
            </div>
        </header>
    )
}