import webpackLogo from './images/pokemon.png';
import "./style/style.css";
import "regenerator-runtime";
import "./script/component/navbar.js";
import "./script/component/footer.js";
import main from "./script/main.js";

document.querySelector('#logo').src = webpackLogo;
document.addEventListener("DOMContentLoaded", main);