const categories = [
  { name: "标码背心上衣", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士 T 恤和背心 › 背心上衣", kind: "vest", color: "#ed5e22", silhouettes: ["基础圆领背心", "宽肩运动背心", "落肩针织背心"] },
  { name: "男士标码球类上衣", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 体育专用服装 › 英式橄榄球服 › 男士英式橄榄球服 › 男士英式橄榄球上衣", kind: "sport", color: "#5b5a8c", silhouettes: ["橄榄球训练上衣", "拼色比赛上衣", "宽松热身上衣"] },
  { name: "休闲运动类标码套装", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士休闲运动服 › 男士休闲运动套装 › 男士运动上装和下装套装", kind: "set", color: "#d46d2d", silhouettes: ["短袖短裤运动套装", "立领拉链运动套装", "圆领长裤套装"] },
  { name: "定制球服-长袖T恤", audience: "标码男装", path: "运动与户外用品 › 运动户外服饰 › 男士运动户外服饰 › 男士运动休闲衬衫和 Polo 衫 › 男士运动休闲球衣 › 曲棍球球衣", kind: "sport", color: "#314d7d", silhouettes: ["曲棍球长袖球衣", "宽松比赛长袖 T 恤", "撞色训练长袖 T 恤"] },
  { name: "定制球服-短袖T恤", audience: "标码男装", path: "运动与户外用品 › 运动户外服饰 › 男士运动户外服饰 › 男士运动休闲衬衫和 Polo 衫 › 男士运动休闲球衣 › 排球球衣", kind: "sport", color: "#e8582b", silhouettes: ["排球短袖球衣", "速干比赛短袖 T 恤", "撞色训练短袖 T 恤"] },
  { name: "定制球服-背心", audience: "标码男装", path: "运动与户外用品 › 运动户外服饰 › 男士运动户外服饰 › 男士运动休闲衬衫和 Polo 衫 › 男士运动休闲球衣 › 篮球球衣", kind: "vest", color: "#b13e31", silhouettes: ["篮球比赛背心", "双面训练背心", "宽松定制球衣"] },
  { name: "定制球服-长袖T恤", audience: "标码男装", path: "运动与户外用品 › 运动户外服饰 › 男士运动户外服饰 › 男士运动休闲衬衫和 Polo 衫 › 男士运动休闲球衣 › 橄榄球球衣", kind: "sport", color: "#594b9f", silhouettes: ["橄榄球长袖球衣", "条纹比赛长袖 T 恤", "加固肩部训练上衣"] },
  { name: "定制球服-衬衫", audience: "标码男装", path: "运动与户外用品 › 运动服装和器材 › 团队运动 › 棒球用品 › 服装 › 男士棒球服装 › 男士棒球球衣", kind: "shirt", color: "#6e6875", silhouettes: ["棒球纽扣球衣", "撞色棒球衬衫", "宽松团队球衣"] },
  { name: "篮球运动类标码套装", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 体育专用服装 › 篮球服 › 男士篮球服 › 套装", kind: "set", color: "#724d9b", silhouettes: ["篮球背心短裤套装", "宽松训练套装", "热身运动套装"] },
  { name: "足球运动类标码套装", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 体育专用服装 › 足球服 › 男士足球服 › 男士足球运动服、外套和裤子", kind: "set", color: "#28705d", silhouettes: ["足球短袖短裤套装", "长袖训练套装", "拉链热身套装"] },
  { name: "专业运动类短裤-氨纶含8%以上", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士休闲运动服 › 男士打底和压缩单品 › 男士运动短裤", kind: "sport", color: "#3d5669", silhouettes: ["高弹训练短裤", "内衬压缩运动短裤", "分割线跑步短裤"] },
  { name: "专业运动类上衣-氨纶含8%以上", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士休闲运动服 › 男士打底和压缩单品 › 男士运动上衣", kind: "sport", color: "#2b506f", silhouettes: ["高弹训练上衣", "长袖压缩运动上衣", "拼接速干上衣"] },
  { name: "专业运动类套装-氨纶含8%以上", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士休闲运动服 › 男士贴身运动衣 › 男士贴身套装", kind: "set", color: "#293f6e", silhouettes: ["贴身训练套装", "压缩上衣长裤套装", "高弹运动套装"] },
  { name: "专业运动类长裤-氨纶含8%以上", audience: "标码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男士休闲运动服 › 男士打底和压缩单品 › 男士运动长裤", kind: "sport", color: "#252d3e", silhouettes: ["高弹束脚运动长裤", "压缩训练长裤", "拼接跑步长裤"] },
  { name: "大码背心-秋冬", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士毛衣 › 大码男装针织背心", kind: "vest", color: "#6b5547", silhouettes: ["V 领针织背心", "提花针织背心", "宽松保暖背心"] },
  { name: "大码背心上衣", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士 T 恤和背心 › 大码背心上衣", kind: "vest", color: "#3d5669", silhouettes: ["宽松基础背心", "加长下摆背心", "大码印花背心"] },
  { name: "大码男士沙滩裤", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士时尚泳衣 › 大码男士沙滩裤", kind: "sport", color: "#308098", silhouettes: ["抽绳沙滩短裤", "印花宽松沙滩裤", "速干运动沙滩裤"] },
  { name: "大码男士泳裤", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士时尚泳衣 › 大码男士泳裤", kind: "sport", color: "#3e6a8f", silhouettes: ["宽松泳裤", "拼色速干泳裤", "抽绳运动泳裤"] },
  { name: "大码男装单马甲", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士外套 › 大码男装单马甲", kind: "vest", color: "#605b55", silhouettes: ["工装单马甲", "轻量绗缝马甲", "多口袋马甲"] },
  { name: "大码男装休闲衬衫", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男装上衣、T恤、衬衫 › 大码男装休闲衬衫", kind: "shirt", color: "#7b6a59", silhouettes: ["落肩宽松衬衫", "直身工装衬衫", "舒适弹力衬衫"] },
  { name: "大码男士亨利衫", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男装上衣、T恤、衬衫 › 大码男士亨利衫", kind: "shirt", color: "#806251", silhouettes: ["基础亨利衫", "长袖针织亨利衫", "拼接领亨利衫"] },
  { name: "大码男士运动服系扣衬衫", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士休闲运动服 › 大码男士休闲运动衫、T恤 › 大码男士运动服系扣衬衫", kind: "shirt", color: "#5c6e78", silhouettes: ["系扣运动衬衫", "宽松棒球领衬衫", "轻量训练衬衫"] },
  { name: "大码男士运动上装和下装套装", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士休闲运动服 › 大码男士休闲运动套装 › 大码男士运动上装和下装套装", kind: "set", color: "#51677f", silhouettes: ["圆领运动套装", "拉链上衣长裤套装", "短袖短裤运动套装"] },
  { name: "大码男士休闲套装", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士休闲运动服 › 大码男士休闲运动套装 › 大码男士休闲套装", kind: "set", color: "#9a5a3b", silhouettes: ["宽松短袖短裤套装", "立领针织套装", "轻量衬衫套装"] },
  { name: "大码男士运动套装", audience: "大码男装", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 大码男装 › 大码男士休闲运动服 › 大码男士休闲运动套装 › 大码男士径赛服", kind: "set", color: "#485f73", silhouettes: ["径赛训练套装", "连帽跑步套装", "轻量运动套装"] },
  { name: "牛仔", audience: "牛仔类", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男装上衣、T恤、衬衫 › 男士牛仔衬衣", kind: "denim", color: "#344a75", silhouettes: ["轻薄西部牛仔衬衣", "短款箱型牛仔衬衣", "双口袋牛仔衬衣"] },
  { name: "牛仔", audience: "牛仔类", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男装牛仔裤", kind: "denim", color: "#31456d", silhouettes: ["直筒水洗牛仔裤", "宽松工装牛仔裤", "弹力修身牛仔裤"] },
  { name: "牛仔", audience: "牛仔类", path: "服装、鞋靴和珠宝饰品 › 男士时尚 › 男装 › 男装短裤 › 男士牛仔短裤", kind: "denim", color: "#416082", silhouettes: ["五分牛仔短裤", "宽松水洗牛仔短裤", "破洞工装牛仔短裤"] },
  { name: "孕妇T恤", audience: "孕妇装", path: "服装、鞋靴和珠宝饰品 › 女士时尚 › 女士商店 › 孕妇装 › 孕妇T恤、背心 › 孕妇T恤", kind: "shirt", color: "#b58152", silhouettes: ["基础托腹孕妇T恤", "侧褶皱孕妇T恤", "哺乳开口孕妇T恤"] },
  { name: "孕妇连衣裙", audience: "孕妇装", path: "服装、鞋靴和珠宝饰品 › 女士时尚 › 女士商店 › 孕妇装 › 孕妇连衣裙", kind: "dress", color: "#af6d72", silhouettes: ["高腰针织连衣裙", "A 字宽松连衣裙", "通勤衬衫连衣裙"] }
];

const tableSearch = document.querySelector("#category-search");
const tableClearSearch = document.querySelector("#clear-search");
const tableCategoryList = document.querySelector("#category-list");
const tableEmptyState = document.querySelector("#empty-state");
const tableStatus = document.querySelector("#search-status");
const tableTemplate = document.querySelector("#category-template");

function tableNormalize(value) {
  return String(value).toLowerCase().replace(/\s/g, "");
}

function renderCategoryTable() {
  const query = tableNormalize(tableSearch.value);
  const items = categories.filter((item) => tableNormalize(`${item.name}${item.path}`).includes(query));
  tableCategoryList.innerHTML = "";
  tableEmptyState.hidden = Boolean(items.length);
  tableStatus.textContent = query ? `找到 ${items.length} 个相符类目` : `共 ${categories.length} 个对接类目`;
  items.forEach((item) => {
    const row = tableTemplate.content.cloneNode(true);
    row.querySelector(".category-name").textContent = item.name;
    row.querySelector(".category-path").textContent = item.path;
    tableCategoryList.appendChild(row);
  });
}

tableSearch.addEventListener("input", renderCategoryTable);
tableClearSearch.addEventListener("click", () => {
  tableSearch.value = "";
  tableSearch.focus();
  renderCategoryTable();
});

const compactNavToggle = document.querySelector(".nav-toggle");
const compactNav = document.querySelector(".main-nav");
compactNavToggle.addEventListener("click", () => {
  const opened = compactNav.classList.toggle("is-open");
  compactNavToggle.setAttribute("aria-expanded", String(opened));
});
compactNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  compactNav.classList.remove("is-open");
  compactNavToggle.setAttribute("aria-expanded", "false");
}));

renderCategoryTable();

if (false) {
const palette = [
  ["#f2e5d2", "#cf5729", "#2f587a"],
  ["#e8e3d8", "#516f91", "#f0a83e"],
  ["#e9dcca", "#aa714b", "#3d4569"],
  ["#e8e5f2", "#634891", "#ef5d2a"],
  ["#e8e8d8", "#657642", "#c65e31"]
];

const search = document.querySelector("#category-search");
const clearSearch = document.querySelector("#clear-search");
const categoryBrowser = document.querySelector("#category-browser");
const categoryList = document.querySelector("#category-list");
const emptyState = document.querySelector("#empty-state");
const status = document.querySelector("#search-status");
const reset = document.querySelector("#filter-reset");
const browserTitle = document.querySelector("#browser-title");
const categoryTemplate = document.querySelector("#category-template");
const silhouetteTemplate = document.querySelector("#silhouette-template");
const silhouetteSection = document.querySelector("#silhouettes");
const silhouetteGrid = document.querySelector("#silhouette-grid");
const silhouetteNote = document.querySelector("#silhouette-note");
let audienceFilter = "";

function normalize(value) {
  return value.toLowerCase().replace(/\s/g, "");
}

function matchedCategories() {
  const query = normalize(search.value);
  return categories.filter((item) => {
    const haystack = normalize(`${item.name}${item.audience}${item.path}${item.kind}`);
    return (!audienceFilter || item.audience === audienceFilter) && (!query || haystack.includes(query));
  });
}

function renderCategories() {
  const items = matchedCategories();
  const query = search.value.trim();
  const shouldShow = Boolean(query || audienceFilter);
  categoryList.innerHTML = "";
  categoryBrowser.hidden = !shouldShow;
  emptyState.hidden = !shouldShow || Boolean(items.length);
  reset.hidden = !shouldShow;
  reset.textContent = "收起类目";
  if (query) {
    browserTitle.textContent = `搜索到 ${items.length} 个对接类目`;
    status.textContent = items.length ? `已匹配 ${items.length} 个类目，并显示对应版型预览` : "没有匹配类目，请换一个关键词";
  } else if (audienceFilter) {
    browserTitle.textContent = `${audienceFilter} · 对接类目`;
    status.textContent = `正在查看 ${audienceFilter} 的 ${items.length} 个对接类目`;
  } else {
    status.textContent = "输入关键词后显示相符类目与版型预览";
  }
  items.forEach((item) => {
    const node = categoryTemplate.content.cloneNode(true);
    node.querySelector(".category-icon").style.setProperty("--icon", item.color);
    node.querySelector(".category-audience").textContent = item.audience;
    node.querySelector("h4").textContent = item.name;
    node.querySelector(".category-path").textContent = item.path;
    node.querySelector(".view-silhouettes").addEventListener("click", () => {
      window.location.href = `references.html?category=${encodeURIComponent(item.name)}`;
    });
    categoryList.appendChild(node);
  });
}

function artStyles(index, color, kind) {
  const colors = palette[index % palette.length];
  const base = kind === "denim" ? "#344a75" : color;
  const shape = kind === "dress"
    ? "polygon(29% 0, 42% 0, 50% 9%, 58% 0, 71% 0, 88% 23%, 70% 44%, 90% 100%, 10% 100%, 30% 44%, 12% 23%)"
    : kind === "vest" ? "polygon(24% 0, 42% 0, 50% 11%, 58% 0, 76% 0, 100% 17%, 84% 100%, 16% 100%, 0 17%)"
    : kind === "set" ? "polygon(24% 0, 40% 0, 50% 9%, 60% 0, 76% 0, 99% 21%, 80% 40%, 70% 70%, 98% 100%, 55% 100%, 50% 77%, 45% 100%, 2% 100%, 30% 70%, 20% 40%, 1% 21%)"
    : kind === "sport" ? "polygon(21% 0, 39% 0, 50% 8%, 61% 0, 79% 0, 100% 25%, 78% 42%, 74% 100%, 26% 100%, 22% 42%, 0 25%)"
    : "polygon(25% 0, 39% 0, 50% 9%, 61% 0, 75% 0, 99% 21%, 81% 38%, 75% 100%, 25% 100%, 19% 38%, 1% 21%)";
  return `--art-bg:${colors[0]};--garment:${base};--detail:${colors[2]};clip-path:${shape}`;
}

function renderSilhouettes(items) {
  silhouetteGrid.innerHTML = "";
  const source = items.slice(0, 3);
  source.forEach((category, categoryIndex) => {
    category.silhouettes.forEach((silhouette, index) => {
      const node = silhouetteTemplate.content.cloneNode(true);
      const art = node.querySelector(".silhouette-art");
      const garment = node.querySelector(".silhouette-garment");
      const indexNumber = String(index + 1).padStart(2, "0");
      art.setAttribute("style", artStyles(categoryIndex + index, category.color, category.kind));
      garment.style.clipPath = getComputedStyle(art).clipPath;
      node.querySelector(".silhouette-meta p").textContent = indexNumber;
      node.querySelector(".silhouette-meta h3").textContent = silhouette;
      node.querySelector(".silhouette-meta span").textContent = category.name;
      silhouetteGrid.appendChild(node);
    });
  });
}

function renderSearchSilhouettes() {
  const query = search.value.trim();
  if (!query) {
    silhouetteSection.hidden = true;
    silhouetteGrid.innerHTML = "";
    return;
  }
  const items = matchedCategories();
  silhouetteSection.hidden = items.length === 0;
  silhouetteNote.textContent = items.length > 3
    ? `已匹配 ${items.length} 个类目，首页展示前 3 个；其余可进入完整版型参考页查看。`
    : `已根据「${query}」展示相符类目的版型参考。`;
  renderSilhouettes(items);
}

function resetFilters() {
  audienceFilter = "";
  search.value = "";
  renderCategories();
  renderSearchSilhouettes();
}

search.addEventListener("input", () => {
  if (search.value.trim()) audienceFilter = "";
  renderCategories();
  renderSearchSilhouettes();
});
clearSearch.addEventListener("click", () => {
  search.value = "";
  search.focus();
  renderCategories();
  renderSearchSilhouettes();
});
reset.addEventListener("click", resetFilters);
document.querySelector(".reset-empty").addEventListener("click", resetFilters);
document.querySelectorAll(".audience-filter").forEach((button) => {
  button.addEventListener("click", () => {
    audienceFilter = button.dataset.audience;
    search.value = "";
    renderCategories();
    renderSearchSilhouettes();
    document.querySelector("#category-list").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
navToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

renderCategories();
renderSearchSilhouettes();
}
