import c from "./Goods.module.scss";
import Product from "./Product";
import { useEffect, useRef } from "react";
import SushiSkeleton from "../common/preloaders/SushiSkeleton";
import Categories from "./Filtration/Categories";
import Sort, { options } from "./Filtration/Sort";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import qs from "qs";
import { useAppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/Filters/selectors";
import { setActiveCategory, setFilters } from "../../redux/Filters/slice";
import { selectSushi } from "../../redux/Sushi/selectors";
import { SearchSushiProps } from "../../redux/Sushi/types";
import { getSushi } from "../../redux/Sushi/asyncActions";

const Goods: React.FC = () => {
  const filter = useSelector(selectFilter);
  const { items, status } = useSelector(selectSushi);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  let isSearchParams = useRef(false);

  const onCategoryClick = (index: number) => {
    dispatch(setActiveCategory(index));
  };

  useEffect(() => {
    const category =
      filter.activeCategory > 0 ? `&category=${filter.activeCategory}` : "";
    const sort = `&sortBy=${filter.selectedSort.sortType.replace("-", "")}`;
    const order = filter.selectedSort.sortType.includes("-") ? "desc" : "asc";
    const search = filter.searchValue ? `&search=${filter.searchValue}` : "";

    if (isSearchParams.current) {
      dispatch(getSushi({ search, category, sort, order }));
    }
    isSearchParams.current = true;
    window.scrollTo(0, 0);
  }, [filter]);

  useEffect(() => {
    const queryString = qs.stringify({
      activeCategory: filter.activeCategory,
      sortType: filter.selectedSort.sortType,
    });
    setSearchParams(`?${queryString}`);
  }, [filter]);

  useEffect(() => {
    if (!location.search.length) {
      const params = Object.fromEntries([
        ...searchParams,
      ]) as unknown as SearchSushiProps;
      const sort = options.find((obj) => obj.sortType === params.sort);
      dispatch(
        setFilters({
          activeCategory: Number(params.category),
          searchValue: params.search,
          selectedSort: sort || options[1],
        })
      );
    } else {
      dispatch(
        setFilters({
          activeCategory: 0,
          searchValue: "",
          selectedSort: options[1],
        })
      );
    }
  }, []);

  return (
    <div className={c.wrapper}>
      <Categories
        activeCategory={filter.activeCategory}
        onCategoryClick={onCategoryClick}
      />
      <Sort selectedSort={filter.selectedSort} />
      <div className={c.title}>All:</div>
      <div className={c.goods}>
        {status === "loading"
          ? [...new Array(8)].map((_, i) => <SushiSkeleton key={i} />)
          : items.map((obj: any) => <Product key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Goods;
