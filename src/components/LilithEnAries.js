import React from 'react';

const LilithEnAries = ({ gender }) => {
  return (
    <div className="lilith-en-aries">
      <h1>Lilith en Aries en la Carta Natal</h1>
      <p>
        Lilith en Aries es una posición intensa, ya que Aries es un signo de fuego regido por Marte, lo que le otorga una energía fuerte, impulsiva y combativa. Lilith aquí se expresa con una independencia extrema, deseo de liderazgo y una actitud desafiante hacia la autoridad o las limitaciones impuestas por la sociedad.
      </p>
      {gender === "Mujer" ? (
        <>
          <h2>Mujer con Lilith en Aries</h2>
          <p><strong>Mujer indomable y de fuerte carácter:</strong> Una mujer con Lilith en Aries es una guerrera nata, no teme luchar por lo que quiere. Es una mujer que prefiere tomar la iniciativa en la vida y no espera la aprobación de los demás.</p>
          <p><strong>Rebelión contra los roles tradicionales:</strong> No tolera que la controlen o le digan cómo debe comportarse. Puede sentir rechazo por los estereotipos de género que limitan su libertad.</p>
          <p><strong>Atracción por desafíos y relaciones intensas:</strong> En el amor, busca relaciones apasionadas, pero puede tener dificultades con la estabilidad. Puede sentirse atraída por personas con una fuerte energía marciana (Aries, Escorpio) o con personalidades dominantes, pero al mismo tiempo, le molesta sentir que alguien intenta controlarla.</p>
          <p><strong>Sombra y transformación:</strong> Puede tener tendencia a la impulsividad, la rabia reprimida o la necesidad de demostrar siempre su fuerza. Su desafío es aprender a equilibrar su fuego interno sin caer en el exceso de confrontación o agresividad.</p>
          <p><strong>Consejo:</strong> Aprender a equilibrar la independencia con la vulnerabilidad sin sentir que mostrar emociones es debilidad.</p>
        </>
      ) : (
        <>
          <h2>Hombre con Lilith en Aries</h2>
          <p><strong>Atracción por mujeres fuertes e independientes:</strong> Lilith en Aries en la carta de un hombre indica que se siente fascinado por mujeres audaces, directas e indomables. Puede atraer relaciones con mujeres que no necesitan ser rescatadas, sino que son líderes por naturaleza.</p>
          <p><strong>Conflictos con el poder femenino:</strong> Si no ha trabajado bien su Lilith, puede tener dificultades para aceptar la independencia femenina. Puede sentir que las mujeres que le atraen lo desafían o lo hacen sentir inseguro.</p>
          <p><strong>Impulsividad en el amor y el deseo:</strong> Tiende a experimentar la atracción y la sexualidad de forma intensa e inmediata. Puede tener una actitud dominante en la intimidad, pero también sentirse dominado por su deseo.</p>
          <p><strong>Sombra y evolución personal:</strong> Su mayor reto es aprender a manejar la competencia en las relaciones sin ver a su pareja como un rival. Si reprime esta energía, puede proyectarla en relaciones conflictivas o en una constante búsqueda de adrenalina en su vida amorosa.</p>
          <p><strong>Consejo:</strong> Aceptar que la fuerza femenina no es una amenaza, sino una oportunidad de crecimiento y equilibrio.</p>
        </>
      )}
      <p><strong>Reflexión final:</strong> Lilith en Aries invita tanto a hombres como a mujeres a conectar con su autenticidad sin miedo al juicio, pero también sin caer en la impulsividad destructiva. ¡Es una energía poderosa si se canaliza bien!</p>
    </div>
  );
};

export default LilithEnAries;
