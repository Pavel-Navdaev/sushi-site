import c from "./ItemInBasket.module.scss";
import { useDispatch } from "react-redux";
import React from "react";
import { addItem, minusItem, removeItem } from "../../redux/Cart/slice";

type ItemInBasketProps = {
  title: string;
  price: number;
  imgUrl: string;
  setSize: string;
  count: number;
  id: number;
};
const ItemInBasket: React.FC<ItemInBasketProps> = ({
  title,
  price,
  imgUrl,
  setSize,
  count,
  id,
}) => {
  const dispatch = useDispatch();
  const onPlusClick = () => {
    dispatch(addItem({ id, setSize, title, price, imgUrl, count }));
  };
  const onMinusClick = () => {
    if (count > 1) {
      dispatch(minusItem({ id, setSize }));
    } else {
      if (window.confirm("remove product?")) {
        dispatch(removeItem({ id, setSize }));
      }
    }
  };
  const onRemoveClick = () => {
    if (window.confirm("remove product?")) {
      dispatch(removeItem({ id, setSize }));
    }
  };

  return (
    <div className={c.wrapper}>
      <img src={imgUrl} alt="" />
      <div>
        <p className={c.title}>{title}</p>
        <p className={c.pieces}>{setSize}</p>
      </div>
      <div className={c.counter}>
        <button onClick={onMinusClick}>-</button>
        <p className={c.count}>{count}</p>
        <button onClick={onPlusClick}>+</button>
      </div>
      <p className={c.price}>{(price * count).toFixed(2)}$</p>
      <div className={c.delete}>
        <button onClick={onRemoveClick}>+</button>
      </div>
    </div>
  );
};
export default ItemInBasket;
