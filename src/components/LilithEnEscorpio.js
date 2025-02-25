import React from 'react';

const LilithEnEscorpio = ({ gender }) => {
  return (
    <div className="lilith-en-escorpio">
      <h1>Lilith en Escorpio</h1>
      <p>
        Lilith en Escorpio es una de las posiciones más intensas y transformadoras. Aquí, la energía de Lilith se 
        une con la profundidad emocional y la fuerza regeneradora de Escorpio, lo que genera una personalidad 
        magnética, apasionada y misteriosa, pero también con tendencias a vivir experiencias extremas.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Escorpio en la carta natal de una mujer</h2>
          <p><strong>Magnetismo y sensualidad:</strong> Posee una energía poderosa que puede atraer o intimidar a los demás.</p>
          <p><strong>Instinto y profundidad emocional:</strong> Tiene una capacidad innata para percibir verdades ocultas y una fuerte conexión con su intuición.</p>
          <p><strong>Transformación constante:</strong> A lo largo de su vida, experimentará crisis profundas que la llevarán a renacer más fuerte.</p>
          <p><strong>Sombra y transformación:</strong> Puede caer en dinámicas de control, obsesión o relaciones tóxicas si no aprende a canalizar su poder de manera constructiva.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Escorpio en la carta natal de un hombre</h2>
          <p><strong>Atracción por lo oculto:</strong> Se siente fascinado por lo misterioso, lo prohibido y las emociones intensas.</p>
          <p><strong>Relaciones profundas e intensas:</strong> No busca vínculos superficiales, sino conexiones que lo transformen por completo.</p>
          <p><strong>Control y poder:</strong> Puede tener una necesidad inconsciente de dominar en las relaciones, lo que puede generar conflictos.</p>
          <p><strong>Sombra y evolución personal:</strong> Su desafío es aprender a soltar el miedo a la vulnerabilidad y dejar de ver las emociones como una forma de control.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Escorpio</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a usar su poder interno sin caer en la manipulación o el resentimiento.</li>
        <li><strong>Para el hombre:</strong> Sanar su relación con la intensidad emocional y entender que el control no es sinónimo de fuerza.</li>
      </ul>

      <p>
        Lilith en Escorpio es una energía de transformación y renacimiento. Aceptar la intensidad emocional y 
        canalizarla de manera consciente permite convertir el dolor en poder personal.
      </p>
    </div>
  );
};

export default LilithEnEscorpio;
