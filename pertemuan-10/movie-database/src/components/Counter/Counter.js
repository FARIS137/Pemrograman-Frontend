// Import useState dari React (desctructing).
import { useEffect, useState } from "react";

function Counter() {
  function addAngka() {
    setAngka(angka + 1);
  }
  function manipulateDOM() {
    console.log("lifecycle: Component dimount");
    document.title = `Hasil: ${angka}`;
  }
  const [angka, setAngka] = useState(0);

  useEffect(manipulateDOM, [angka]);
  console.log("Lifecycle: component dirender");

  return (
    <div>
      <p>Hasil: {angka} </p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
