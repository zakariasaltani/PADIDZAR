const app = require("./app");
const bootstrap = require("./config/bootstrap");

require("dotenv").config();
const app = require("./app");

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Serveur lancé sur http://0.0.0.0:${PORT}`);
})
  } catch (e) {
    console.error("❌ Impossible de démarrer le serveur :", e.message);
    process.exit(1);
  }
}

start();

;
