import React from "react";
import Card from "./Card";

export default function Gallery({ infoPhoto }) {
  return (
    <section>
      <ul className="gallery">
        <Card infoPhoto={infoPhoto} />
      </ul>
    </section>
  );
}
