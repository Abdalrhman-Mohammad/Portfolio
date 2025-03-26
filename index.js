let state = "hidden";
let showlist = document.getElementById("showlist");
let list = document.getElementById("navlist");
let inners = document.getElementsByClassName("inner-navlist");
let nav = document.getElementById("navbar");
list.style.visibility = "hidden";
list.style.top = nav.offsetHeight + "px";
showlist.addEventListener("click", () => {
  if (state == "hidden") {
    list.style.visibility = "visible";
    list.style.backdropFilter = "blur(5px)";
    for (let item of inners) {
      item.style.width = nav.offsetWidth + "px";
    }
    state = "visible";
  } else {
    list.style.backdropFilter = "blur(0px)";
    for (let item of inners) {
      item.style.width = "0%";
    }
    setTimeout(() => {
      for (let item of inners) {
        item.style.color = "transparent";
      }
    }, 600);

    setTimeout(() => {
      list.style.visibility = "hidden";
      for (let item of inners) {
        item.style.color = "white";
      }
    }, 1000);
    state = "hidden";
  }
});

for (let item of inners) {
  item.addEventListener("click", () => {
    list.style.visibility = "hidden";
    state = "hidden";
  });
}
