import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        try {
            const storedAuth = Cookies.get("authuser"); // Ambil data auth dari cookie
            return storedAuth ? JSON.parse(storedAuth) : { roles: [], user: null };
        } catch (e) {
            console.error("Error accessing cookies:", e);
            return { roles: [], user: null };
        }
    });

    useEffect(() => {
        
        try {
            if (auth && Object.keys(auth).length > 0) {
                // Set auth data ke cookie
                Cookies.set("authuser", JSON.stringify(auth), { expires: 7 }); // Cookie akan kadaluarsa dalam 7 hari
            } else {
                // Hapus cookie jika auth kosong
                Cookies.remove("authuser");
            }
        } catch (e) {
            console.error("Error setting cookies:", e);
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
