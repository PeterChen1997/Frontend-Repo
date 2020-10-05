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
        "@vuepress/plugin-back-to-top",

        // wait for the chance
        // [
        //     "algolia",
        //     {
        //         apiKey: "<API_KEY>",
        //         indexName: "<INDEX_NAME>",
        //     },
        // ]
    ],
    themeConfig: {
        nav: [...nav],
        sidebar,
        lastUpdated: "Last Updated",
        repo: "peterchen1997/Frontend-Repo",
        docsBranch: "v2",
        editLinks: true,
        editLinkText: "说的不对，点这里帮忙Fix～",
        smoothScroll: true,
    },
    markdown: {
        // 显示代码行号
        lineNumbers: true,
    },
};
