/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../components/Loading";
import { useLocation } from 'react-router-dom';

export default function ProtectedRoute({children}){
    const{user,loading} = useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <Loading/>
    }
    return user && user?.email ? children:<Navigate state={location.pathname} to="/login" />;
}