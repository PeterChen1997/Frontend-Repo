const path = require("path");
const { nav, sidebar } = require("vuepress-bar")(
    `${path.join(__dirname, "../")}`,
    {
        addReadMeToFirstGroup: false,
    }
);

module.exports = {
    base: "/Frontend-Repo/",
    title: "前端小记",
    description: "Stay hungry, stay foolish",
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-179511910-1",
            },
        ],
        "@vuepress/medium-zoom",
        [
            "gitalk",
            {
                gitalkConfig: {
                    clientID: "c16d424e292195ea5d29",
                    clientSecret: "e37a52f52ed6ae94a03c98b3f5fb040691a8926e",
                    repo: "peterchen1997/Frontend-Repo",
                    owner: "peterchen1997",
                    admin: ["peterchen1997"],
                    distractionFreeMode: false, // Facebook-like distraction free mode
                },
            },
        ],
    ],
    themeConfig: {
        nav: [
            ...nav,
            // { text: 'Blog', link: 'https://www.wenboz.com' },
        ],
        sidebar,
        lastUpdated: "Last Updated",
        repo: "peterchen1997/Frontend-Repo",
        docsBranch: "v2",
        editLinks: true,
        editLinkText: "帮助我们改善此页面",
        smoothScroll: true,
    },
    markdown: {
        // 显示代码行号
        lineNumbers: true,
    },
};
