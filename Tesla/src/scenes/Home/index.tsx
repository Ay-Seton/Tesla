
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
type Props = {};

const Home = (props: Props) => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 20 });
  return (
    <section className="h-full w-full" ref={scrollRef}>
      <div className="h-screen w-full bg-modely bg-cover bg-top"></div>
      <div className="h-screen w-full bg-models bg-cover bg-top"></div>
      <div className="h-screen w-full bg-modelx bg-cover bg-top"></div>
      <div className="h-screen w-full bg-solarPanel bg-cover bg-top"></div>
    </section>
  );
};

export default Home;
