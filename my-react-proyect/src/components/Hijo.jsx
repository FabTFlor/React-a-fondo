import React, { useState } from "react";

function Hijo({ msn, SaludodesdeHijoaPadre }) {
  return (
    <div>
      <div>Hijo</div>
      <p>mensaje desde padre:{msn}</p>
      <button
        onClick={() =>
          SaludodesdeHijoaPadre("hola padre te saludo siendo tu hijo...")
        }
      >
        saluda
      </button>
    </div>
  );
}

function Padre() {
  const [saludo, setSaludo] = useState("");
  const SaludodesdeHijoaPadre = (mensaje) => {
    setSaludo(mensaje);
  };
  return (
    <div>
      <div>Padre</div>
      <Hijo msn="hola hijo" SaludodesdeHijoaPadre={SaludodesdeHijoaPadre} />
      Mensaje desde Hijo: {saludo}
    </div>
  );
}

export default Padre;
