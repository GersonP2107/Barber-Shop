function Menu(e) {
    let list = document.querySelector("ul");
    if (e.getAttribute("name") === "menu") {
      e.setAttribute("name", "close");
      list.classList.add("top-80");
      list.classList.add("opacity-100");
    } else {
      e.setAttribute("name", "menu");
      list.classList.remove("top-80");
      list.classList.remove("opacity-100");
    }
  }
  