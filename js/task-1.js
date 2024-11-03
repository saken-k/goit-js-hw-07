const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const subTitle = item.querySelector("h2").textContent;
  const subElements = item.querySelectorAll("ul li").length;

  console.log(`Category: ${subTitle}`);
  console.log(`Elements: ${subElements}`);
});
