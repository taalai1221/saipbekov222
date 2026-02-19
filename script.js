// ❤️ Falling hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 6000);
  }, 400);
  
  // 🌼 Small flowers
  setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "small-flower";
    flower.textContent = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.bottom = "0px";
    document.body.appendChild(flower);
  
    setTimeout(() => flower.remove(), 4000);
  }, 700);