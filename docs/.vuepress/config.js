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
    },
    markdown: {
        // 显示代码行号
        lineNumbers: true,
    },
};
