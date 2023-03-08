import c from "./Product.module.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItem } from "../../redux/Cart/selectors";
import { BasketItem } from "../../redux/Cart/types";
import { addItem } from "../../redux/Cart/slice";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  setSize: number[];
  imgUrl: string;
};

const Product: React.FC<ProductProps> = ({
  id,
  title,
  price,
  setSize,
  imgUrl,
}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const itemCount = useSelector(selectBasketItem(id, setSize, activeCategory));
  const addedCount = itemCount ? itemCount.count : 0;

  const dispatch = useDispatch();
  const onAddClick = () => {
    const obj: BasketItem = {
      id,
      title,
      price,
      imgUrl,
      setSize: setSize[activeCategory] + " pieces",
      count: 0,
    };
    dispatch(addItem(obj));
  };
  return (
    <div className={c.wrapper}>
      <img src={imgUrl} alt="" />
      <p className={c.title}>{title}</p>
      <div className={c.options}>
        {setSize.map((el, index) => (
          <div
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? `${c.active}` : ""}
            key={el}
          >
            {el} pieces
          </div>
        ))}
      </div>
      <p className={c.price}>
        from <span>{price}$</span> per set
      </p>
      <button className={c.add} onClick={onAddClick}>
        + Добавить{" "}
        {addedCount > 0 && <span className={c.sushiCount}>{addedCount}</span>}
      </button>
    </div>
  );
};

export default Product;
