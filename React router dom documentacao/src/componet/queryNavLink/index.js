
import React from 'react';
import { useLocation, NavLink } from "react-router-dom";

// Usado para persistir a consulta, quando o usuario clica no link
export default function QueryNavLink({to, ...props}){

    let location = useLocation();

    return <NavLink to={to + location.search} {...props} />;
}
