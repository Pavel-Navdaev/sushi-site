import c from "./Categories.module.scss";
import React, { useState } from "react";
import arrow from "../../../assets/img/arrow.png";

type CategoriesProps = {
  activeCategory: number;
  onCategoryClick: (idx: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onCategoryClick,
}) => {
  const categories = ["All", "Vegetarian", "Tempura", "Spicy"];

  const [visibleCategoryForSmallScreen, setVisible] = useState<number>(0);

  const onLeftArrowClick = () => {
    if (visibleCategoryForSmallScreen > 0) {
      setVisible(visibleCategoryForSmallScreen - 1);
    }
  };
  const onRightArrowClick = () => {
    if (visibleCategoryForSmallScreen < categories.length - 1) {
      setVisible(visibleCategoryForSmallScreen + 1);
    }
  };

  return (
    <div className={c.wrapper}>
      <div className={c.smallScreenSize}>
        <div onClick={onLeftArrowClick} className={c.leftArrowButton}>
          <img src={arrow} alt="" />
        </div>

        <div className={c.smallScreenSizeCategoriesButtons}>
          {categories.map((item, index) => {
            if (index === visibleCategoryForSmallScreen) {
              return (
                <a
                  key={item}
                  className={activeCategory === index ? `${c.active}` : ""}
                  onClick={() => onCategoryClick(index)}
                >
                  {item}
                </a>
              );
            }
          })}
        </div>
        <div onClick={onRightArrowClick} className={c.rightArrowButton}>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={c.normalScreenSize}>
        {categories.map((item, index) => (
          <a
            key={item}
            className={activeCategory === index ? `${c.active}` : ""}
            onClick={() => onCategoryClick(index)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
