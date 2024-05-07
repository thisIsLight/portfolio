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
                <h1 className="Name">A <b>Treasure Hunt</b> for The November Girl </h1>
                <h1 className="text-light text-light-1">👧🏻</h1>
            </div>
            
        </header>
    );
}

export default Header;  