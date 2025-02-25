import React from 'react';

const LilithEnPiscis = ({ gender }) => {
  return (
    <div className="lilith-en-piscis">
      <h1>Lilith en Piscis</h1>
      <p>
        Lilith en Piscis otorga una energía mística, enigmática y profundamente conectada con lo espiritual. 
        Esta posición puede manifestarse como una lucha entre la realidad y la fantasía, con una tendencia a evadir 
        lo terrenal en busca de mundos más sutiles y etéreos.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Piscis en la carta natal de una mujer</h2>
          <p><strong>Espiritualidad y magnetismo:</strong> Puede ser una mujer con una gran intuición y sensibilidad psíquica.</p>
          <p><strong>Fascinación por lo oculto:</strong> Se siente atraída por lo misterioso, lo esotérico y las artes espirituales.</p>
          <p><strong>Tendencia al escapismo:</strong> Puede refugiarse en fantasías, sueños o incluso adicciones para evadir la dureza de la realidad.</p>
          <p><strong>Sombra y transformación:</strong> Debe aprender a usar su intuición sin perderse en ilusiones o dependencias emocionales.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Piscis en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres etéreas y enigmáticas:</strong> Se siente fascinado por mujeres con un aire místico, soñador y difícil de alcanzar.</p>
          <p><strong>Romanticismo idealizado:</strong> Puede enamorarse de la idea del amor más que de la persona real.</p>
          <p><strong>Tendencia a la evasión:</strong> Puede huir de los problemas en lugar de enfrentarlos directamente.</p>
          <p><strong>Sombra y evolución personal:</strong> Necesita aprender a diferenciar entre la intuición real y las ilusiones que crea su mente.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Piscis</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a poner límites y no perderse en los sueños o en relaciones que la absorban emocionalmente.</li>
        <li><strong>Para el hombre:</strong> Aceptar que el amor real es imperfecto y no siempre se ajusta a sus fantasías.</li>
      </ul>

      <p>
        Lilith en Piscis es un portal hacia lo mágico, pero también un reto para mantener los pies en la tierra. 
        Integrarla conscientemente permite transformar la sensibilidad en sabiduría y creatividad.
      </p>
    </div>
  );
};

export default LilithEnPiscis;
