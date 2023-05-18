// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
마우스를 우 클릭하면 title이 바뀌어야 합니다.
title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
.css 와 .html 파일은 수정하지 마세요.
모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
모든 조건이 충족되지 못하면 ❌를 받습니다.
*/

const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter() {
    title.innerText = "Mouse is here!";
    title.style.color = colors[0];
  },

  handleMouseLeave() {
    title.innerText = "Mouse is gone!";
    title.style.color = colors[1];
  },

  handleResized() {
    title.innerText = "You just Resized!";
    title.style.color = colors[2];
  },

  handleRightClick() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResized);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
