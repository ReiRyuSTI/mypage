let subMenuFlag = false;
const MenuContainer = document.getElementById("menu");
const SubMenuContainer = document.getElementById("submenu");

MenuContainer.addEventListener("click", () => {
  if (subMenuFlag) {
    SubMenuContainer.classList.remove("translate-y-0");
    SubMenuContainer.classList.add("-translate-y-full");
  } else {
    SubMenuContainer.classList.remove("-translate-y-full");
    SubMenuContainer.classList.add("translate-y-0");
  }
  subMenuFlag = !subMenuFlag;
});

const onClickButton = (url) => {
  window.open(url);
};
