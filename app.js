let roughSvg = rough.svg(document.getElementById("svg"));

const svg = document.getElementById("svg");

var check = [];

var globalY = 350;
var globalX = 985;

const test = roughSvg.rectangle(globalX, globalY, 100, 100, {
  fill: "rgb(255, 0, 200, 0.2)",
  fillStyle: "solid",
});
svg.appendChild(test);
check.push(test);
const up = document.querySelector("#up");
up.addEventListener("click", () => {
  console.log("add");
  upBlock(100, globalY);
});

const down = document.querySelector("#down");
down.addEventListener("click", () => {
  console.log("add");
  downBlock(100, globalY);
});
const left = document.querySelector("#left");
left.addEventListener("click", () => {
  console.log("add");
  leftBlock(100, globalY);
});

const right = document.querySelector("#right");
right.addEventListener("click", () => {
  console.log("add");
  rightBlock(100, globalY);
});

function upBlock(x, y) {
  if (check.some((list) => list.x == globalX && list.x == globalY)) {
  } else {
    const test = roughSvg.rectangle(globalX, globalY - 130, 100, 100, {
      fill: "rgb(255, 0, 200, 0.2)",
      fillStyle: "solid",
    });

    test.addEventListener("click", () => {
      console.log("click");
    });
    svg.appendChild(test);
    const line = roughSvg.line(
      globalX + 50,
      globalY + 100 - 130,
      globalX + 50,
      globalY + 100 + 30 - 130
    );
    svg.appendChild(line);

    check.push({ x: globalX, y: globalY });

    globalY = globalY - 130;
  }
}

function downBlock(x, y) {
  if (check.some((list) => list.x == globalX && list.x == globalY)) {
  } else {
    const test = roughSvg.rectangle(globalX, globalY + 130, 100, 100, {
      fill: "rgb(255, 0, 200, 0.2)",
      fillStyle: "solid",
    });
    test.addEventListener("click", () => {
      console.log("click");
    });
    svg.appendChild(test);
    const line = roughSvg.line(
      globalX + 50,
      globalY + 100,
      globalX + 50,
      globalY + 100 + 30
    );
    svg.appendChild(line);
    check.push({ x: globalX, y: globalY });
    globalY = globalY + 130;
  }
}
function leftBlock(x, y) {
  if (check.some((list) => list.x == globalX && list.x == globalY)) {
  } else {
    const test = roughSvg.rectangle(globalX - 130, globalY, 100, 100, {
      fill: "rgb(255, 0, 200, 0.2)",
      fillStyle: "solid",
    });
    test.addEventListener("click", () => {
      console.log("click");
    });
    svg.appendChild(test);
    const line = roughSvg.line(
      globalX - 30,
      globalY + 50,
      globalX,
      globalY + 50
    );
    svg.appendChild(line);
    check.push({ x: globalX, y: globalY });
    globalX = globalX - 130;
  }
}

function rightBlock(x, y) {
  if (check.some((list) => list.x == globalX && list.x == globalY)) {
  } else {
    const test = roughSvg.rectangle(globalX + 130, globalY, 100, 100, {
      fill: "rgb(255, 0, 200, 0.2)",
      fillStyle: "solid",
    });
    test.addEventListener("click", () => {
      console.log("click");
    });
    svg.appendChild(test);
    const line = roughSvg.line(
      globalX + 100,
      globalY + 50,
      globalX + 100 + 30,
      globalY + 50
    );
    svg.appendChild(line);
    check.push({ x: globalX, y: globalY });
    globalX = globalX + 130;
  }
}
