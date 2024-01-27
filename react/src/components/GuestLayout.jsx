import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div className="login-signup-form">
            <div className="form">
                <Outlet />
            </div>
        </div>
    );
};

export default GuestLayout;
