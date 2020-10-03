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
            "gitalk-maker",
            {
                gitalkConfig: {
                    clientID: "c16d424e292195ea5d29",
                    clientSecret: "e37a52f52ed6ae94a03c98b3f5fb040691a8926e",
                    repo: "frontend-repo",
                    owner: "PeterChen1997",
                    admin: ["PeterChen1997"],
                    distractionFreeMode: false, // Facebook-like distraction free mode
                },
            },
        ],
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-179511910-1",
            },
        ],
        "@vuepress/medium-zoom",
        "@vuepress/plugin-back-to-top",
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
