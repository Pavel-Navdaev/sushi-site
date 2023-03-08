import c from "./EmptyCartPage.module.scss";
import { Link } from "react-router-dom";

const EmptyCartPage: React.FC = () => {
  return (
    <div className={c.emptyCartPage}>
      <h1>
        <span className={c.icon}>🛒</span>
        <br />
        Cart empty!
      </h1>
      <p className={c.description}>
        It looks like you haven't added anything to your cart
      </p>
      <Link to={"/"}>
        {" "}
        <button className={c.buttonBack}>{`👈 Back`}</button>
      </Link>
    </div>
  );
};

export default EmptyCartPage;
