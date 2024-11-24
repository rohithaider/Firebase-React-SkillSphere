/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../components/Loading";

export default function ProtectedRoute({children}){
    const{user,loading} = useContext(AuthContext);
    if(loading){
        return <Loading/>
    }
    return user && user?.email ? children:<Navigate to="/login" />;
}