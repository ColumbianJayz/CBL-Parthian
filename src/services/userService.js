const API_BASE_URL = "http://localhost:8001/user";

export async function registerUser({ email, full_name, password }) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, full_name, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "registration unsuccessful");
  }

  return response.json();
}

export async function loginUser({ email, password }) {
  const formData = new URLSearchParams();
  formData.append("username", email);
  formData.append("password", password);

  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "login unsuccessful");
  }

  return response.json();
}
