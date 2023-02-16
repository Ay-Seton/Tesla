import { useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Landing from "../Landing";
import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  const scrollRef = useRef<HTMLElement>(null);
  // const myRef = useRef<HTMLDivElement | null>(null);
  const select = document.getElementsByTagName("div") as HTMLCollection;
  // const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [PrimaryText, setPrimaryText] = useState<string>("Custom Order");
  const [SecondayText, setSecondayText] = useState<string>("Demo Drive");
  const [primaryVisible, setPrimaryIsVisible] = useState<string>("");

  useScrollSnap({ ref: scrollRef, duration: 5, delay: 20 });

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     // const entry_2 = entries[1];
  //     // console.log(entry);
  //     // const entry_3 = entries[2];
  //     // const entry_4 = entries[3];

  //     if (entry.isIntersecting) {
  //       setBackgroundColor("bg-white");
  //       setText("Explore Inventory");
  //     }
  //     // else if (entry_3.isIntersecting) {
  //     //   setBackgroundColor("bg-black");
  //     //   setText("Custom Order");
  //     // } else if (entry_4.isIntersecting) {     //Failed implementation of intersectionObserver
  //     //   setBackgroundColor("bg-black");
  //     //   setText("Shop Now");
  //     // }

  //     else {
  //       setBackgroundColor("bg-none");
  //       setText("Custom Order");
  //     }
  //   });
  //   // (select:HTMLElement) => select)

  //   for(let i = 0; i < select.length; i++) {
  //     console.log(select.length)
  //     observer.observe(select[i])
  //   }
  // }, []);

  console.log(PrimaryText);
  return (
    <>
      <Landing
        primaryVisible={primaryVisible}
        PrimaryText={PrimaryText}
        SecondayText={SecondayText}
      />
      <section className="h-full w-full" ref={scrollRef}>
        <motion.div
          onViewportEnter={() => {
            setPrimaryIsVisible("");
            setPrimaryText("Custom Order");
            setSecondayText("Demo Drive");
          }}
          className="h-screen w-full bg-modely bg-cover bg-top"
        ></motion.div>
        <motion.div
          onViewportEnter={() => {
            setPrimaryIsVisible("");
            setPrimaryText("Custom Order");
            setSecondayText("Demo Drive");
          }}
          className="h-screen w-full bg-modelx bg-cover bg-top"
        ></motion.div>
        <motion.div
          onViewportEnter={() => {
            setPrimaryIsVisible("");
            setPrimaryText("Custom Order");
            setSecondayText("View Inventory");
          }}
          className="h-screen w-full bg-models bg-cover bg-top"
        ></motion.div>
        <motion.div
          onViewportEnter={() => {
            setPrimaryIsVisible("");
            setSecondayText("Learn More");
            setPrimaryText("Order More");
          }}
          className="h-screen w-full bg-housePanel bg-cover bg-top"
        ></motion.div>
        <motion.div className="h-screen w-full bg-solarPanel bg-cover bg-top"></motion.div>
        <motion.div
          onViewportEnter={() => {
            setSecondayText("Shop Now");
            setPrimaryIsVisible("hidden");
          }}
          className="h-screen w-full bg-accessory bg-cover bg-top"
        ></motion.div>
      </section>
    </>
  );
};

export default Home;
