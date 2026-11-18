import logo from "../assets/images/logo.png"

export default function NavBar() {
    return (
        <nav className="navBar">
            <img src={logo} alt="Logo"></img>
            <h1>Thrift Happens Shop</h1>
            <ul>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#checkout">Checkout</a></li>
            </ul>
        </nav>

    );
}