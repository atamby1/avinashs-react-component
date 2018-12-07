import React from "react";

export default function({ message = "Today is Friday." }) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
