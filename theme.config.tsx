// ** React Imports
import React from "react";

// ** Component Imports
import Logo from "./components/shared/logo";
import HeadSeoTags from "./components/shared/head-seo-tags";
import Footer from "./components/shared/footer";

// ** Types
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <Logo />,
  head: <HeadSeoTags />,
  footer: {
    component: <Footer />,
  },
  search: {
    placeholder: "尋找章節",
  },
  project: {
    link: "https://github.com/0xPSheon/instructional-materialss",
  },
  docsRepositoryBase:
    "https://github.com/0xPSheon/instructional-materialss/blob/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Dapp 課程",
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "明亮",
        dark: "暗黑",
        system: "系統預設",
      };
    },
  },
};

export default config;
