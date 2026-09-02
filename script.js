/* =====================================================
   服装开发参考站
   分类页面 + 搜索功能
===================================================== */


/* =====================================================
   类目数据
   目前全部使用占位符
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
   当前分类
===================================================== */

let currentCategory = null;


/* =====================================================
   页面加载
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    handleRoute();

});


/* =====================================================
   根据网址判断当前页面
===================================================== */

function handleRoute() {

    const categoryKey =
        window.location.hash.replace("#", "").trim();

    if (categoryKey && categoryData[categoryKey]) {

        showCategory(categoryKey);

    } else {

        showHome();

    }

}


/* =====================================================
   首页
===================================================== */

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

    window.scrollTo(0, 0);

}


/* =====================================================
   点击三大类目
===================================================== */

function openCategory(categoryKey) {

    if (!categoryData[categoryKey]) {

        console.error(
            "不存在的分类：",
            categoryKey
        );

        return;

    }

    window.location.hash = categoryKey;

}


/* =====================================================
   显示分类页面
===================================================== */

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

    const clearSearchButton =
        document.getElementById("clearSearch");


    /* 隐藏首页 */

    if (homeView) {
        homeView.classList.add("hidden");
    }


    /* 显示分类页 */

    if (categoryView) {
        categoryView.classList.remove("hidden");
    }


    /* 标题 */

    if (categoryTitle) {

        categoryTitle.textContent =
            data.title;

    }


    /* 英文 */

    if (categorySubtitle) {

        categorySubtitle.textContent =
            data.subtitle;

    }


    /* 总数量 */

    if (categoryCount) {

        categoryCount.textContent =
            data.items.length;

    }


    /* 清空搜索 */

    if (categorySearch) {

        categorySearch.value = "";

    }


    if (clearSearchButton) {

        clearSearchButton.classList.add("hidden");

    }


    /* 渲染 */

    renderCategories(
        data.items,
        ""
    );


    window.scrollTo(0, 0);

}


/* =====================================================
   返回首页
===================================================== */

function goHome() {

    currentCategory = null;

    history.pushState(
        null,
        "",
        window.location.pathname +
        window.location.search
    );

    showHome();

}


/* =====================================================
   监听网址变化
===================================================== */

window.addEventListener(
    "hashchange",
    handleRoute
);


window.addEventListener(
    "popstate",
    handleRoute
);


/* =====================================================
   搜索类目
===================================================== */

function searchCategories() {

    if (!currentCategory) {
        return;
    }


    const data =
        categoryData[currentCategory];


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


    /* 控制清除按钮 */

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


    /* 没有关键词 */

    if (!keyword) {

        renderCategories(
            data.items,
            ""
        );

        return;

    }


    const searchKeyword =
        normalizeText(keyword);


    /* 模糊搜索 */

    const results =
        data.items.filter(function (item) {

            const text =
                normalizeText(
                    item.name +
                    " " +
                    item.path
                );

            return text.includes(
                searchKeyword
            );

        });


    renderCategories(
        results,
        keyword
    );

}


/* =====================================================
   清除搜索
===================================================== */

function clearSearch() {

    const input =
        document.getElementById(
            "categorySearch"
        );


    if (input) {

        input.value = "";

        input.focus();

    }


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (clearButton) {

        clearButton.classList.add(
            "hidden"
        );

    }


    if (!currentCategory) {
        return;
    }


    renderCategories(
        categoryData[currentCategory].items,
        ""
    );

}


/* =====================================================
   快速搜索
===================================================== */

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


/* =====================================================
   文本标准化
===================================================== */

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim();

}


/* =====================================================
   渲染类目
===================================================== */

function renderCategories(
    items,
    keyword
) {

    const list =
        document.getElementById(
            "categoryList"
        );


    const empty =
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


    list.innerHTML = "";


    /* 结果数量 */

    if (resultText) {

        resultText.textContent =
            `共 ${items.length} 个`;

    }


    /* 没有结果 */

    if (items.length === 0) {

        list.classList.add("hidden");

        if (empty) {
            empty.classList.remove("hidden");
        }

        return;

    }


    /* 有结果 */

    list.classList.remove("hidden");

    if (empty) {
        empty.classList.add("hidden");
    }


    /* 创建类目 */

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


/* =====================================================
   格式化路径
===================================================== */

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
            "<span>›</span>"
        );

}


/* =====================================================
   搜索关键词高亮
===================================================== */

function highlightText(
    text,
    keyword
) {

    if (!keyword) {
        return text;
    }


    const safeKeyword =
        escapeRegExp(keyword);


    const regex =
        new RegExp(
            "(" + safeKeyword + ")",
            "gi"
        );


    return text.replace(
        regex,
        '<mark class="highlight">$1</mark>'
    );

}


/* =====================================================
   防止 HTML 注入
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
   正则特殊字符处理
===================================================== */

function escapeRegExp(text) {

    return String(text)
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

}
