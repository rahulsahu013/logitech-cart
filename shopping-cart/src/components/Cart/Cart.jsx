import CartSummary from "./CartSummary";
import CartProduct from "./CartProduct";
import { useCart } from "../../hooks/useCart";

export default function Cart() {
    const { cart, loading, error, removeProduct, resetCart } = useCart();

    if (loading) {
        return <p className="status">Loading...</p>;
    }

    if (error) {
        return <p className="status error">{error}</p>;
    }

    return (
        <main className="cart-wrapper">
            <section className="cart-container">
                <header className="cart-header">
                    <CartSummary cart={cart} />
                </header>

                <section className="cart-products">
                    {cart.products.map((product) => (
                        <CartProduct
                            key={product.id}
                            product={product}
                            onRemove={removeProduct}
                        />
                    ))}
                </section>

                <footer className="cart-footer">
                    <button className="reset-button" onClick={resetCart}>
                        Reset
                    </button>
                </footer>
            </section>
        </main>
    );
}
