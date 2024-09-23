"use client";

import Navbar from "@/components/navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Home() {
  const [onClick, setOnClick] = useState(1);

  const fnClick = (e) => {
    setOnClick(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1>Bonjour</h1>
      <Button
        onClick={fnClick}
        value={1}
        variant="danger"
        disabled={onClick == 1 ? true : false}
        id="showtexte1"
      >
        Bouton 1
      </Button>
      <Button
        onClick={fnClick}
        value={2}
        variant="success"
        disabled={onClick == 2 ? true : false}
        id="showtexte2"
      >
        Bouton 2
      </Button>
      <Button
        onClick={fnClick}
        value={3}
        variant="warning"
        disabled={onClick == 3 ? true : false}
        id="showtexte3"
      >
        Bouton 3
      </Button>
    </div>
  );   
}