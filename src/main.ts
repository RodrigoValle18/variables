import "./style.css";

interface GrupoMusical {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
  }
  
  const generoPopRock = "🎵 Pop Rock";
  const generoRock = "🎸 Rock";
  const generoHardRock = "🤘 Hard Rock";
  const generoClasica = "🎼 Clásica";
  
  const grupos: GrupoMusical[] = [
    { nombre: "The Beatles", añoFundacion: 1960, activo: false, genero: generoPopRock },
    { nombre: "Queen", añoFundacion: 1970, activo: false, genero: generoRock },
    { nombre: "AC DC", añoFundacion: 1973, activo: true, genero: generoHardRock },
    { nombre: "Ludwig van Beethoven", añoFundacion: 1770, activo: false, genero: generoClasica },
    { nombre: "The Rolling Stones", añoFundacion: 1962, activo: true, genero: generoRock },
  ];
  
  
  for (let grupo of grupos) {
    console.log(`%c${grupo.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white");
    console.log("Cantante / Compositor:", grupo.nombre); 
    console.log("Año de fundación:", grupo.añoFundacion);
    console.log("Activo:", grupo.activo ? "Sí" : "No");
    console.log("Género musical:", grupo.genero);
  }
  