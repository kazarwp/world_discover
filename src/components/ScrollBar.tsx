interface ScrollBarProps {
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export const ScrollBar = ({ activeIndex, onDotClick }: ScrollBarProps) => {
  const items = Array.from({ length: 5 }); // количество карточек

  return (
    <div className="bar-menu">
      {items.map((_, index) => (
        <div
          key={index}
          className={`bar-menu__item ${activeIndex === index ? "active" : ""}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};
