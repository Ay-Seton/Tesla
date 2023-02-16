import HText from "@/assets/shared/HText";
import PrimaryActionButton from "@/assets/shared/PrimaryActionButton";
import SecondaryActionButton from "@/assets/shared/SecondaryActionButton";
import { motion } from "framer-motion";

type Props = {
  SecondayText: string;
  PrimaryText: string;
  primaryVisible:string;
};

const Landing = ({primaryVisible, SecondayText, PrimaryText }: Props) => {
  return (
    <div className="fixed w-full flex justify-center">
      <section className="flex justify-center h-screen top-20 mx-auto">
        <div className="flex flex-col justify-between items-center my-auto h-5/6">
          {/* HEADING TEXT  */}
          <div>
            <div className="flex justify-center mt-14">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <HText title="Model Y" />
              </motion.div>
            </div>
            <p></p>
          </div>

          {/* HOME BUTTONS  */}
          <div className="md:flex justify-center gap-8">
            <motion.div
              className="md:mt-0  mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <PrimaryActionButton
                primaryVisible={primaryVisible}
                text={PrimaryText}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SecondaryActionButton text={SecondayText} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
