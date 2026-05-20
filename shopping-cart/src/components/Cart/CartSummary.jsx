export default function CartSummary({ cart }) {
    const total = cart.products.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    return (
        <>
            <div className="cart-summary">
                <h1>Shopping Cart</h1>

                <p>Cart contains {cart.products.length} products</p>
            </div>

            <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
        </>
    );
}
