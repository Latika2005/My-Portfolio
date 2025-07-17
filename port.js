const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let stars = [];
let shootingStars = [];

function createStars() {
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      speed: Math.random() * 0.05
    });
  }
}

function createShootingStar() {
  shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height / 2,
    length: Math.random() * 80 + 20,
    speed: Math.random() * 10 + 6,
    opacity: 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.alpha += star.speed;
    if (star.alpha <= 0 || star.alpha >= 1) star.speed *= -1;
  });

  // Draw shooting stars
  shootingStars.forEach((shooting, index) => {
    ctx.beginPath();
    ctx.moveTo(shooting.x, shooting.y);
    ctx.lineTo(shooting.x + shooting.length, shooting.y + shooting.length / 2);
    ctx.strokeStyle = `rgba(255,255,255,${shooting.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    shooting.x += shooting.speed;
    shooting.y += shooting.speed / 2;
    shooting.opacity -= 0.02;

    if (shooting.opacity <= 0) shootingStars.splice(index, 1);
  });
}

function animate() {
  drawStars();
  if (Math.random() < 0.01) createShootingStar(); // Random shooting star
  requestAnimationFrame(animate);
}

createStars();
animate();

// Responsive resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  createStars();
});
const special=[
    "Specializing in front-end development",
   "Specializing in back-end development",
   "Specializing in Data Structures & algorithms"

];
let index=0;
const specialel= document.getElementById("typo");
function change(){
    index=(index+1)%special.length;
    specialel.textContent=special[index];
}
setInterval(change,5000);

let submit= document.getElementById("abc");
submit.addEventListener("submit",function(event){
    event.preventDefault();
});


const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
