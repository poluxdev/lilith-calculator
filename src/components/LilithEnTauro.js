import React from 'react';

const LilithEnTauro = ({ gender }) => {
  return (
    <div className="lilith-en-tauro">
      <h1>Lilith en Tauro</h1>
      <p>
        Lilith en Tauro intensifica la relación con el placer, la seguridad y la materialidad. 
        Tauro, regido por Venus, busca estabilidad y disfrute, pero Lilith aquí puede desafiar 
        estos conceptos, generando una lucha entre el deseo de posesión y la necesidad de libertad.
      </p>
      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Tauro en la carta natal de una mujer</h2>
          <p><strong>Relación con el placer y el cuerpo:</strong> Una mujer con Lilith en Tauro tiene una conexión intensa con su sensualidad y disfrute físico. Puede sentirse poderosa cuando abraza su feminidad sin culpa.</p>
          <p><strong>Autonomía material:</strong> No le gusta depender económicamente de nadie. Es una mujer que valora la autosuficiencia y busca crear estabilidad por sí misma.</p>
          <p><strong>Desafío con el apego:</strong> Puede sentir un miedo inconsciente a la pérdida, lo que la lleva a aferrarse a relaciones o posesiones.</p>
          <p><strong>Sombra y transformación:</strong> Su mayor reto es soltar el apego excesivo y aprender a confiar en el flujo natural de la vida.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Tauro en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres sensuales e independientes:</strong> Un hombre con Lilith en Tauro se siente magnetizado por mujeres que irradian seguridad y placer en su propia piel.</p>
          <p><strong>Conflicto con la estabilidad:</strong> Puede sentir un deseo intenso por seguridad, pero a la vez miedo a sentirse atrapado en una rutina.</p>
          <p><strong>Impulsividad en el disfrute:</strong> Tiene una fuerte necesidad de experimentar placer, pero debe aprender a equilibrar el deseo con la responsabilidad.</p>
          <p><strong>Sombra y evolución personal:</strong> Su desafío es soltar la necesidad de control y aprender a vivir el placer sin sentirse dominado por él.</p>
        </>
      )}
      <h2>Consejos para integrar Lilith en Tauro</h2>
      <p><strong>Para la mujer:</strong> Aprender a disfrutar sin miedo al juicio y confiar en que la seguridad viene de adentro.</p>
      <p><strong>Para el hombre:</strong> Aceptar que el placer es un derecho, pero no debe ser una obsesión que lo gobierne.</p>
      <p>Lilith en Tauro nos invita a conectar con nuestros sentidos sin culpa, pero también a evitar el apego excesivo. ¡Es un viaje de placer y autoconocimiento!</p>
    </div>
  );
};

export default LilithEnTauro;
