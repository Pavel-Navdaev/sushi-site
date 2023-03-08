import c from "./Search.module.scss";
import searchIcon from "../../../assets/img/search-line-icon.svg";
import debounce from "lodash.debounce";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/Filters/slice";

const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClearClick = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const updateSearchValue = useCallback(
    debounce((srt) => {
      dispatch(setSearchValue(srt));
    }, 300),
    []
  );
  return (
    <div className={c.wrapper}>
      <img src={searchIcon} alt="" />
      <input
        ref={inputRef}
        onChange={onChangeValue}
        value={value}
        className={c.input}
        type="text"
        name=""
        id=""
        placeholder={"Search sushi ..."}
      />
      {value && (
        <p className={c.clear} onClick={onClearClick}>
          +
        </p>
      )}
    </div>
  );
};
export default Search;
