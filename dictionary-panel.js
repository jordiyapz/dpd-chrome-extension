class DictionaryPanel {
  content;
  textNode;

  constructor() {
    const panel = document.createElement("div");
    panel.id = "dict-panel-25445";

    const header = this._createHeader();

    this.textNode = document.createTextNode(
      "Click on a word on the page to see its definition"
    );
    header.appendChild(this.textNode);
    header.style.fontSize = "1.1rem";
    header.style.textAlign = "center";

    this.content = document.createElement("iframe");

    panel.appendChild(header);
    panel.appendChild(this.content);

    document.body.appendChild(panel);
  }

  setText(text) {
    this.textNode.textContent = text;
    this.textNode.display = "block";
  }

  setContent(html) {
    this.textNode.display = "none";
    this.content.srcdoc = html;
  }

  _createHeader() {
    const header = document.createElement("div");
    header.style.padding = "8px";

    const brand = document.createElement("div");
    brand.style.display = "flex";
    brand.style["align-items"] = "center";
    brand.style.borderBottom = "2px solid hsla(0, 0%, 50%, 0.25)";

    const logo = document.createElement("img");
    logo.src = "https://dpdict.net/static/dpd-logo.svg";
    logo.style.verticalAlign = "middle";
    logo.style.height = "30px";
    logo.style.width = "30px";

    const title = document.createElement("h2");
    title.style.margin = "5px";
    title.textContent = "Digital Pāḷi Dictionary";

    brand.appendChild(logo);
    brand.appendChild(title);

    header.appendChild(brand);

    return header;
  }

  destroy() {
    document.getElementById("dict-panel-25445").remove();
  }
}

/**
 * @type {DictionaryPanel | null}
 */
let panel = null;
