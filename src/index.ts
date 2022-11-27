import setupApp from "@main/config/app";

const app = setupApp();

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
