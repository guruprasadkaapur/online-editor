import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <a href="/admin/">Home</a>
        </li>
        <li>
          <a href="/admin/about">About</a>
        </li>
        <li>
          <a href="/admin/contact">Contact</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
