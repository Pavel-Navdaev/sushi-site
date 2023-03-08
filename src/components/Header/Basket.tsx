import c from "./Busket.module.scss";
import { Link } from "react-router-dom";
import React from "react";

type BasketProps = {
  items: any;
  totalPrice: number;
};

const Basket: React.FC<BasketProps> = ({ items, totalPrice }) => {
  return (
    <Link to={"/busket"} className={c.busket}>
      <div className={c.price}>
        <p>
          {totalPrice}
          <span>$</span>
        </p>
      </div>
      <div className={c.count}>
        <svg viewBox="0 0 1028 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M972.8 137.984q23.04 0 40.32 19.2t13.44 42.24l-53.76 373.76q-2.56 19.2-17.28 32t-35.2 12.8l-604.16 0 8.96 53.76 541.44 0q21.76 0 37.76 16t16 37.76-16 37.12-37.76 15.36l-586.24 0q-20.48 0-35.2-12.8t-17.28-30.72l-99.84-596.48-74.24 0q-21.76 0-37.76-15.36t-16-37.12 16-37.76 37.76-16l119.04 0q19.2 0 34.56 12.8t17.92 32l11.52 61.44 736 0zm-61.44 107.52l-204.8 0 0 106.24 189.44 0zm-258.56 0l-160 0 0 106.24 160 0 0-106.24zm0 160l-160 0 0 106.24 160 0 0-106.24zm-212.48-160l-186.88 0 19.2 107.52q2.56-1.28 7.68-1.28l160 0 0-106.24zm-160 160l17.92 106.24 142.08 0 0-106.24-160 0zm426.24 106.24l167.68 0 14.08-106.24-181.76 0 0 106.24zm-426.24 399.36q0-79.36 79.36-79.36 80.64 0 80.64 79.36 0 80.64-80.64 80.64-79.36 0-79.36-80.64zm480 0q0-79.36 79.36-79.36 80.64 0 80.64 79.36 0 80.64-80.64 80.64-79.36 0-79.36-80.64z" />
        </svg>
        <p className={c.itemsCount}>
          {items.reduce((sum: number, item: any) => {
            return item.count + sum;
          }, 0)}
        </p>
      </div>
    </Link>
  );
};

export default Basket;
