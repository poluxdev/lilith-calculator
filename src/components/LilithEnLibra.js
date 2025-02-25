import React from 'react';

const LilithEnLibra = ({ gender }) => {
  return (
    <div className="lilith-en-libra">
      <h1>Lilith en Libra</h1>
      <p>
        Lilith en Libra se manifiesta en la tensión entre el deseo de armonía y la necesidad de autonomía. 
        Esta posición resalta temas de relaciones, justicia y equilibrio, pero también puede generar conflictos 
        en la forma de vincularse con los demás.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Libra en la carta natal de una mujer</h2>
          <p><strong>Encanto y magnetismo:</strong> Tiene una presencia atractiva y un carisma natural que la hace destacar en los círculos sociales.</p>
          <p><strong>Independencia vs. relaciones:</strong> Puede debatirse entre su deseo de pareja y su miedo a perder su identidad dentro de una relación.</p>
          <p><strong>Rebelión contra la dependencia:</strong> No soporta las relaciones basadas en la sumisión o el control. Busca un vínculo de igualdad.</p>
          <p><strong>Sombra y transformación:</strong> Su reto es encontrar un equilibrio entre el amor propio y el amor por los demás sin caer en la complacencia.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Libra en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres sofisticadas:</strong> Le fascinan las mujeres elegantes, inteligentes y con un fuerte sentido de la justicia.</p>
          <p><strong>Miedo a la vulnerabilidad:</strong> Puede evitar los conflictos en las relaciones, reprimiendo sus verdaderas emociones.</p>
          <p><strong>Idealización del amor:</strong> Busca la relación perfecta, lo que puede llevar a decepciones cuando la realidad no cumple sus expectativas.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a enfrentar los problemas de pareja en lugar de ignorarlos en busca de una falsa armonía.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Libra</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aprender a equilibrar su deseo de amor con su necesidad de independencia.</li>
        <li><strong>Para el hombre:</strong> Aceptar que el amor no siempre es ideal y que los conflictos son parte del crecimiento en pareja.</li>
      </ul>

      <p>
        Lilith en Libra invita a explorar el equilibrio entre la individualidad y la conexión con los demás. 
        La clave está en construir relaciones basadas en la autenticidad y la igualdad.
      </p>
    </div>
  );
};

export default LilithEnLibra;
