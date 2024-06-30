import React from "react";

export default function Header({ home, nosotros, contacto }) {
  const headerStyle = { backgroundColor: "rgb(150,100 ,150)", height: "200px" };
  return (
    <header style={headerStyle}>
      <nav>
        <ul>
          <li>
            <a href="#">{home}</a>
          </li>
          <li>
            <a href="#">{nosotros}</a>
          </li>
          <li>
            <a href="#">{contacto}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
