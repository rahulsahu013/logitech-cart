export default function CartProduct({ product, onRemove }) {
    return (
        <article className="cart-product">
            <div className="cart-product-details">
                <h2 className="cart-product-title">{product.title}</h2>

                <p className="cart-product-price">${product.price.toFixed(2)}</p>
            </div>

            <div className="cart-product-actions">
                <button
                    className="remove-button"
                    onClick={() => onRemove(product.id)}
                    aria-label={`Remove ${product.title}`}
                >
                    Remove
                </button>
            </div>
        </article>
    );
}
