import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "../Pages/orders/Orders";

import routes from '../routes';

export default function Content() {
  return (
    <div style={{ margin: "20px 30px" }}>
      <Routes>
        <Route path="/orders/*" element={<Orders />}>
            
        </Route>
        {/* <Route exact path="/s" element={<Orders />} /> */}
        {/* <Route exact path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />} /> */}
      </Routes>
    </div>
  );
}
