import tesla from "../images/tesla.svg";

export const Card = ({img, title, text}: {img: string, title: string, text: string}) => {
  return (
    <div className="card">
      <div className="card__info">
        <img className="card__img" src={img}></img>
        <div className="card__description">
          <p className="card__title">
            {title}
          </p>
          <p className="card__paragraph">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
