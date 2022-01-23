import React from 'react';

const Orders = React.lazy(() => import('./Pages/orders/Orders'));

const routes = [
    {path: '/orders', exact: true, name: 'Orders', component: Orders, title: 'Orders'},
]

export default routes