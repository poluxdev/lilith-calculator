import React from 'react';

const LilithEnSagitario = ({ gender }) => {
  return (
    <div className="lilith-en-sagitario">
      <h1>Lilith en Sagitario</h1>
      <p>
        Lilith en Sagitario otorga un espíritu libre, rebelde y aventurero. Aquí, la energía de Lilith se fusiona 
        con la filosofía, la expansión y la búsqueda de la verdad. Es una posición que desafía normas y creencias 
        establecidas, buscando siempre romper los límites impuestos.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Sagitario en la carta natal de una mujer</h2>
          <p><strong>Espíritu independiente:</strong> Se siente atraída por la libertad y rechaza cualquier tipo de restricción.</p>
          <p><strong>Búsqueda de la verdad:</strong> Tiene una mente filosófica que cuestiona las normas y sistemas de creencias.</p>
          <p><strong>Aventura y exploración:</strong> Disfruta viajar, conocer nuevas culturas y aprender constantemente.</p>
          <p><strong>Sombra y transformación:</strong> Puede caer en la arrogancia intelectual o en el rechazo a todo lo convencional sin analizarlo.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Sagitario en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres libres y audaces:</strong> Se siente fascinado por mujeres independientes, aventureras y con una mentalidad abierta.</p>
          <p><strong>Desafío a la autoridad:</strong> No le gusta que le impongan reglas y busca siempre su propio camino.</p>
          <p><strong>Filosofía de vida intensa:</strong> Puede tener un pensamiento radical o una visión extrema de la libertad.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a equilibrar su deseo de independencia con la responsabilidad en sus relaciones.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Sagitario</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Encontrar un equilibrio entre la independencia y la conexión emocional con los demás.</li>
        <li><strong>Para el hombre:</strong> Aprender a respetar la libertad del otro sin temor a perder su identidad.</li>
      </ul>

      <p>
        Lilith en Sagitario impulsa a romper barreras y explorar nuevos horizontes, pero es clave canalizar esa 
        energía de manera constructiva para evitar caer en excesos o actitudes dogmáticas.
      </p>
    </div>
  );
};

export default LilithEnSagitario;
