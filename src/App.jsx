import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/9.jpeg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage"; 
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const audioRef = useRef(null); // Membuat ref untuk elemen audio

  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant === "primary" ? "bg-white text-black" : "bg-white/30 text-white"
        }`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const handlePlay = () => {
    setOpenModal(true); // Buka modal
    if (audioRef.current) {
      audioRef.current.play(); // Mulai pemutaran audio
    }
  };

  return (
    <main>
      <Navbar />
      <audio ref={audioRef}>
        <source src="/ms.mp3" type="audio/mpeg" /> {/* Ganti path di sini */}
        Your browser does not support the audio element.
      </audio>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            How to say Happy Birthday before I disappear back into the crowd.
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            This is how Lukman, someone you might never know, expresses admiration. From a distance, he's watched your light grow brighter, hoping one day you'd notice. On this special day, October 29, 2024, this is how Lukman says happy birthday to you.
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={handlePlay}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore: Us</h3>
          <section className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px]"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, Lizaaa</h1>
          <p>Hi Liza</p>
          <p>
            You don't know me, and maybe you never will. But from afar, I’ve been inspired by your journey, your energy, and the way you light up the lives of so many. On this special day, I just wanted to send a simple wish: May your path continue to be as beautiful as the person you are, and may this year bring even more joy, love, and success into your life.
          </p>
          <p>
            With all my love,
            <br />
            Lukman
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;
