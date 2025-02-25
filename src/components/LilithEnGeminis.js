import React from 'react';

const LilithEnGeminis = ({ gender }) => {
  return (
    <div className="lilith-en-geminis">
      <h1>Lilith en Géminis</h1>
      <p>
        Lilith en Géminis se manifiesta en una mente inquieta, curiosa y rebelde. Es una posición que potencia la inteligencia,
        la comunicación provocadora y la capacidad de desafiar las normas establecidas con palabras y pensamientos. Puede generar
        un deseo intenso de explorar ideas prohibidas y un magnetismo en la forma de expresarse.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Géminis en la carta natal de una mujer</h2>
          <p><strong>Intelecto provocador:</strong> Su mente es afilada, inquieta y poco convencional. No teme hacer preguntas incómodas o desafiar la lógica tradicional.</p>
          <p><strong>Magnetismo en la comunicación:</strong> Su forma de hablar puede ser seductora y desafiante, atrayendo la atención con facilidad.</p>
          <p><strong>Rechazo a la monotonía:</strong> Se siente atrapada en entornos repetitivos o en relaciones carentes de estimulación intelectual.</p>
          <p><strong>Sombras y transformación:</strong> Puede caer en el juego de la manipulación verbal o en una constante indecisión. Aprender a equilibrar su poder mental con estabilidad emocional es clave.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Géminis en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres inteligentes y perspicaces:</strong> Se siente fascinado por mujeres con una gran capacidad intelectual y un estilo de comunicación audaz.</p>
          <p><strong>Curiosidad insaciable:</strong> Es alguien que necesita variedad en su vida amorosa y mental. Puede sentirse insatisfecho si no hay constante estimulación.</p>
          <p><strong>Desafíos en la comunicación:</strong> Puede tener conflictos al expresar sus emociones más profundas, ya que prefiere mantenerse en la superficie intelectual.</p>
          <p><strong>Sombra y evolución personal:</strong> Puede caer en el juego de la manipulación verbal o en relaciones inestables por su miedo al compromiso.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Géminis</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a usar su don de la palabra sin caer en la manipulación o el sarcasmo excesivo.</li>
        <li><strong>Para el hombre:</strong> Aceptar que la profundidad emocional es tan importante como la conexión intelectual en una relación.</li>
      </ul>

      <p>Lilith en Géminis invita a explorar el poder de la mente y la palabra, pero con conciencia y responsabilidad.</p>
    </div>
  );
};

export default LilithEnGeminis;
