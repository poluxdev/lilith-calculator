import React from 'react';

const LilithEnLeo = ({ gender }) => {
  return (
    <div className="lilith-en-leo">
      <h1>Lilith en Leo</h1>
      <p>
        Lilith en Leo se manifiesta como una fuerte necesidad de ser reconocida y valorada. 
        Hay un deseo de brillar con luz propia, pero también una lucha interna con el ego y la autoimagen.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Leo en la carta natal de una mujer</h2>
          <p><strong>Carácter fuerte y magnético:</strong> Posee una gran presencia y es imposible ignorarla. Siente la necesidad de ser auténtica sin importar las opiniones ajenas.</p>
          <p><strong>Deseo de reconocimiento:</strong> Le gusta destacar en cualquier ámbito, pero puede sentirse frustrada si no recibe la validación que espera.</p>
          <p><strong>Atracción por el drama y la pasión:</strong> En el amor busca intensidad y emoción. Puede atraer relaciones donde el juego de poder sea constante.</p>
          <p><strong>Sombra y transformación:</strong> Su reto es aprender a brillar sin depender de la aprobación externa. La autosuficiencia emocional es clave.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Leo en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres carismáticas:</strong> Se siente fascinado por mujeres seguras, creativas y con una fuerte presencia.</p>
          <p><strong>Conflicto con el reconocimiento:</strong> Puede sentir la necesidad de ser admirado, pero al mismo tiempo temer que su brillo sea eclipsado.</p>
          <p><strong>Ego y deseo de liderazgo:</strong> Tiene un gran carisma natural, pero puede caer en la arrogancia o en la búsqueda constante de validación.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a liderar desde la autenticidad y no desde la necesidad de dominio o admiración excesiva.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Leo</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Desarrollar su confianza sin depender del reconocimiento externo.</li>
        <li><strong>Para el hombre:</strong> Entender que el brillo ajeno no opaca el suyo, sino que lo complementa.</li>
      </ul>

      <p>
        Lilith en Leo enseña a conectar con la verdadera esencia sin caer en la trampa del ego o la necesidad de ser siempre el centro de atención.
      </p>
    </div>
  );
};

export default LilithEnLeo;
