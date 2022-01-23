import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children, exact }) {
  const match = window.location.pathname === to;
  console.log(window.location.pathname);
  return (
    <div style={match ? { fontWeight: "bold" } : {}}>
      <Link style={{color: 'var(--color-dark)', textDecoration: 'none'}} to={to}>{children}</Link>
    </div>
  );
}
