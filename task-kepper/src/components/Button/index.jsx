export const Button = ({ content = "Add", color = "#000", onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {content}
    </button>
  );
};
