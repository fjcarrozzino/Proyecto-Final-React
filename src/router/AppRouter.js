import React from 'react'
import { Navigate, useRoutes} from 'react-router'
import { CartView } from '../Components/CartView/CartView'
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../Components/ItemListContainer/ItemListContainer'

export const AppRouter = () => {

    const routes = useRoutes ([
        {path: "/", element: <ItemListContainer/> },
        {path: "/productos/:catId", element: <ItemListContainer/> },
        {path: "/detail/:itemId", element: <ItemDetailContainer/> },
        {path: "/cart", element: <CartView/> },
        {path: "*", element: <Navigate to="/"/> }
    ])

    return routes
}
