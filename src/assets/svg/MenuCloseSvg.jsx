const MenuCloseSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <rect
        className="transition-all origin-center"
        x="0"
        y="9"
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"}) translate(${openNavigation ? "0, -5" : "0, 0"})`}
      />
      <rect
        className="transition-all origin-center"
        x="0"
        y="9"
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"}) translate(${openNavigation ? "0, 5" : "0, 0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
