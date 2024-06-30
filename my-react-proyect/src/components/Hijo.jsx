import React from "react";

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
  const SaludodesdeHijoaPadre = (msn) => {
    console.log(msn);
  };
  return (
    <div>
      <div>Padre</div>
      <Hijo msn="hola hijo" SaludodesdeHijoaPadre={SaludodesdeHijoaPadre} />
    </div>
  );
}

export default Padre;
