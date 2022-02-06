import React, { forwardRef } from "react";
import "./card.css";
const Card = forwardRef(({ title, name, id, color, className, htmlId }, ref) => {
  return (
    <div id={htmlId} ref={ref} className={`card-layout ${className}`} style={{ outline: `2px solid ${color}` }}>
      <div className="card-id" style={{ outline: `2px solid ${color}` }}>
        <p className="mb-0"> {id} رمز </p>
      </div>
      <div className="card-title-custom" style={{ background: color }}>
        <p className="mb-0 py-1">{title}</p>
      </div>
      <div className="card-title-value">
        <p className="mb-0 py-1">{name}</p>
      </div>
    </div>
  );
});

export default Card;
