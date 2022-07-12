import './ExploreContainer.css';
import { IonApp, IonContent, IonRippleEffect } from '@ionic/react';
import './RippleEffectExample.css';
// import audio from '../../public/assets/audios/ai-que-delicia-mickey.mp3';
// import './play/Play.tsx';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Pressione para ouvir o Mickey</p>


        <button className="ion-activatable ripple-parent">
        Ai que Diliça
        <IonRippleEffect></IonRippleEffect>
      </button>
      <audio src="./audios/ai-que-dilica.mp3"></audio>
    </div>
    );
};

export default ExploreContainer;
