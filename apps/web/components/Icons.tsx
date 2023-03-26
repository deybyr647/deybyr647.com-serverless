import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail, mdiFileAccount } from "@mdi/js";

const config = {
  iconSize: 1.5,
  iconColor: "#333333",
};

const { iconSize, iconColor } = config;
export const LinkedinIcon = () => (
  <Icon
    path={mdiLinkedin}
    title={"Deyby on LinkedIn"}
    size={iconSize}
    color={iconColor}
    className={"icon"}
  />
);

export const GithubIcon = () => (
  <Icon
    path={mdiGithub}
    title={"Deyby on GitHub"}
    size={iconSize}
    color={iconColor}
    className={"icon"}
  />
);

export const EmailIcon = () => (
  <Icon
    path={mdiEmail}
    title={"Email Deyby"}
    size={iconSize}
    color={iconColor}
    className={"icon"}
  />
);
