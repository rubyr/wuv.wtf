const heartSVG = [
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f493.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f495.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f496.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f497.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f498.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f499.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49a.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49b.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49c.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49d.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49e.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f49f.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f5a4.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f90d.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/1f90e.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/2764.svg",
  "https://twemoji.maxcdn.com/v/13.0.1/svg/2763.svg",
];

class HeartStruct {
  x = 0;
  y = 30;
  vy = -10;
  initialRotation = Math.random() * 360;

  constructor(windowWidth) {
    this.x = Math.random() * (windowWidth - 100) + 25;
    this.src = heartSVG[Math.floor(Math.random() * heartSVG.length)];
  }
}

class HeartManager {
  acc = 1;
  constructor() {
    this.hearts = [];
    this.addNewHeart();
  }

  addNewHeart() {
    this.hearts.push(new HeartStruct(window.innerWidth));
  }

  update() {
    this.addNewHeart();

    this.hearts.forEach((heart) => {
      heart.vy += this.acc;
      heart.y += heart.vy;
    });

    this.hearts = this.hearts.filter((heart) => heart.y < window.innerHeight - 40);
  }
}

export default HeartManager;
