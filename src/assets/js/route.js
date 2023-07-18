import CustomerScreen from "./screen/CustomerScreen.js";
import DefaultLayout from "./screen/DefaultLayots.js";
import Error404Screen from "./screen/Error404Screen.js";
import Footer from "./screen/Footer.js";
import Header from "./screen/Header.js";
import HomeScreen from "./screen/HomeScreen.js";
import ProductScreen from "./screen/ProductScreen.js";
import Sidebar from "./screen/Sidebar.js";
import { parseRequestUrl } from "./utils.js";
const routes = {
  "/": HomeScreen,
  "/products": ProductScreen,
  "/customers": CustomerScreen
};
const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const app = document.getElementById('root');
  const contentRender = await screen.render()
  app.innerHTML = await DefaultLayout.render(contentRender);
  if(Sidebar.after_render)
  await Sidebar.after_render();
  if(Header.after_render)
  await Header.after_render();
  if(Footer.after_render)
  await Footer.after_render();
  if(screen.after_render)
  await screen.after_render();
};
export default router;
