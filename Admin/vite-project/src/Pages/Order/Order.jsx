import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("ALL");

  const url = "http://localhost:4000";
  const token = localStorage.getItem("token");

  // 🔹 Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${url}/api/admin/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔹 Cancel order
  const cancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    try {
      await axios.put(
        `${url}/api/admin/order/cancel/${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Order cancelled successfully");
      fetchOrders(); // refresh list

    } catch (error) {
      alert("Failed to cancel order");
      console.error(error);
    }
  };

  // 🔹 Filter orders
  const filteredOrders =
    filterStatus === "ALL"
      ? orders
      : orders.filter((order) => order.orderStatus === filterStatus);

  return (
    <div className="admin-orders">
      <h2>📦 Admin Orders Dashboard</h2>

      {/* 🔍 FILTER */}
      <div className="filter-bar">
        <button onClick={() => setFilterStatus("ALL")}>All</button>
        <button onClick={() => setFilterStatus("Order Placed")}>
          Placed
        </button>
        <button onClick={() => setFilterStatus("Cancelled")}>
          Cancelled
        </button>
        <button onClick={() => setFilterStatus("Delivered")}>
          Delivered
        </button>
      </div>

      {filteredOrders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        filteredOrders.map((order) => (
          <div className="order-card" key={order._id}>
            {/* HEADER */}
            <div className="order-header">
              <span><b>Order ID:</b> {order._id}</span>
              <span className={`status ${order.orderStatus}`}>
                {order.orderStatus}
              </span>
            </div>

            {/* CUSTOMER */}
            <div className="order-section">
              <h4>👤 Customer</h4>
              <p>
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>📞 {order.address.phone}</p>
              <p>
                📍 {order.address.street}, {order.address.city}
              </p>
            </div>

            {/* ITEMS */}
            <div className="order-section">
              <h4>🍔 Items</h4>
              {order.items.map((item, i) => (
                <p key={i}>
                  {item.name} × {item.quantity} — ₹{item.price}
                </p>
              ))}
            </div>

            {/* PAYMENT */}
            <div className="order-section">
              <h4>💳 Payment</h4>
              <p>Status: {order.paymentStatus}</p>
              <p><b>Total: ₹{order.amount}</b></p>
            </div>

            {/* ACTION */}
            {order.orderStatus !== "Cancelled" &&
              order.orderStatus !== "Delivered" && (
                <button
                  className="cancel-btn"
                  onClick={() => cancelOrder(order._id)}
                >
                  Cancel Order
                </button>
              )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminOrders;
