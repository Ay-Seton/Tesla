import { useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Landing from "../Landing";
type Props = {};

const Home = (props: Props) => {
  const scrollRef = useRef<HTMLElement>(null);
  // const myRef = useRef<HTMLDivElement | null>(null);
  const select = document.getElementsByTagName("div");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [text, setText] = useState<string>("");

  useScrollSnap({ ref: scrollRef, duration: 5, delay: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const entry_2 = entries[1];
      const entry_3 = entries[2];
      const entry_4 = entries[3];

      if (entry.isIntersecting) {
        setBackgroundColor("bg-white");
        setText("Explore Inventory");
      }
      // else if (entry_3.isIntersecting) {
      //   setBackgroundColor("bg-black");
      //   setText("Custom Order");
      // } else if (entry_4.isIntersecting) {
      //   setBackgroundColor("bg-black");
      //   setText("Shop Now");
      // }
      
      else {
        setBackgroundColor("bg-none");
        setText("Custom Order");
      }
    });
    observer.observe(select[0]);
  }, []);

  console.log(text);
  return (
    <>
      <Landing text={text} backgroundColor={backgroundColor} />
      <section className="h-full w-full" ref={scrollRef}>
        <div className="h-screen w-full bg-modely bg-cover bg-top"></div>
        <div className="h-screen w-full bg-models bg-cover bg-top"></div>
        <div className="h-screen w-full bg-modelx bg-cover bg-top"></div>
        <div className="h-screen w-full bg-solarPanel bg-cover bg-top"></div>
      </section>
    </>
  );
};

export default Home;
