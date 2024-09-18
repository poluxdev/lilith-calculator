import React from 'react';
import './LilithMeaning.css'; // Asegúrate de que el archivo CSS esté importado
import earthImage from '../assets/earth.png'; // Ajusta la ruta según tu estructura
import moonImage from '../assets/moon.png'; // Ajusta la ruta según tu estructura
import lilithImage from '../assets/lilith.png'; // Ajusta la ruta según tu estructura

const LilithMeaning = () => {
  return (
    <div className="lilith-meaning">
      <h1>Lilith: La Luna Negra en Astrología</h1>
      <p>
        Lilith, conocida también como la "Luna Negra" en astrología, no es un cuerpo celeste real, sino un punto ficticio en la órbita lunar. Se calcula como el segundo foco de la órbita elíptica de la Luna alrededor de la Tierra. Su interpretación puede variar, pero aquí te doy una visión general:
      </p>
      <h2>Cálculo de Lilith</h2>
      <p><strong>Definición:</strong> Lilith es el punto en el que la Luna está más alejada de la Tierra en su órbita elíptica. Es el segundo foco de esa órbita, lo que la convierte en un punto opuesto a la Tierra en la misma órbita.</p>
      <p><strong>Posición Zodiacal:</strong> Para calcular la posición de Lilith en tu carta natal, necesitas conocer la fecha, hora y lugar de nacimiento. Usualmente, se utilizan software astrológicos o efemérides especializadas que calculan su posición exacta en el zodiaco.</p>
      <h2>Interpretación de Lilith</h2>
      <h3>Aspectos de la Personalidad:</h3>
      <ul>
        <li><strong>Rebeldía y Autonomía:</strong> Lilith suele estar asociada con la independencia y la resistencia a la conformidad. Puede reflejar áreas de tu vida donde luchas contra la autoridad o te resistes a las normas sociales.</li>
        <li><strong>Poder Personal y Sombra:</strong> También se relaciona con aspectos oscuros o reprimidos de la psique, como temores y deseos ocultos. Puede indicar dónde necesitas enfrentar y integrar estos aspectos para tu crecimiento personal.</li>
      </ul>
      <p>
        En resumen, la posición de Lilith en tu carta natal puede ofrecerte insights sobre áreas de tu vida donde puedes experimentar luchas internas o desafíos, pero también donde puedes encontrar un profundo poder y autenticidad. La interpretación puede variar según la posición específica y los aspectos que forma con otros cuerpos celestes en tu carta natal.
      </p>
      <h2>Cómo se Calcula Lilith</h2>
      <div className="lilith-diagram">
        <img src={earthImage} alt="Tierra" className="earth" />
        <div className="moon-orbit">
          <img src={moonImage} alt="Luna" className="moon" />
          <img src={lilithImage} alt="Lilith" className="lilith" />
        </div>
        <div className="element-name earth-name">Tierra</div>
        <div className="element-name moon-name">Luna</div>
        <div className="element-name lilith-name">Lilith</div>
      </div>
    </div>
  );
};

export default LilithMeaning;
