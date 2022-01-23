import React from "react";
import { Route, Routes } from "react-router-dom";

import CustomLink from "../../components/customLink/CustomLink";
import AllOrders from "./allOrders/AllOrders";
import PendingOrders from "./pendingOrders/PendingOrders";
import OnGoingOrders from "./onGoingOrders/OnGoingOrders";
import DoneOrders from "./done/DoneOrders";

export default function Orders() {
  return (
    <div>
      <h2 style={{ fontWeight: "normal", marginBottom: "40px" }}>
        SEPTEMBER 30TH 2020
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <CustomLink to={"/orders"}>All Orders</CustomLink>
        <CustomLink to={"/orders/pending"}>Pending Orders</CustomLink>
        <CustomLink to={"/orders/ongoing"}>On going Orders</CustomLink>
        <CustomLink to={"/orders/done"}>Done</CustomLink>
        {/* <Link to="/orders/allOrders"> */}
      </div>

      <Routes>
        <Route path="/" exact element={<AllOrders />} />
        <Route path="/pending" exact element={<PendingOrders />} />
        <Route path="/ongoing" exact element={<OnGoingOrders />} />
        <Route path="/done" exact element={<DoneOrders />} />
      </Routes>
    </div>
  );
}
