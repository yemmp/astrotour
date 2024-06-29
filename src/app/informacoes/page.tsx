import Background from "@/components/layout/background";
import React from "react";

export default function InfoPage() {
  return (
    <article>
      <div className="relative  w-full h-screen overflow-hidden">
        <Background
          src="/images/satelite.jpg"
          alt="satelite pic"
          type="image"
        />
      </div>
    </article>
  );
}
