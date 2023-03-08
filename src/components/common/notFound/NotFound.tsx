import c from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={c.notFoundPage}>
      <h1>
        <span className={c.icon}>🙈</span>
        <br />
        Nothing found
      </h1>
      <p className={c.description}>
        Unfortunately, this page is not available in our online store.
      </p>
    </div>
  );
};

export default NotFound;
