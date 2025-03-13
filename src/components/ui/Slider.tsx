import { Splide, SplideSlide } from '@splidejs/react-splide';
import Prato1 from "../../assets/img/Prato1.png";
import Prato2 from "../../assets/img/Prato2.png";
import Prato3 from "../../assets/img/Prato3.png";

const Slider = () => {

    return (
        <Splide
            options={{
                type: "loop",
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: false,
                pagination: false,
                speed: 1000, // Suaviza a transição
                flickPower: 0, // Remove efeito de "puxão" entre imagens
                perPage: 1, // Garante que apenas 1 imagem apareça por vez
                perMove: 1, // Move apenas uma imagem por vez
            }}
            aria-label="Imagens de pratos"
        >
            <SplideSlide>
                <img src={Prato1} alt="Prato 1" className="w-full h-auto rounded-xl" />
            </SplideSlide>
            <SplideSlide>
                <img src={Prato2} alt="Prato 2" className="w-full h-auto rounded-xl" />
            </SplideSlide>
            <SplideSlide>
                <img src={Prato3} alt="Prato 3" className="w-full h-auto rounded-xl" />
            </SplideSlide>
        </Splide>
    );
};

export default Slider;
