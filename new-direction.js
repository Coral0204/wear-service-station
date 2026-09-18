(() => {
  const storageKey = "wear-service-station-new-directions-v1";
  const maxImages = 4;
  const maxStorageBytes = 4_500_000;
  const openButton = document.querySelector("#new-direction-open");
  const entry = document.querySelector("#new-direction-entry");
  const cancelButton = document.querySelector("#new-direction-cancel");
  const form = document.querySelector("#new-direction-form");
  const imageInput = document.querySelector("#new-direction-images-input");
  const imageHelp = document.querySelector("#new-direction-image-help");
  const recordsContainer = document.querySelector("#new-direction-records");
  const placeholder = document.querySelector("#new-direction-placeholder");

  if (!openButton || !entry || !cancelButton || !form || !imageInput || !imageHelp || !recordsContainer || !placeholder) return;

  const readRecords = () => {
    try {
      const records = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(records) ? records : [];
    } catch {
      return [];
    }
  };

  const saveRecords = (records) => localStorage.setItem(storageKey, JSON.stringify(records));
  const storageSize = (records) => new Blob([JSON.stringify(records)]).size;

  const compressImage = (file) => new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("请选择图片文件"));
      return;
    }
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      const largestSide = Math.max(image.width, image.height);
      const scale = Math.min(1, 1280 / largestSide);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL("image/jpeg", 0.8));
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("图片读取失败，请换一张图片"));
    };
    image.src = objectUrl;
  });

  const setEntryVisible = (visible) => {
    entry.hidden = !visible;
    openButton.setAttribute("aria-expanded", String(visible));
    if (visible) entry.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const createText = (tag, className, value) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value;
    return element;
  };

  const renderRecords = () => {
    const records = readRecords();
    recordsContainer.replaceChildren();
    recordsContainer.hidden = records.length === 0;
    placeholder.hidden = records.length > 0;
    records.forEach((record) => {
      const card = document.createElement("article");
      card.className = "local-direction-card";
      const heading = document.createElement("div");
      heading.className = "local-direction-card-heading";
      const headingText = document.createElement("div");
      headingText.append(createText("span", "material-status", "本机资料"));
      headingText.append(createText("h3", "", record.title || "未命名新品"));
      const remove = createText("button", "local-direction-remove", "删除");
      remove.type = "button";
      remove.addEventListener("click", () => {
        const next = readRecords().filter((item) => item.id !== record.id);
        saveRecords(next);
        renderRecords();
      });
      heading.append(headingText, remove);
      card.append(heading);

      if (record.images?.length) {
        const images = document.createElement("div");
        images.className = "local-direction-images";
        record.images.forEach((source, index) => {
          const image = document.createElement("img");
          image.src = source;
          image.alt = `${record.title || "新品"} 图片 ${index + 1}`;
          images.append(image);
        });
        card.append(images);
      }

      const footer = document.createElement("div");
      footer.className = "local-direction-card-footer";
      if (record.path) footer.append(createText("p", "material-path", record.path));
      if (record.tags?.length) {
        const tags = document.createElement("div");
        tags.className = "material-tags";
        record.tags.forEach((tag) => tags.append(createText("span", "", tag)));
        footer.append(tags);
      }
      if (record.note) footer.append(createText("p", "material-note", record.note));
      card.append(footer);
      recordsContainer.append(card);
    });
  };

  openButton.addEventListener("click", () => setEntryVisible(entry.hidden));
  cancelButton.addEventListener("click", () => setEntryVisible(false));

  imageInput.addEventListener("change", () => {
    const count = imageInput.files.length;
    if (count > maxImages) {
      imageInput.value = "";
      imageHelp.textContent = "一次最多选择 4 张图片，请重新选择。";
      return;
    }
    imageHelp.textContent = count ? `已选择 ${count} 张图片，保存时会自动压缩。` : "图片会压缩后保存在当前浏览器。";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fields = new FormData(form);
    const files = [...imageInput.files];
    if (files.length > maxImages) return;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "正在保存…";
    try {
      const images = await Promise.all(files.map(compressImage));
      const tags = String(fields.get("tags") || "").split(/[，,]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 8);
      const record = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: String(fields.get("title") || "").trim(),
        path: String(fields.get("path") || "").trim(),
        tags,
        note: String(fields.get("note") || "").trim(),
        images
      };
      const next = [record, ...readRecords()];
      if (storageSize(next) > maxStorageBytes) throw new Error("图片总大小较大，请减少图片数量或换更小的图片后再试。");
      saveRecords(next);
      form.reset();
      imageHelp.textContent = "已保存到当前浏览器。";
      setEntryVisible(false);
      renderRecords();
    } catch (error) {
      imageHelp.textContent = error.message || "保存失败，请重试。";
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = "保存新品资料 <span>↓</span>";
    }
  });

  renderRecords();
})();
