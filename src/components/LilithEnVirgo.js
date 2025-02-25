import React from 'react';

const LilithEnVirgo = ({ gender }) => {
  return (
    <div className="lilith-en-virgo">
      <h1>Lilith en Virgo</h1>
      <p>
        Lilith en Virgo se expresa a través del perfeccionismo, la crítica y la necesidad de control. 
        Es una posición que otorga una gran capacidad analítica, pero también puede generar inseguridad y autoexigencia extrema.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Virgo en la carta natal de una mujer</h2>
          <p><strong>Inteligencia y precisión:</strong> Tiene una mente aguda y analítica, capaz de ver los detalles que otros pasan por alto.</p>
          <p><strong>Autoexigencia extrema:</strong> Puede ser muy crítica consigo misma, sintiendo que nunca es lo suficientemente perfecta.</p>
          <p><strong>Relaciones y control:</strong> En el amor, busca estabilidad y orden, pero puede atraer parejas que la desafíen a soltar el control.</p>
          <p><strong>Sombra y transformación:</strong> Su reto es aprender a aceptar la imperfección y fluir con los cambios sin sentirse ansiosa.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Virgo en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres meticulosas:</strong> Se siente fascinado por mujeres inteligentes, organizadas y detallistas.</p>
          <p><strong>Conflictos con la espontaneidad:</strong> Puede luchar contra la necesidad de tener todo bajo control, sintiéndose incómodo con lo impredecible.</p>
          <p><strong>Racionalización del deseo:</strong> Tiende a analizar demasiado sus emociones y puede reprimir su lado instintivo.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a soltar la necesidad de perfección y permitir que la vida fluya sin tanto análisis.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Virgo</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a valorarse sin la presión de ser perfecta en todo.</li>
        <li><strong>Para el hombre:</strong> Aceptar que la vida no siempre sigue un plan lógico y que el caos también tiene su belleza.</li>
      </ul>

      <p>
        Lilith en Virgo invita a equilibrar la necesidad de orden con la aceptación de lo inesperado. 
        La clave está en encontrar la perfección en la imperfección.
      </p>
    </div>
  );
};

export default LilithEnVirgo;
