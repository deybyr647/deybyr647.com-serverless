import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import headShot from "../../public/images/deyby.jpeg";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../Icons";

import { useEffect } from "react";

import AOS from "aos";

const HeaderSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className={`section mx-5`} data-aos={"fade-up"}>
      <div className={`columns ${styles.intro} has-background-white`}>
        <div className={`column my-5`}>
          <figure className={`image ${styles.headshot}`}>
            <Image
              src={headShot}
              alt={"Deyby Rodriguez"}
              className={`is-rounded`}
            />
          </figure>
        </div>

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center is-align-items-center`}
        >
          <h1 className={`title has-text-centered ${styles.name}`}>
            Deyby Rodriguez
          </h1>
          <h2 className={`subtitle mt-2 has-text-centered`}>
            Full-Stack Web Developer
          </h2>

          <div className={"block"}>
            <a
              href={"mailto:deybyr647@gmail.com?subject=Hey%20Deyby!"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <EmailIcon />
            </a>
            <a
              href={"https://www.github.com/deybyr647"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <GithubIcon />
            </a>
            <a
              href={"https://www.linkedin.com/in/deyby-rodriguez/"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
