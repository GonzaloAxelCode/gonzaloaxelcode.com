export default function resumirTexto(texto: string, limite = 100) {
    if (texto.length <= limite) {
      return texto;
    }
  
    const resumen = texto.slice(0, limite);
    return `${resumen} ... `;
  }
  