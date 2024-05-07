import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

    const navigate = useNavigate();

    const logoClickHandler = () => {
        navigate('/portfolio');
    }

    return (
        <header onClick={logoClickHandler} className='App-header'>
            <div>
                <h1 className="Name">Sahil Kumar Rao</h1>
            </div>
            
        </header>
    );
}

export default Header;  