import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import houzlook from '../assets/houzlook.jpg';
import medhatAyad from '../assets/medhatAyad.jpg';
import valeriaBoltneva from '../assets/valeriaBoltneva.jpg';

function ParallaxProduct() {
    return (
        <div>
            <Parallax slowerScrollRate className="parallax">
                <img src={houzlook} alt="" />
            </Parallax>
            <Parallax className="parallax">
                <img src={medhatAyad} alt="" />
            </Parallax>
            <Parallax slowerScrollRate className="parallax">
                <img src={valeriaBoltneva} alt="" />
            </Parallax>
        </div>
    );
}

const ParallaxApp = () => {
    <ParallaxProvider>
        <ParallaxProduct></ParallaxProduct>
    </ParallaxProvider>;
};

export default ParallaxApp;
