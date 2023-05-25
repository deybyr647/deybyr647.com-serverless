export interface Project {
  _id?: {
    $oid: string;
  };
  github: string;
  name: string;
  image: string;
  logo: string;
  demo: string;
  tagline: string;
  description: string;
  tags: string[];
}
