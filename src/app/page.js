"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleDelete = async () => {
    const response = await fetch("/api/file-sources/1", { method: "DELETE" });
    console.log(response);
  };

  return <button onClick={handleDelete}>Reproduce Error</button>;
}
