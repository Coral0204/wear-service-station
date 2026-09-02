/* =====================================================
   服装开发参考站
   类目数据 + 页面交互
===================================================== */


/* =====================================================
   1. 类目数据

   现在全部使用占位符。
   后续只需要替换这里的数据，
   页面结构和搜索功能都不需要修改。
===================================================== */

const categoryData = {

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


/* =====================================================
   2. 当前页面状态
===================================================== */

let currentCategory = null;


/* =====================================================
   3. DOM
===================================================== */

const homeView = document.getElementById("homeView");

const categoryView = document.getElementById("categoryView");

const categoryTitle =
    document.getElementById("categoryTitle");

const categorySubtitle =
    document.getElementById("categorySubtitle");

const categoryCount =
    document.getElementById("categoryCount");

const categorySearch =
    document.getElementById("categorySearch");

const clearSearchButton =
    document.getElementById("clearSearch");

const categoryList =
    document.getElementById("categoryList");

const resultText =
    document.getElementById("resultText");

const emptyState =
    document.getElementById("emptyState");


/* =====================================================
   4. 初始化
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    handleRoute();

});


/* =====================================================
   5. 页面路由

   使用 URL hash：

   首页：
   index.html

   标码男装：
   index.html#standard

   大码男装：
   index.html#plus

   孕妇装：
   index.html#maternity
===================================================== */

function handleRoute() {

    const hash = window.location.hash.replace("#", "");

    if (hash && categoryData[hash]) {

        showCategory(hash);

    } else {

        showHome();

    }

}


/* =====================================================
   6. 首页
===================================================== */

function showHome() {

    currentCategory = null;

    homeView.classList.remove("hidden");

    categoryView.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   7. 打开分类
===================================================== */

function openCategory(categoryKey) {

    if (!categoryData[categoryKey]) {
        return;
    }

    window.location.hash = categoryKey;

}


/* =====================================================
   8. 显示分类
===================================================== */

function showCategory(categoryKey) {

    const data = categoryData[categoryKey];

    if (!data) {
        showHome();
        return;
    }

    currentCategory = categoryKey;

    homeView.classList.add("hidden");

    categoryView.classList.remove("hidden");


    /* 标题 */

    categoryTitle.textContent =
        data.title;

    categorySubtitle.textContent =
        data.subtitle;


    /* 数量 */

    categoryCount.textContent =
        data.items.length;


    /* 清空搜索 */

    categorySearch.value = "";

    clearSearchButton.classList.add("hidden");


    /* 渲染 */

    renderCategories(data.items, "");


    /* 回到顶部 */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   9. 返回首页
===================================================== */

function goHome() {

    if (window.location.hash) {

        history.pushState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

    }

    showHome();

}


/* =====================================================
   10. 浏览器前进 / 后退
===================================================== */

window.addEventListener("hashchange", function () {

    handleRoute();

});


window.addEventListener("popstate", function () {

    handleRoute();

});


/* =====================================================
   11. 搜索
===================================================== */

function searchCategories() {

    if (!currentCategory) {
        return;
    }

    const keyword =
        categorySearch.value.trim();

    const data =
        categoryData[currentCategory];


    /* 清除按钮 */

    if (keyword) {

        clearSearchButton.classList.remove("hidden");

    } else {

        clearSearchButton.classList.add("hidden");

    }


    /* 没有搜索词 */

    if (!keyword) {

        renderCategories(
            data.items,
            ""
        );

        return;

    }


    /* =================================================
       模糊搜索

       搜索范围：

       1. name
       2. path

       所以以后输入：

       背心
       衬衫
       牛仔
       套装
       运动
       潜水

       都可以匹配。
    ================================================= */

    const normalizedKeyword =
        normalizeText(keyword);


    const results =
        data.items.filter(function (item) {

            const fullText =
                normalizeText(
                    item.name +
                    " " +
                    item.path
                );

            return fullText.includes(
                normalizedKeyword
            );

        });


    renderCategories(
        results,
        keyword
    );

}


/* =====================================================
   12. 清除搜索
===================================================== */

function clearSearch() {

    categorySearch.value = "";

    clearSearchButton.classList.add("hidden");

    if (!currentCategory) {
        return;
    }

    const data =
        categoryData[currentCategory];

    renderCategories(
        data.items,
        ""
    );

    categorySearch.focus();

}


/* =====================================================
   13. 快速搜索
===================================================== */

function quickSearch(keyword) {

    categorySearch.value = keyword;

    searchCategories();

    categorySearch.focus();

}


/* =====================================================
   14. 文本标准化

   解决：

   大小写
   全角空格
   多余空格

===================================================== */

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim();

}


/* =====================================================
   15. 渲染类目
===================================================== */

function renderCategories(
    items,
    keyword
) {

    categoryList.innerHTML = "";


    /* 数量 */

    resultText.textContent =
        `共 ${items.length} 个`;


    /* 类目总数量同步 */

    if (currentCategory) {

        categoryCount.textContent =
            categoryData[currentCategory]
                .items
                .length;

    }


    /* 无结果 */

    if (items.length === 0) {

        categoryList.classList.add("hidden");

        emptyState.classList.remove("hidden");

        return;

    }


    categoryList.classList.remove("hidden");

    emptyState.classList.add("hidden");


    /* 创建列表 */

    items.forEach(function (item) {

        const element =
            document.createElement("div");

        element.className =
            "category-item";


        /* 名称 */

        const name =
            document.createElement("div");

        name.className =
            "category-name";

        name.innerHTML =
            highlightText(
                escapeHtml(item.name),
                keyword
            );


        /* 路径 */

        const path =
            document.createElement("div");

        path.className =
            "category-path";

        path.innerHTML =
            formatPath(
                item.path,
                keyword
            );


        element.appendChild(name);

        element.appendChild(path);

        categoryList.appendChild(element);

    });

}


/* =====================================================
   16. 路径格式化

   将：

   一级类目 > 二级类目 > 三级类目

   视觉上拆开。
===================================================== */

function formatPath(
    path,
    keyword
) {

    const parts =
        String(path)
            .split(">");


    return parts
        .map(function (part) {

            const text =
                part.trim();

            return highlightText(
                escapeHtml(text),
                keyword
            );

        })
        .join(
            '<span>›</span>'
        );

}


/* =====================================================
   17. 搜索关键词高亮
===================================================== */

function highlightText(
    text,
    keyword
) {

    if (!keyword) {
        return text;
    }


    const escapedKeyword =
        escapeRegExp(
            keyword
        );


    const regex =
        new RegExp(
            `(${escapedKeyword})`,
            "gi"
        );


    return text.replace(
        regex,
        '<mark class="highlight">$1</mark>'
    );

}


/* =====================================================
   18. HTML 安全处理
===================================================== */

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   19. 正则安全处理
===================================================== */

function escapeRegExp(text) {

    return String(text)
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

}
