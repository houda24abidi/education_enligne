// src/api/user.js أو أي ملف api.js تستعمله
import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
