import c from "./App.module.scss";
import Header from "./components/Header/Header";
import "./scss/common/reset.scss";
import Goods from "./components/Goods/Goods";
import { Route, Routes } from "react-router-dom";
import Loadable from "react-loadable";

const BasketPage = Loadable({
  loader: () => import("./components/BasketPage/BasketPage"),
  loading: () => <div>Loading...</div>,
});

const NotFoundBlock = Loadable({
  loader: () => import("./components/common/notFound/NotFoundBlock"),
  loading: () => <div>Loading...</div>,
});

const App: React.FC = () => {
  return (
    <div className={c.app}>
      <Header />
      <div className={c.main}>
        <Routes>
          <Route path={"/"} element={<Goods />} />
          <Route path={"/busket"} element={<BasketPage />} />
          <Route path={"*"} element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
