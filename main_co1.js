function loadRoom0Scene(container) {
  container.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";
  imageContainer.style.flexDirection = "row";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.style.zIndex = "1";
  image3.onclick = () => loadStartScene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const roomImage0 = document.createElement("img");
  roomImage0.src = "images/room0.gif";
  roomImage0.style.width = "100%";
  roomImage0.style.height = "100%";
  roomImage0.style.zIndex = "0";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.style.zIndex = "1";
  image5.onclick = function () {
    loadRoom1Scene(container);
  };

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  keyimg1.style.zIndex = "1";
  if (key1Found) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0.3";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.opacity = key2Found ? "1" : "0";

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  keyimg3.style.opacity = key3Found ? "1" : "0";

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  keyimg4.style.opacity = key4Found ? "1" : "0";

  const text = document.createElement("h1");
  text.textContent =
    "You are trapped. Find the keys to escape. Collect all four keys to unlock the door. Explore this room and the next to locate the keys.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image4div.appendChild(roomImage0);
  image4div.appendChild(keyimg1);
  image4div.appendChild(text);
  image4div.appendChild(keyimg2);
  image4div.appendChild(keyimg3);
  image4div.appendChild(keyimg4);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image4div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);
}
