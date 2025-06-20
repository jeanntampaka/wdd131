const products = [
  { id: "p1", name: "Smartphone X100" },
  { id: "p2", name: "Laptop Pro 15" },
  { id: "p3", name: "Wireless Earbuds Z" },
  { id: "p4", name: "Smartwatch Alpha" }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");
  products.forEach(prod => {
    const opt = document.createElement("option");
    opt.value = prod.id;
    opt.textContent = prod.name;
    select.append(opt);
  });
});
