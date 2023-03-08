import basketIcon from "../../assets/img/basket-icon-9.png";
import trashCan from "../../assets/img/photo_2023-02-16_18-01-29.png";
import c from "./BasketPage.module.scss";
import ItemInBasket from "./ItemInBasket";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../redux/Cart/selectors";
import { clearItems } from "../../redux/Cart/slice";
import { Link } from "react-router-dom";
import Loadable from "react-loadable";

const EmptyCartPage = Loadable({
  loader: () => import("../BasketPage/emptyCartPage/EmptyCartPage"),
  loading: () => <div>Loading...</div>,
});
const BasketPage: React.FC = () => {
  const { items, totalPrice } = useSelector(selectBasket);
  const dispatch = useDispatch();

  const onClearClick = () => {
    if (window.confirm("Do you want to clear cart?")) {
      dispatch(clearItems());
    }
  };

  {
    if (!items.length) return <EmptyCartPage />;
  }
  return (
    <div className={c.wrapper}>
      <div className={c.basketHead}>
        <div className={c.title}>
          <img src={basketIcon} alt="basket" />
          <p>Basket</p>
        </div>
        <div onClick={onClearClick} className={c.clear}>
          <img src={trashCan} alt="" />
          <p>Clear basket</p>
        </div>
      </div>
      <div className={c.shoppingList}>
        {items.map((obj: any, index: number) => (
          <ItemInBasket key={index} {...obj} />
        ))}
      </div>
      <div className={c.payBlock}>
        <div className={c.allGoods}>
          All goods:{" "}
          <span>
            {items.reduce((sum: number, item: any) => {
              return item.count + sum;
            }, 0)}
          </span>
        </div>
        <div className={c.fullPrice}>
          Full price: <span>{totalPrice.toFixed(2)}$</span>
        </div>
        <Link to={"/"} className={c.goBack}>
          <button>👈 Go back</button>
        </Link>
        <Link to={"/"} className={c.payNow}>
          <button>Pay now</button>
        </Link>
      </div>
    </div>
  );
};

export default BasketPage;
