import { lazy } from "react";
import links from "./links";

export type Page = {
  link: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const pages = [
  {
    link: links.home,
    component: lazy(() => import("../pages/home"))
  },
  {
    link: links.projects,
    component: lazy(() => import("../pages/projects"))
  },
];

export default pages;
