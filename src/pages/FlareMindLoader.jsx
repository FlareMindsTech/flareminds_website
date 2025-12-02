import React, { useEffect, useState } from "react";
const words = ["FLAREMINDS", "CREATIVITY", "INNOVATION", "DIGITAL", "FLAREMINDS"];
export default function FlareMindLoader() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loader-container">
      <div className="morphing-text">{words[index]}</div>
    </div>
  );
}
