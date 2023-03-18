const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  let item = input.value;
  input.value = "";

  const litem = document.createElement("li");
  const listspan = document.createElement("span");
  const listbutton = document.createElement("button");

  litem.appendChild(listspan);
  listspan.textContent = item;
  litem.appendChild(listbutton);
  listbutton.textContent = "Eliminar";

  ul.appendChild(litem);

  listbutton.addEventListener("click", () => {
    ul.removeChild(litem);
  });
  input.focus();
});
