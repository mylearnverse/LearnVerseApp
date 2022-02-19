<template>
  <div>
    <div class="bg"></div>
    <canvas id="canvas"></canvas>
    <video-background
      :src="video"
      :poster="poster"
      objectFit="cover"
      style="max-height: 100%; height: 100vh"
    >
      <div id="clouds">
        <div class="cloud x1">
          <v-img src="/cloud1.png"></v-img>
        </div>
        <div class="cloud x2">
          <v-img src="/cloud2.png"></v-img>
        </div>
        <div class="cloud x3">
          <v-img src="/cloud3.png"></v-img>
        </div>
        <div class="cloud x4">
          <v-img src="/cloud4.png"></v-img>
        </div>
        <div class="cloud x5">
          <v-img src="/cloud1.png"></v-img>
        </div>
      </div>
      <landing v-if="!studentOnboard" />
      <Students v-if="studentOnboard" />
    </video-background>
    <Footer />
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
import Landing from "../components/Landing";
import Students from "../components/Students";
import Footer from "../components/Footer";

export default {
  name: "Home",

  components: {
    Landing,
    Students,
    VideoBackground,
    Footer,
  },
  data: () => ({
    poster: require("@/assets/vid-thumb.png"),
    video: require("@/assets/world-small.mp4"),
    studentOnboard: false,
    educatorOnboard: false,
  }),
  mounted() {
    window.onpopstate = function () {
      this.studentOnboard = false;
      this.educatorOnboard = false;
    };
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particlesArray = [];
    let hue = 0;
    let frame = 0;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const mouse = {
      x: undefined,
      y: undefined,
    };
    canvas.addEventListener("click", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      hue += 8;
      if (particlesArray.length < 100) {
        for (let i = 0; i < 20; i++) {
          particlesArray.push(new Particle());
        }
      }
    });

    canvas.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      hue += 2;
      if (frame % 2 === 0) {
        for (let i = 0; i < 7; i++) {
          particlesArray.push(new Particle());
        }
      }
    });

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = "hsl(" + hue + ", 100%, 50%)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[i].color;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //ctx.fillStyle = 'rgba(0,0,0,0.02)';
      //ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      frame++;
      requestAnimationFrame(animate);
    }

    animate();
  },
};
</script>

<style>
body,
.v-application--wrap {
  background-color: #d5d5d5;
}

.welcome-card {
  z-index: 2;
}

.vue-responsive-videobg .videobg-content {
  background: rgba(0, 171, 255, 0.2);
}

canvas#canvas {
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: block;
  opacity: 0.5;
  cursor: url(/balloon2.png), auto;
}

footer.v-footer.lvfooter {
  position: absolute;
  z-index: 3;
  width: 100%;
  bottom: 0;
}

footer.v-footer.lvfooter span.v-btn__content {
  font-size: 11px;
}

span.copyright {
  position: absolute;
  right: 17px;
  color: #fff;
  font-size: 12px;
}

.bg {
  opacity: 0.7;
  height: 100%;
  background: url(/cloud-left.png) 0 0 no-repeat fixed,
    url(/cloud-right.png) 0 0 no-repeat fixed;
  background-size: 500px 900px, 370px 907px;
  background-position: 0 0, 100% 0;
  position: absolute;
  z-index: 1;
  width: 100%;
}

#clouds {
  padding: 100px 0;
  position: absolute;
  z-index: 1;
  opacity: 0.7;
  cursor: url(/balloon1.png), auto;
  width: 100%;
}

.cloud {
  width: 200px;
  height: 60px;
  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  position: relative;
}

/*Time to animate*/
.x1 {
  top: -50px;
  -webkit-animation: moveclouds 35s linear infinite;
  -moz-animation: moveclouds 35s linear infinite;
  -o-animation: moveclouds 35s linear infinite;
}

/*variable speed, opacity, and position of clouds for realistic effect*/
.x2 {
  left: 200px;
  top: 100px;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.6; /*opacity proportional to the size*/

  /*Speed will also be proportional to the size and opacity*/
  /*More the speed. Less the time in 's' = seconds*/
  -webkit-animation: moveclouds 45s linear infinite;
  -moz-animation: moveclouds 45s linear infinite;
  -o-animation: moveclouds 45s linear infinite;
}

.x3 {
  left: -250px;
  top: -40px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 40s linear infinite;
  -moz-animation: moveclouds 40s linear infinite;
  -o-animation: moveclouds 40s linear infinite;
}

.x4 {
  left: 470px;
  top: -250px;

  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.75; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 38s linear infinite;
  -moz-animation: moveclouds 38s linear infinite;
  -o-animation: moveclouds 38s linear infinite;
}

.x5 {
  left: -150px;
  top: 20px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 40s linear infinite;
  -moz-animation: moveclouds 40s linear infinite;
  -o-animation: moveclouds 40s linear infinite;
}

@-webkit-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}

@-moz-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}

@-o-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
</style>
