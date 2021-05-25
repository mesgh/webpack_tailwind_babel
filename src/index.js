import "./styles/index.css";

const headling = document.createElement('h1');
headling.textContent = 'SSR';
headling.classList.add('m-10');
headling.classList.add('text-center');
headling.classList.add('text-red-800');

const root = document.querySelector('#root');
root.append(headling);