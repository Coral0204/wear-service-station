const sections=[["📋 类目","category"],["🖼️ 视觉","visual"],["📝 标题","title"],["🔥 市场","market"],["📚 企划","planning"],["🔥 热销","hot"],["📢 资讯","news"]];
document.getElementById("quick").innerHTML=sections.map(x=>`<a href="#${x[1]}">${x[0]}</a>`).join("");
const cats=[["T恤","基础款 / 大码 / 撞色 / 印花"],["Polo","翻领 / 针织 / 休闲 / 高辨识度配色"],["衬衫","休闲 / 亨利衫 / 宽松 / 轻薄面料"],["外套夹克","夹克 / 工装 / 棒球 / 轻户外"],["裤装","休闲裤 / 运动裤 / 宽腿 / 套装"],["套装","上衣+下装 / 面料统一 / 成套开发"]];
document.getElementById("categoryGrid").innerHTML=cats.map(x=>`<article class="category"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
function makeTitle(){let c=cat.value.split(" / ")[0],p=pattern.value.split(" / ")[0],f=fit.value.split(" / ")[0],s=scene.value.split(" / ")[0];document.getElementById("titleResult").innerHTML=`<b>中文：</b>男士${f} ${p} ${c}，适合${s}场景<br><br><b>English：</b>Men's ${f} ${p} ${c}, perfect for ${s} occasions`;}
function aiPrompt(){document.getElementById("toast").textContent="提示词生成器已启动：后续可接入你的图片风格、背景、模特、构图字段。";document.getElementById("toast").style.display="block";setTimeout(()=>toast.style.display="none",2600)}
function openTip(t){document.getElementById("toast").textContent=t;document.getElementById("toast").style.display="block";setTimeout(()=>toast.style.display="none",3500)}
document.getElementById("menu").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});