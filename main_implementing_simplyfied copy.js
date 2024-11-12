window.addEventListener("DOMContentLoaded", main);

let keysFound = [false, false, false, false];

function main() {
  const container = document.getElementById("container");
  keysFound = keysFound.map(
    (_, i) => localStorage.getItem(`key${i + 1}Found`) === "true",
  );
  loadStartScene(container);
}

function loadStartScene(container) {
  container.innerHTML = `
    <h1 class="large green">Welcome to the game</h1>
    <img src="images/playbutton.gif" width="100" height="100" onclick="startGame()">
    <img src="images/skeletonhand.gif" width="100">
    <p class="large green">Submit your soul to play</p>
    <input type="text" placeholder="Enter your name" class="large green">
    <button class="large green" onclick="startGame()">Start Game</button>
  `;
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";
}

function startGame() {
  const input = document.querySelector("input");
  if (input.value.trim() === "") {
    alert("Please enter your name to start the game.");
  } else {
    localStorage.clear();
    keysFound = [false, false, false, false];
    loadRoomScene(0);
  }
}

function loadRoomScene(roomNumber) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const roomImages = [
    "room0.gif",
    "room1.gif",
    "room2.gif",
    "room3.gif",
    "room4.gif",
  ];
  const roomImage = roomImages[roomNumber];

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";

  const leftArrow = document.createElement("img");
  leftArrow.src = "images/leftarrowbutton.gif";
  leftArrow.style.zIndex = "1";
  leftArrow.onclick = () => loadRoomScene(roomNumber - 1);

  const rightArrow = document.createElement("img");
  rightArrow.src = "images/rightarrowbutton.gif";
  rightArrow.style.zIndex = "1";
  rightArrow.onclick = () => loadRoomScene(roomNumber + 1);

  const roomImg = document.createElement("img");
  roomImg.src = `images/${roomImage}`;
  roomImg.style.width = "100%";
  roomImg.style.height = "100%";
  roomImg.style.zIndex = "0";

  const keyImages = keysFound.map((found, i) => {
    const keyImg = document.createElement("img");
    keyImg.src = `images/key${i + 1}.gif`;
    keyImg.style.position = "absolute";
    keyImg.style.opacity = found ? "1" : "0.3";
    keyImg.style.width = found ? "10%" : "3%";
    keyImg.style.height = found ? "10%" : "3%";
    keyImg.style.zIndex = found ? "0" : "1";
    keyImg.onclick = found ? null : () => handleKeyFound(i);
    return keyImg;
  });

  const text = document.createElement("h1");
  text.textContent =
    "You are trapped. Find the keys to escape. Collect all four keys to unlock the door. Explore this room and the next to locate the keys.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  imageContainer.append(roomImg, ...keyImages, text);
  container.append(leftArrow, imageContainer, rightArrow);
}

function handleKeyFound(keyIndex) {
  keysFound[keyIndex] = true;
  localStorage.setItem(`key${keyIndex + 1}Found`, "true");
  loadRoomScene(0);
}

function loadFinalDoor(container) {
  if (keysFound.every(Boolean)) {
    alert(
      "You have found all four keys. Congratulations! You have unlocked the door and escaped the room.",
    );
    localStorage.clear();
    loadFinalRoom(container);
  } else {
    alert(
      "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.",
    );
  }
}

function loadFinalRoom(container) {
  container.innerHTML = `
    <h1 class="large green">Congratulations! You have escaped the room.</h1>
    <img src="images/finaldoor.gif" style="width: 100%; height: 100%;">
  `;
}
