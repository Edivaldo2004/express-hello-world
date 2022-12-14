const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/meunome", async (req, res) => {
  res.send("Meu nome é Edivaldo José dos Santos Junior");

});

app.get("/tico", async (req, res) => {

  res.send("teco");

});

app.get("/pokemons", async (req, res) => {

  res.json(pokemons);

});


app.post("/series", async (req, res) => {

  const series = req.body;

  res.json({ series: ["Prison Breack", "Tudo bem no Natal que vem", "Crepúsculo"] });
});

const pokemons = {
  1: "Snorlax",
  2: "Bulbasaur",
  3: "Squirtle",
  4: "Charizard",
  5: "Primeape",
  6: "Lapras",
  7: "Kingler",
  8: "Muk",
  9: "Tauros",
  10: "Pikachu",

};

app.listen(4000, function () {
  console.log('App de Exemplo escutando na porta 4000!')
});


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background-color: #282834;;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: white
      }
      @import url("https://fonts.googleapis.com/css?family=Lato:400,700");

@keyframes topAnimation {
    from {
        transform: translate(0rem, 0);
    }

    to {
        transform: translate(0rem, 3.5rem);
    }
}

@keyframes bottomAnimation {
    from {
        transform: translate(-11.5rem, 0);
    }

    to {
        transform: translate(0rem, 0);
    }
}

button.bti {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    border: 0;
    position: relative;
    letter-spacing: 0.15em;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    background: transparent;
    outline: none;
    font-size: 50px;
    color: #fafafa;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
}

button.bti::after,
button.bti::before {
    border: 0;
    content: "";
    position: absolute;
    height: 40%;
    width: 10%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: -2;
    border-radius: 50%;
}

button.bti::before {
    border: 0;
    background-color: #9CD9D9;
    top: -0.75rem;
    left: 0.5rem;
    animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite alternate;
}

button.bti::after {
    background-color: #2595a1;
    top: 3rem;
    left: 13rem;
    animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite alternate;
}

button.bti:hover {
    color: rgb(15, 14, 14);
}

button.bti:hover::before,
button.btn:hover::after {
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    animation: none;
}

button.bti:hover::after {
    left: 0rem;
}

button.bti:hover::before {
    top: 0.5rem;
    left: 0.35rem;
}
.top-keyframes {
    margin-top: -20px;
}
    </style>
  </head>
  <body>
    <section>
      <button class="bti">API do Edivaldo</button>
      <h3>Atividade Hello Expresss</h3>
    </section>
  </body>
</html>
`
