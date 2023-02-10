import HText from "@/assets/shared/HText";
import ActionButton from "@/assets/shared/ActionButton";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="fixed w-full flex justify-center">
      <section className="flex justify-center h-screen top-20 mx-auto">
        <div className="flex flex-col justify-between items-center my-auto h-5/6">
          {/* HEADING TEXT  */}
          <div>
            <div className="flex justify-center mt-14">
              <HText title="Model Y" />
            </div>
            <p></p>
          </div>

          {/* HOME BUTTONS  */}
          <div className="md:flex justify-center gap-8">
            <ActionButton />
            <ActionButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;