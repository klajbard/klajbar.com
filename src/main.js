import "./components/abstract-base/abstract-base";
import "./components/app-footer/app-footer";
import "./components/app-more/app-more";
import "./components/app-title/app-title";
import "./components/more-button/more-button";

function handleClick() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

const style =
  "color: #fff;background-color: #0a0;padding: 3px 6px;border-radius: 2px;font-weight:bold;font-size: 16px";
console.log("%cGoogle free webpage", style);

document.querySelector("more-button").addEventListener("click", handleClick);
