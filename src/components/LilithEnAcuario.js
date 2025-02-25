import React from 'react';

const LilithEnAcuario = ({ gender }) => {
  return (
    <div className="lilith-en-acuario">
      <h1>Lilith en Acuario</h1>
      <p>
        Lilith en Acuario trae una energía revolucionaria, irreverente y poco convencional. Las personas con esta posición 
        sienten un fuerte deseo de romper con las normas establecidas y desafiar lo tradicional, buscando siempre la libertad 
        y la autenticidad.
      </p>

      {gender === "Mujer" ? (
        <>
          <h2>Lilith en Acuario en la carta natal de una mujer</h2>
          <p><strong>Espíritu libre e independiente:</strong> No tolera restricciones y necesita expresarse con total autenticidad.</p>
          <p><strong>Rechazo a lo convencional:</strong> Puede desafiar los roles de género tradicionales y apostar por una visión más igualitaria.</p>
          <p><strong>Atracción por lo diferente:</strong> Se siente fascinada por personas y experiencias fuera de lo común.</p>
          <p><strong>Sombra y transformación:</strong> Puede desconectarse emocionalmente en su afán de independencia.</p>
        </>
      ) : (
        <>
          <h2>Lilith en Acuario en la carta natal de un hombre</h2>
          <p><strong>Atracción por mujeres únicas e independientes:</strong> Le gustan las mujeres que rompen con los estereotipos y son innovadoras.</p>
          <p><strong>Desafíos con el compromiso:</strong> Puede temer perder su libertad en una relación seria.</p>
          <p><strong>Pensamiento radical e inconformista:</strong> A menudo se siente diferente y puede rechazar la autoridad.</p>
          <p><strong>Sombra y evolución personal:</strong> Debe aprender a encontrar un equilibrio entre libertad e intimidad.</p>
        </>
      )}

      <h2>Consejos para integrar Lilith en Acuario</h2>
      <ul>
        <li><strong>Para la mujer:</strong> Aceptar que la independencia no significa estar sola y que la conexión con otros puede ser enriquecedora.</li>
        <li><strong>Para el hombre:</strong> Aprender que la libertad verdadera se basa en la confianza y no en la evasión del compromiso.</li>
      </ul>

      <p>
        Lilith en Acuario es una energía que rompe barreras y desafía lo establecido. Integrarla de manera equilibrada 
        permite innovar sin perder el contacto con las emociones y el mundo real.
      </p>
    </div>
  );
};

export default LilithEnAcuario;
