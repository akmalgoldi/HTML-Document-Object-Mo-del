document.getElementById("container").style.background = "yellow";
document.getElementById("container2").style.background = "yellow";

document.querySelector("a").href = "https://www.google.com";

document.querySelectorAll(".list").forEach((item, index) => {
  item.textContent = `List Baru ${index + 1}`;
  item.style.background = "gray";
  item.style.color = "white";
});
