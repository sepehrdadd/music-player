const Menu = document.querySelector(".menu");
const Header = document.querySelector(".main");
const Next = document.querySelector(".next");
const Back = document.querySelector(".backDetail");
const Search = document.querySelector(".search");
const seeMore = document.querySelector(".seemore");
const backPart2 = document.querySelector(".back-part2");

Search.addEventListener("click", () => {
   Next.classList.toggle("on");
   Header.classList.toggle("off");
   Search.classList.toggle("active");
   // document.getElementById("idMmenu").disabled = true;
   Menu.classList.toggle("menudisable");
});

Menu.addEventListener("click", () => {
   Header.classList.toggle("off");
   Back.classList.toggle("on");
   Menu.classList.toggle("active");
   Search.classList.toggle("searchdisable");
});
seeMore.addEventListener("click", () => {
   backPart2.style.display = "block";
   seeMore.style.display = "none";
});
