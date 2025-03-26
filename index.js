let state = "hidden";
let showlist = document.getElementById("showlist");
let list = document.getElementById("navlist");
let nav = document.getElementById("navbar");
list.style.visibility = "hidden";
list.style.top=nav.offsetHeight+"px";
showlist.addEventListener("click", () => {
  if(state=="hidden"){
    list.style.visibility = "visible";
    state = "visible";
  }else{
    list.style.visibility = "hidden";
    state = "hidden";
  }
});

let inners = document.getElementsByClassName("inner-navlist");
for(let item of inners){
  item.addEventListener("click", () => {
    list.style.visibility = "hidden";
    state = "hidden";
  });
}
