import React from 'react';

const LilithEnCapricornio = ({ gender }) => {
  return (
    <div className="lilith-en-capricornio">
      <h1>Lilith en Capricornio</h1>
      <p>
        Lilith en Capricornio otorga una energía ambiciosa, disciplinada y con un fuerte deseo de control. Esta posición 
        puede generar una intensa lucha entre el deseo de éxito y la necesidad de liberarse de estructuras rígidas impuestas 
        por la sociedad o la familia.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Capricornio en la carta natal de una mujer</h2>
          <p><strong>Ambición y determinación:</strong> Siente una fuerte necesidad de alcanzar el éxito y demostrar su valía.</p>
          <p><strong>Independencia profesional:</strong> No le gusta depender de nadie y busca construir su propio camino.</p>
          <p><strong>Control sobre sus emociones:</strong> Puede ser reservada y evitar mostrar vulnerabilidad para no parecer débil.</p>
          <p><strong>Sombra y transformación:</strong> Debe aprender a equilibrar su rigidez con la apertura emocional para no aislarse.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Capricornio en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres fuertes y poderosas:</strong> Se siente fascinado por mujeres exitosas y con autoridad.</p>
          <p><strong>Deseo de control:</strong> Puede tener dificultades para soltar el control en sus relaciones personales.</p>
          <p><strong>Alta exigencia consigo mismo:</strong> Puede ser muy duro con sus propias expectativas y sentir una gran presión interna.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a confiar en los demás y soltar el miedo a la vulnerabilidad.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Capricornio</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Permitir que su ambición conviva con el placer de disfrutar la vida sin presión constante.</li>
        <li><strong>Para el hombre:</strong> Aprender a valorar las emociones y no medir el éxito solo por logros materiales.</li>
      </ul>

      <p>
        Lilith en Capricornio representa una lucha entre la necesidad de control y la importancia de fluir. Integrar 
        esta energía de manera equilibrada permite alcanzar el éxito sin sacrificar la conexión emocional.
      </p>
    </div>
  );
};

export default LilithEnCapricornio;
