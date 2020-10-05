function integrateGitalk(router) {
    const linkGitalk = document.createElement("link");
    linkGitalk.href = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";
    linkGitalk.rel = "stylesheet";
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement("script");
    scriptGitalk.src =
        "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
    document.body.appendChild(scriptGitalk);
    var path = "";

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            setTimeout(loadGitalk, 5, to);
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to.fullPath);
            };
        }
    });

    function loadGitalk(to) {
        if (to.path !== path) {
            path = to.path;
            let commentsContainer = document.getElementById("gitalk-container");
            const $page = document.querySelector(".page");
            if (commentsContainer && $page) {
                $page.removeChild(commentsContainer);
            }
            commentsContainer = document.createElement("div");
            commentsContainer.id = "gitalk-container";
            commentsContainer.classList.add("content");
            if ($page) {
                $page.appendChild(commentsContainer);
                if (
                    typeof Gitalk !== "undefined" &&
                    Gitalk instanceof Function
                ) {
                    renderGitalk();
                }
            }
        }
    }
    function renderGitalk() {
        // 如果url路径有中文则使用decodeURIComponent，否则可以直接使用location.pathname
        const path = decodeURIComponent(location.pathname);
        const gitalk = new Gitalk({
            clientID: "c16d424e292195ea5d29",
            clientSecret: "e37a52f52ed6ae94a03c98b3f5fb040691a8926e",
            repo: "frontend-repo",
            owner: "PeterChen1997",
            admin: ["PeterChen1997"],
            distractionFreeMode: false,
            id: path, // 唯一，并且长度小于50
            language: "zh-CN",
        });
        gitalk.render("gitalk-container");
    }
    window.loadGitalk = loadGitalk;
}

export default ({ Vue, options, router }) => {
    try {
        document && integrateGitalk(router);
    } catch (e) {
        console.error(e.message);
    }
};
