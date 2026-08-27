import React from "react";

const DEFAULT_SYMBOLS = ["{ }", "< />", "[ ]", "01", "10", "001", "010", "11"];

/**
 * Reusable background animation for page heroes:
 * - Floating drifting code symbols
 * - Glowing laser scan-line moving top-to-bottom and bottom-to-top
 */
export default function HeroBackground({ symbols = DEFAULT_SYMBOLS }) {
  return (
    <>
      {/* Floating background decorative code symbols */}
      <div className="pw-hero-symbols" aria-hidden="true">
        {symbols.map((sym, i) => (
          <span key={i} className="pw-sym">
            {sym}
          </span>
        ))}
      </div>

      {/* Laser scan line moving top-to-bottom and bottom-to-top */}
      <div className="pw-scan-line" aria-hidden="true" />
    </>
  );
}
