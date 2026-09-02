/* =========================================================
   服装开发参考站
   script.js
   最终版
   ========================================================= */


/* =========================================================
   1. 类目数据
   ========================================================= */

const categoryData = {

    /* -------------------------
       标码男装
       ------------------------- */
    standard: {
        title: "标码男装",
        subtitle: "Standard Menswear",

        items: [
            {
                name: "类目占位符 01",
                path: "一级类目 > 二级类目 > 类目占位符 01"
            },
            {
                name: "类目占位符 02",
                path: "一级类目 > 二级类目 > 类目占位符 02"
            },
            {
                name: "类目占位符 03",
                path: "一级类目 > 二级类目 > 类目占位符 03"
            },
            {
                name: "类目占位符 04",
                path: "一级类目 > 二级类目 > 类目占位符 04"
            },
            {
                name: "类目占位符 05",
                path: "一级类目 > 二级类目 > 类目占位符 05"
            },
            {
                name: "类目占位符 06",
                path: "一级类目 > 二级类目 > 类目占位符 06"
            },
            {
                name: "类目占位符 07",
                path: "一级类目 > 二级类目 > 类目占位符 07"
            },
            {
                name: "类目占位符 08",
                path: "一级类目 > 二级类目 > 类目占位符 08"
            }
        ]
    },


    /* -------------------------
       大码男装
       ------------------------- */
    plus: {
        title: "大码男装",
        subtitle: "Plus Size Menswear",

        items: [
            {
                name: "类目占位符 01",
                path: "一级类目 > 二级类目 > 类目占位符 01"
            },
            {
                name: "类目占位符 02",
                path: "一级类目 > 二级类目 > 类目占位符 02"
            },
            {
                name: "类目占位符 03",
                path: "一级类目 > 二级类目 > 类目占位符 03"
            },
            {
                name: "类目占位符 04",
                path: "一级类目 > 二级类目 > 类目占位符 04"
            },
            {
                name: "类目占位符 05",
                path: "一级类目 > 二级类目 > 类目占位符 05"
            },
            {
                name: "类目占位符 06",
                path: "一级类目 > 二级类目 > 类目占位符 06"
            }
        ]
    },


    /* -------------------------
       孕妇装
       ------------------------- */
    maternity: {
        title: "孕妇装",
        subtitle: "Maternity Wear",

        items: [
            {
                name: "类目占位符 01",
                path: "一级类目 > 二级类目 > 类目占位符 01"
            },
            {
                name: "类目占位符 02",
                path: "一级类目 > 二级类目 > 类目占位符 02"
            },
            {
                name: "类目占位符 03",
                path: "一级类目 > 二级类目 > 类目占位符 03"
            },
            {
                name: "类目占位符 04",
                path: "一级类目 > 二级类目 > 类目占位符 04"
            },
            {
                name: "类目占位符 05",
                path: "一级类目 > 二级类目 > 类目占位符 05"
            },
            {
                name: "类目占位符 06",
                path: "一级类目 > 二级类目 > 类目占位符 06"
            },
            {
                name: "类目占位符 07",
                path: "一级类目 > 二级类目 > 类目占位符 07"
            },
            {
                name: "类目占位符 08",
                path: "一级类目 > 二级类目 > 类目占位符 08"
            }
        ]
    }
};


/* =========================================================
   2. 当前选中的类目
   ========================================================= */

let currentCategory = null;


/* =========================================================
   3. 页面加载
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    handleRoute();
});


/* =========================================================
   4. 路由处理
   ========================================================= */

function handleRoute() {

    const hash = window.location.hash;

    const categoryKey = hash
        .replace("#", "")
        .trim();

    if (
        categoryKey &&
        Object.prototype.hasOwnProperty.call(categoryData, categoryKey)
    ) {

        showCategory(categoryKey);

    } else {

        showHome();

    }
}


/* =========================================================
   5. 显示首页
   ========================================================= */

function showHome() {

    currentCategory = null;

    const homeView =
        document.getElementById("homeView");

    const categoryView =
        document.getElementById("categoryView");


    if (homeView) {
        homeView.classList.remove("hidden");
    }


    if (categoryView) {
        categoryView.classList.add("hidden");
    }


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   6. 打开类目
   ========================================================= */

function openCategory(categoryKey) {

    if (
        !categoryKey ||
        !Object.prototype.hasOwnProperty.call(
            categoryData,
            categoryKey
        )
    ) {

        console.error(
            "不存在的类目：",
            categoryKey
        );

        return;
    }


    window.location.hash = categoryKey;
}


/* =========================================================
   7. 显示类目页面
   ========================================================= */

function showCategory(categoryKey) {

    const data =
        categoryData[categoryKey];


    if (!data) {

        showHome();

        return;
    }


    currentCategory = categoryKey;


    const homeView =
        document.getElementById("homeView");

    const categoryView =
        document.getElementById("categoryView");

    const categoryTitle =
        document.getElementById("categoryTitle");

    const categorySubtitle =
        document.getElementById("categorySubtitle");

    const categoryCount =
        document.getElementById("categoryCount");

    const categorySearch =
        document.getElementById("categorySearch");

    const clearSearch =
        document.getElementById("clearSearch");


    /* 首页隐藏 */
    if (homeView) {
        homeView.classList.add("hidden");
    }


    /* 类目页显示 */
    if (categoryView) {
        categoryView.classList.remove("hidden");
    }


    /* 标题 */
    if (categoryTitle) {
        categoryTitle.textContent =
            data.title;
    }


    /* 英文副标题 */
    if (categorySubtitle) {
        categorySubtitle.textContent =
            data.subtitle;
    }


    /* 类目数量 */
    if (categoryCount) {
        categoryCount.textContent =
            data.items.length;
    }


    /* 清空搜索 */
    if (categorySearch) {
        categorySearch.value = "";
    }


    /* 隐藏清除按钮 */
    if (clearSearch) {
        clearSearch.classList.add("hidden");
    }


    /* 显示全部类目 */
    renderCategories(
        data.items,
        ""
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   8. 返回首页
   ========================================================= */

function goHome() {

    currentCategory = null;


    /*
     * 去掉 URL 中的 #类目
     */
    history.pushState(
        null,
        "",
        window.location.pathname +
        window.location.search
    );


    showHome();
}


/* =========================================================
   9. 浏览器前进 / 后退
   ========================================================= */

window.addEventListener(
    "hashchange",
    handleRoute
);


window.addEventListener(
    "popstate",
    handleRoute
);


/* =========================================================
   10. 类目搜索
   ========================================================= */

function searchCategories() {

    if (!currentCategory) {
        return;
    }


    const data =
        categoryData[currentCategory];


    if (!data) {
        return;
    }


    const input =
        document.getElementById(
            "categorySearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (!input) {
        return;
    }


    const keyword =
        input.value.trim();


    /* -------------------------
       清除按钮
       ------------------------- */

    if (clearButton) {

        if (keyword) {

            clearButton.classList.remove(
                "hidden"
            );

        } else {

            clearButton.classList.add(
                "hidden"
            );
        }
    }


    /* -------------------------
       没有关键词
       显示全部
       ------------------------- */

    if (!keyword) {

        renderCategories(
            data.items,
            ""
        );

        return;
    }


    /* -------------------------
       模糊搜索
       ------------------------- */

    const normalizedKeyword =
        normalizeText(keyword);


    const results =
        data.items.filter(function (item) {

            const searchText =
                normalizeText(
                    item.name +
                    " " +
                    item.path
                );


            return searchText.includes(
                normalizedKeyword
            );

        });


    renderCategories(
        results,
        keyword
    );
}


/* =========================================================
   11. 清除搜索
   ========================================================= */

function clearSearch() {

    const input =
        document.getElementById(
            "categorySearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (input) {

        input.value = "";

        input.focus();
    }


    if (clearButton) {

        clearButton.classList.add(
            "hidden"
        );
    }


    if (!currentCategory) {
        return;
    }


    const data =
        categoryData[currentCategory];


    if (!data) {
        return;
    }


    renderCategories(
        data.items,
        ""
    );
}


/* =========================================================
   12. 快速搜索
   ========================================================= */

function quickSearch(keyword) {

    const input =
        document.getElementById(
            "categorySearch"
        );


    if (!input) {
        return;
    }


    input.value = keyword;


    searchCategories();


    input.focus();
}


/* =========================================================
   13. 搜索文字标准化
   ========================================================= */

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim();
}


/* =========================================================
   14. 渲染类目列表
   ========================================================= */

function renderCategories(
    items,
    keyword
) {

    const list =
        document.getElementById(
            "categoryList"
        );


    const emptyState =
        document.getElementById(
            "emptyState"
        );


    const resultText =
        document.getElementById(
            "resultText"
        );


    if (!list) {
        return;
    }


    /* 清空旧内容 */
    list.innerHTML = "";


    /* 搜索结果数量 */
    if (resultText) {

        resultText.textContent =
            `共 ${items.length} 个`;
    }


    /* -------------------------
       没有搜索结果
       ------------------------- */

    if (items.length === 0) {

        list.classList.add(
            "hidden"
        );


        if (emptyState) {

            emptyState.classList.remove(
                "hidden"
            );
        }


        return;
    }


    /* -------------------------
       有结果
       ------------------------- */

    list.classList.remove(
        "hidden"
    );


    if (emptyState) {

        emptyState.classList.add(
            "hidden"
        );
    }


    /* -------------------------
       生成类目
       ------------------------- */

    items.forEach(function (item) {

        const itemElement =
            document.createElement("div");


        itemElement.className =
            "category-item";


        /* 类目名称 */

        const nameElement =
            document.createElement("div");


        nameElement.className =
            "category-name";


        nameElement.innerHTML =
            highlightText(
                escapeHtml(item.name),
                keyword
            );


        /* 类目路径 */

        const pathElement =
            document.createElement("div");


        pathElement.className =
            "category-path";


        pathElement.innerHTML =
            formatPath(
                item.path,
                keyword
            );


        /* 添加 */

        itemElement.appendChild(
            nameElement
        );


        itemElement.appendChild(
            pathElement
        );


        list.appendChild(
            itemElement
        );

    });
}


/* =========================================================
   15. 格式化类目路径
   ========================================================= */

function formatPath(
    path,
    keyword
) {

    return String(path)
        .split(">")
        .map(function (part) {

            return highlightText(
                escapeHtml(
                    part.trim()
                ),
                keyword
            );

        })
        .join(
            '<span class="path-arrow">›</span>'
        );
}


/* =========================================================
   16. 搜索结果高亮
   ========================================================= */

function highlightText(
    text,
    keyword
) {

    if (!keyword) {
        return text;
    }


    const safeKeyword =
        escapeRegExp(keyword);


    if (!safeKeyword) {
        return text;
    }


    const regex =
        new RegExp(
            "(" +
            safeKeyword +
            ")",
            "gi"
        );


    return text.replace(
        regex,
        '<mark class="highlight">$1</mark>'
    );
}


/* =========================================================
   17. HTML 转义
   ========================================================= */

function escapeHtml(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   18. 正则特殊字符转义
   ========================================================= */

function escapeRegExp(text) {

    return String(text).replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}


/* =========================================================
   19. 防止回车提交 / 刷新
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const target =
            event.target;


        if (
            target &&
            target.id === "categorySearch" &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            searchCategories();
        }

    }
);


/* =========================================================
   20. 暴露给 HTML onclick 使用
   ========================================================= */

window.openCategory =
    openCategory;


window.goHome =
    goHome;


window.searchCategories =
    searchCategories;


window.clearSearch =
    clearSearch;


window.quickSearch =
    quickSearch;
