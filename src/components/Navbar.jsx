import * as Constants from '../utils/Constants';

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <a href={Constants.LOGO_URL} target="_blank">
                    <img src={Constants.LOGO_IMG} alt="logo" />
                </a>
            </div>

            <ul>
                <li><a href={Constants.MENU_URL} target="_blank">Menu</a></li>
                <li><a href={Constants.LOCATION_URL} target="_blank">Location</a></li>
                <li><a href={Constants.ABOUT_URL} target="_blank">About</a></li>
                <li><a href={Constants.CONTACT_URL} target="_blank">Contact</a></li>
            </ul>

            <a className='btn' href={Constants.LOGIN_URL} target="_blank">Login</a>
        </nav>
    )
}

export default Navbar;