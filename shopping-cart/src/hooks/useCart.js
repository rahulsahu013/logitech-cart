import { useEffect, useState, useCallback } from "react";
import { fetchCart } from "../services/cartApi";

export function useCart() {
    const [cart, setCart] = useState(null);
    const [initialCart, setInitialCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        try {
            setLoading(true);

            const data = await fetchCart();

            setCart(data);
            setInitialCart(structuredClone(data));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const removeProduct = useCallback((id) => {
        setCart((prev) => ({
            ...prev,
            products: prev.products.filter((item) => item.id !== id),
        }));
    }, []);

    const resetCart = useCallback(() => {
        setCart(structuredClone(initialCart));
    }, [initialCart]);

    return {
        cart,
        loading,
        error,
        removeProduct,
        resetCart,
    };
}
