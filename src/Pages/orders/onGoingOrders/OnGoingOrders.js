import React, { useEffect } from "react";

import orderApi from "../../../api/orders";
import AppLoading from "../../../components/appLoading/AppLoading";
import useApi from "../../../hooks/useApi";

export default function PendingOrders() {
  const { request, data: orders, loading } = useApi(orderApi.getOngoingOrders);

  useEffect(() => {
    request();
  }, []);
  console.log(orders.data);
  if (loading) return <AppLoading />;
  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
          //   borderCollapse: "separate",
          //   borderSpacing: "60px 16px",
          // display:"table-header-group",
          width: "100%",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#002637", color: "#fff" }}>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>
              Order ID
            </th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>Type</th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>
              Merchant
            </th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>
              Customer
            </th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>Total</th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>Created</th>
            <th style={{ padding: "10px 0", fontWeight: "normal" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.data &&
            orders.data.map((order, i) => {
              let today = new Date().toISOString().slice(0, 10);

              const startDate = order.created_at;
              const endDate = today;

              const diffInMs = new Date(endDate) - new Date(startDate);
              const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
              console.log(diffInDays.toFixed());
              return (
                i < 5 && (
                  <tr
                    style={{
                      textAlign: "center",
                      borderBottom: "var(--color-grey) 1px solid",
                    }}
                  >
                    <td style={{ padding: "20px 0" }}>{order.order_number}</td>
                    <td style={{ padding: "10px 0" }}>{order.deliver_type}</td>
                    <td style={{ padding: "10px 0" }}>{order.merchant_name}</td>
                    <td style={{ padding: "10px 0" }}>{order.customer_name}</td>
                    <td style={{ padding: "10px 0" }}>{order.total}</td>
                    <td style={{ padding: "10px 0" }}>
                      {diffInDays.toFixed()} days ago
                    </td>
                    <td style={{ padding: "10px 0" }}>
                      <p
                        style={{
                          backgroundColor: "#AAB7BF",
                          borderRadius: "20px",
                          padding: "5px 7px",
                          color: "#fff",
                        }}
                      >
                        View Order
                      </p>
                    </td>
                  </tr>
                )
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
