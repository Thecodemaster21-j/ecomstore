

function Navbar() {
  return (
  <div className="navbar">
      <h1 className="nav-logo">Eclipsed</h1>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button className="cart-button">
      <span class="material-symbols-outlined" onClick={() => alert("Cart Clikced")}>shopping_cart</span>
    </button>
  </div>
  );
}
export default Navbar;