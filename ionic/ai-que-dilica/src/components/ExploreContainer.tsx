import "./ExploreContainer.css";
import { IonApp, IonContent, IonRippleEffect } from "@ionic/react";
import "./RippleEffectExample.css";
import { sounddata } from "../player/audios";
// import Player from "../player/Player";
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
            <audio src="https://www.youtube.com/watch?v=xkXLfQRYkRQ&ab_channel=smz"></audio>

            <button className="ion-activatable ripple-parent">
                Ai que Diliça
                <IonRippleEffect></IonRippleEffect>
            </button>
        </div>
    );
};

export default ExploreContainer;
