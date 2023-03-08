import c from "./Sort.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortTypeEnum } from "../../../redux/Filters/types";
import { selectSort } from "../../../redux/Filters/selectors";
import { setSelectedSort } from "../../../redux/Filters/slice";

type OptionsList = {
  name: string;
  sortType: SortTypeEnum;
}[];

export const options: OptionsList = [
  { name: "Rating (ascending)", sortType: SortTypeEnum.RATING_ASC },
  { name: "Rating (descending)", sortType: SortTypeEnum.RATING_DESK },

  { name: "Price (ascending)", sortType: SortTypeEnum.PRICE_ASK },
  { name: "Price (descending)", sortType: SortTypeEnum.PRICE_DESK },

  { name: "Alphabet (ascending)", sortType: SortTypeEnum.TITLE_ASK },
  { name: "Alphabet (descending)", sortType: SortTypeEnum.TITLE_DESK },
];

type SortProps = { selectedSort: { name: string } };
const Sort: React.FC<SortProps> = () => {
  const [isActive, setIsActive] = useState(false);
  const selectedSort = useSelector(selectSort);
  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const onOptionClick = (obj: any) => {
    dispatch(setSelectedSort(obj));
    setIsActive(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        composedPath: () => Node[];
      };
      const path = _e.composedPath();
      if (sortRef.current && !path.includes(sortRef.current)) {
        setIsActive(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={sortRef} className={c.wrapper}>
      <strong>Сортировать по: </strong>
      <span onClick={() => setIsActive(!isActive)}>{selectedSort.name}</span>
      {isActive && (
        <div className={c.popup}>
          <ul>
            {options.map((el) => (
              <li
                className={selectedSort.name === el.name ? `${c.active}` : ""}
                onClick={() => onOptionClick(el)}
                key={el.name}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
