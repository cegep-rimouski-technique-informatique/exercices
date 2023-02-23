const spadeTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const spadeTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const spade1 = document.querySelector("#spade1");
const spade2 = document.querySelector("#spade2");
const spade3 = document.querySelector("#spade3");

spade1.animate(spadeTumbling, spadeTiming);

// codez ici

