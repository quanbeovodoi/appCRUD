import CustomerScreen from "../components/CustomerScreen.js";
import DefaultLayout from "../components/DefaultLayots.js";
import Error404Screen from "../components/Error404Screen.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import HomeScreen from "../components/HomeScreen.js";
import Pagination from "../components/Pagination.js";
import ProductScreen from "../components/ProductScreen.js";
import Sidebar from "../components/Sidebar.js";
import { parseRequestUrl } from "../utils/utils.js";
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
  Pagination.reset()
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
