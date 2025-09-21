import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../api/baseURL";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  register: () => {},
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  

  const isAuthenticated = !!token;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  //   REGISTER
  const register = async (name, email, password, password_confirmation) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.message);
        return false;
      }

      const { user, token } = result.data;

      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      toast.success(result.message || "Registered successfully");
      return true;
    } catch (error) {
      toast.error("Something went wrong");
      return false;
    }
  };

  //LOGIN
  const login = async (email, password) => {
    try {
      
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        return false;
      }
      const { user, token } = result.data;
      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      console.log(token);
      toast.success(result.message);
      return true;
    } catch (error) {
      toast.error("something went wrong");
      return false;
    }
  };
// logout
  const logout = async () => {
    try {
      // const navigate = useNavigate();
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);

        return false;
      }
      localStorage.clear();
      toast.success(result.message);
      // navigate("/login");
      return true;
    } catch (error) {
      return false;
    }
  };

  const value = {
    user,
    token,
    register,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
