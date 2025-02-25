import React from 'react';

const LilithEnCancer = ({ gender }) => {
  return (
    <div className="lilith-en-cancer">
      <h1>Lilith en Cáncer</h1>
      <p>
        Lilith en Cáncer se asocia con emociones intensas, una relación compleja con la familia y un fuerte instinto protector.
        Puede manifestarse como una lucha entre el deseo de independencia y la necesidad de seguridad emocional.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Cáncer en la carta natal de una mujer</h2>
          <p><strong>Fuerza emocional y sensibilidad:</strong> Es una mujer con un mundo emocional profundo, pero puede sentirse incómoda mostrando vulnerabilidad.</p>
          <p><strong>Relación compleja con la familia:</strong> Puede haber una historia de rebeldía contra roles familiares tradicionales o una sensación de no encajar en su núcleo familiar.</p>
          <p><strong>Atracción por lo oculto y misterioso:</strong> Le interesa lo esotérico, los misterios del pasado y las emociones profundas.</p>
          <p><strong>Sombras y transformación:</strong> Puede caer en el control emocional o la manipulación afectiva para protegerse de heridas del pasado.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Cáncer en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres intensamente emocionales:</strong> Se siente fascinado por mujeres con una energía maternal fuerte o con una sensibilidad especial.</p>
          <p><strong>Conflictos con el apego:</strong> Puede experimentar miedo al compromiso y, al mismo tiempo, un fuerte deseo de conexión emocional.</p>
          <p><strong>Instintos protectores:</strong> Tiene una necesidad innata de cuidar a otros, aunque puede sentirse atrapado en relaciones donde asume el papel de protector.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a establecer límites emocionales y reconocer que la vulnerabilidad no es debilidad.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Cáncer</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a equilibrar su necesidad de seguridad con su deseo de independencia.</li>
        <li><strong>Para el hombre:</strong> Aceptar la profundidad emocional sin verla como una amenaza a su masculinidad.</li>
      </ul>

      <p>Lilith en Cáncer nos enseña a honrar nuestras emociones sin permitir que el miedo nos controle.</p>
    </div>
  );
};

export default LilithEnCancer;
