import c from "./Header.module.scss";
import Logo from "../../assets/img/Logo.png";
import Basket from "./Basket";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/Cart/selectors";

const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectBasket);

  return (
    <header className={c.header}>
      <div className={c.logo}>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className={c.title}>React Sushi</div>
      <div className={c.description}>The fastest sushi on our planet!</div>
      <div className={c.contacts}>
        <Search />
      </div>
      <div className={c.shoppingList}>
        <Basket items={items} totalPrice={totalPrice} />
      </div>
    </header>
  );
};

export default Header;
