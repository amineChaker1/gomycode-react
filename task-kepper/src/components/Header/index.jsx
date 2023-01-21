import { Button } from "../Button";
export const Header = ({ title = "Task Kepper" }) => {
  function onClick() {
    console.log("the button is clicked");
  }
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button />
      <Button content="prop-btn" color="red" onClick={onClick} />
    </header>
  );
};
