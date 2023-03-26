import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import deybyImage from "../../public/images/deyby-2.jpg";

const AboutSection = () => {
  const paragraphPadding: string = "p-5";

  return (
    <section id={"about"} className={`section mx-5`}>
      <div className={`columns ${styles.about} has-background-white`}>
        <div className={`column my-5`}>
          <h2 className={`title is-4 has-text-centered`}>About Deyby</h2>
          <div className={"block"}>
            <p className={paragraphPadding}>
              Deyby is a Full-Stack Web Developer & Computer Science Educator
              based in New York City. He specializes in working with
              technologies, such as Node.js, Next.js, and Firebase.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>
              Looking Into The Future
            </h2>
            <p className={paragraphPadding}>
              Deyby will be working at Prudential Financial as a Software
              Engineering Intern in Summer 2023. His end goal is to achieve a
              full-time role within the Financial Technology industry.
            </p>
          </div>
        </div>

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center my-5`}
        >
          <figure className={`image ${styles.logo}`}>
            <Image
              src={deybyImage}
              alt={"Deyby Rodriguez Logo"}
              className={`is-rounded`}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
