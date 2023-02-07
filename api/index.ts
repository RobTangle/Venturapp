import app from "./src/app";
import config from "./src/config";

const PORT = config.server.port || 3333;

app.listen(PORT, () => {
  console.log(`**************************************************`);
  console.log(`******* Server listening on port ${PORT} *******`);
  console.log(`**************************************************`);
});
