import styles from "../../../styles/Home.module.scss";
import Carousel from "./Carousel";

const ProjectSection = () => {
  return (
    <section id={"projects"} className={`section mx-5`}>
      <div
        className={`columns ${styles.about} is-flex-direction-column has-background-white`}
      >
        <div className={"column my-5"}>
          <h1 className={`title has-text-centered ${styles.heading} my-5`}>
            Projects
          </h1>
        </div>

        <div className={"column"}>
          <div
            className={
              "columns is-justify-content-center is-align-items-center"
            }
          >
            <div className={"column is-flex-direction-row is-half"}>
              <Carousel projects={[]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
