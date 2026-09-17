const referenceCategories = [
  ["标码背心上衣", "标码男装", "vest"], ["男士标码球类上衣", "标码男装", "sport"], ["休闲运动类标码套装", "标码男装", "set"],
  ["定制球服-长袖T恤", "标码男装", "sport"], ["定制球服-短袖T恤", "标码男装", "sport"], ["定制球服-背心", "标码男装", "vest"],
  ["定制球服-长袖T恤（橄榄球）", "标码男装", "sport"], ["定制球服-衬衫", "标码男装", "shirt"], ["篮球运动类标码套装", "标码男装", "set"],
  ["足球运动类标码套装", "标码男装", "set"], ["专业运动类短裤-氨纶含8%以上", "标码男装", "sport"], ["专业运动类上衣-氨纶含8%以上", "标码男装", "sport"],
  ["专业运动类套装-氨纶含8%以上", "标码男装", "set"], ["专业运动类长裤-氨纶含8%以上", "标码男装", "sport"], ["大码背心-秋冬", "大码男装", "vest"],
  ["大码背心上衣", "大码男装", "vest"], ["大码男士沙滩裤", "大码男装", "sport"], ["大码男士泳裤", "大码男装", "sport"],
  ["大码男装单马甲", "大码男装", "vest"], ["大码男装休闲衬衫", "大码男装", "shirt"], ["大码男士亨利衫", "大码男装", "shirt"],
  ["大码男士运动服系扣衬衫", "大码男装", "shirt"], ["大码男士运动上装和下装套装", "大码男装", "set"], ["大码男士休闲套装", "大码男装", "set"],
  ["大码男士运动套装", "大码男装", "set"], ["男士牛仔衬衣", "牛仔类", "denim"], ["男装牛仔裤", "牛仔类", "denim"],
  ["男士牛仔短裤", "牛仔类", "denim"], ["孕妇T恤", "孕妇装", "shirt"], ["孕妇连衣裙", "孕妇装", "dress"]
].map(([name, audience, kind]) => ({ name, audience, kind }));

const referenceInput = document.querySelector("#reference-search");
const referenceClear = document.querySelector("#reference-clear");
const referenceGrid = document.querySelector("#reference-grid");
const referenceEmpty = document.querySelector("#reference-empty");
const referenceTitle = document.querySelector("#reference-title");
const colors = ["#f2e5d2", "#e6e4f2", "#dae7ea", "#f1ded4", "#e5e4ce"];
const garmentColors = ["#ed5e22", "#40598c", "#8a6251", "#2e6573", "#4b5a92"];

function referenceNormalize(value) { return String(value).toLowerCase().replace(/\s/g, ""); }
function styleFor(kind, index) {
  const shape = kind === "dress"
    ? "polygon(29% 0,42% 0,50% 9%,58% 0,71% 0,88% 23%,70% 44%,90% 100%,10% 100%,30% 44%,12% 23%)"
    : kind === "vest" ? "polygon(24% 0,42% 0,50% 11%,58% 0,76% 0,100% 17%,84% 100%,16% 100%,0 17%)"
    : kind === "set" ? "polygon(24% 0,40% 0,50% 9%,60% 0,76% 0,99% 21%,80% 40%,70% 70%,98% 100%,55% 100%,50% 77%,45% 100%,2% 100%,30% 70%,20% 40%,1% 21%)"
    : "polygon(25% 0,39% 0,50% 9%,61% 0,75% 0,99% 21%,81% 38%,75% 100%,25% 100%,19% 38%,1% 21%)";
  return `--ref-bg:${colors[index % colors.length]};--ref-garment:${garmentColors[index % garmentColors.length]};--ref-shape:${shape}`;
}
function renderReferences() {
  const query = referenceInput.value.trim();
  referenceGrid.innerHTML = "";
  if (!query) {
    referenceTitle.textContent = "等待搜索";
    referenceEmpty.hidden = false;
    return;
  }
  const matches = exactCategory
    ? referenceCategories.filter((item) => item.name === exactCategory)
    : referenceCategories.filter((item) => referenceNormalize(`${item.name}${item.audience}`).includes(referenceNormalize(query)));
  referenceTitle.textContent = matches.length ? `找到 ${matches.length} 个匹配类目` : "没有匹配类目";
  referenceEmpty.hidden = Boolean(matches.length);
  matches.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "reference-card";
    card.innerHTML = `<div class="reference-art" style="${styleFor(item.kind, index)}"><span></span><i></i></div><div class="reference-meta"><p>${item.audience}</p><h3>${item.name}</h3><span>基础版型 · 可延展 SKC</span></div>`;
    referenceGrid.appendChild(card);
  });
}

const preset = new URLSearchParams(window.location.search).get("category");
let exactCategory = preset || "";
referenceInput.addEventListener("input", () => { exactCategory = ""; renderReferences(); });
referenceClear.addEventListener("click", () => { exactCategory = ""; referenceInput.value = ""; referenceInput.focus(); renderReferences(); });
if (preset) referenceInput.value = preset;
renderReferences();
