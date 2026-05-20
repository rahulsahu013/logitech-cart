const API_URL = "https://dummyjson.com/carts/1";

export async function fetchCart() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch cart");
    }

    return response.json();
}
