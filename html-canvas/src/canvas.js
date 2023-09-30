const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const numShapes = 15;

class Shape {
    constructor(x, y, type, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
            })`;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        if (this.type === "circle") {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === "rectangle") {
            ctx.fillRect(
                this.x - this.size / 2,
                this.y - this.size / 2,
                this.size,
                this.size
            );
        } else if (this.type === "triangle") {
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
        }
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.speedX = -this.speedX;
        }

        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.speedY = -this.speedY;
        }
    }
}

for (let i = 0; i < numShapes; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const type =
        Math.random() < 0.5
            ? "circle"
            : Math.random() < 0.5
                ? "rectangle"
                : "triangle";
    const size = Math.random() * 50 + 20;
    const speedX = (Math.random() - 0.5) * 5;
    const speedY = (Math.random() - 0.5) * 5;

    shapes.push(new Shape(x, y, type, size, speedX, speedY));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach((shape) => {
        shape.draw();
        shape.update();
    });
}

animate();

canvas.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    shapes.forEach((shape) => {
        const dx = mouseX - shape.x;
        const dy = mouseY - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < shape.size) {
            // Push the shape to the corner
            shape.x =
                shape.size + Math.random() * (canvas.width - 2 * shape.size);
            shape.y =
                shape.size + Math.random() * (canvas.height - 2 * shape.size);
        }
    });
});