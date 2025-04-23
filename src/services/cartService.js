const API_BASE_URL = "http://localhost:8001/user";

export async function getCart() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to fetch cart");
  }
  return response.json();
}

export async function addToCart(battery_id, quantity) {
    const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({ battery_id, quantity })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to add to cart");
  }
  return response.json();
}

export async function removeFromCart(battery_id) {
    const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/cart/${battery_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to remove item");
  }
  return response.json();
}
