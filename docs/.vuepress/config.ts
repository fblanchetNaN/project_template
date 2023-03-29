import { shikiPlugin } from "@vuepress/plugin-shiki";
import { hopeTheme } from "vuepress-theme-hope";

export default {
  base: "/test/",
  lang: "en-US",
  title: "project_name's documentation",

  theme: hopeTheme({
    contributors: false,
    darkmode: "enable",
    docsDir: "docs",
    hostname: "https://fblanchetnan.github.io/",
    lastUpdated: false,
    repo: "https://github.com/fblanchetNaN/test",
    plugins: {
      mdEnhance: {
        container: true,
        codetabs: true,
        footnote: true,
        gfm: true,
        katex: true,
        tabs: true,
        tasklist: true,
        sub: true,
        sup: true,
      },
      prismjs: false,
    },
    navbar: ["/pages/"],
    sidebar: {
      "/pages/": "structure",
    },
  }),

  plugins: [
    shikiPlugin({
      theme: "material-theme-darker",
    }),
  ],
};
