import React from "react";

export default function Main({ children }) {
  return (
    <main className="mymain">
      <article>{children}</article>
    </main>
  );
}
