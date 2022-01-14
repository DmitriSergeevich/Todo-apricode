import { ButtonType } from "../../types";
import "./Button.scss";

const Button = ({ lable, handler, classes }: ButtonType) => {
  return (
    <button type="button" className={classes} onClick={handler}>
      {lable}
    </button>
  );
};

export default Button;
