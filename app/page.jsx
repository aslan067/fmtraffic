"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const lang = (navigator.language || "en").toLowerCase();
    if (lang.startsWith("tr")) location.replace("/tr/");
    else if (lang.startsWith("de")) location.replace("/de/");
    else if (lang.startsWith("nl")) location.replace("/nl/");
    else if (lang.startsWith("fr")) location.replace("/fr/");
    else location.replace("/en/");
  }, []);

  return <div style={{padding:"40px"}}>Redirecting…</div>;
}
