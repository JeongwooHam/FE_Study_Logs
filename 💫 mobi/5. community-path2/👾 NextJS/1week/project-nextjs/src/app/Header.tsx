"use client";

import Link from "next/link";
import React from "react";

interface Props {}

function Header({}: Props) {
  return (
    <nav
      style={{
        height: "50px",
        lineHeight: "50px",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      <Link href="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}

export default Header;
