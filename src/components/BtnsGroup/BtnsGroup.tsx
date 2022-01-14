import { BtnsGroupProps } from "../../types";
import Button from "../Button/Button";

const BtnsGroup = ({ btns }: BtnsGroupProps) => {
  return (
    <div className="row btn-group mg-vert-16">
      {btns.map((btn) => (
        <Button
          key={btn.lable}
          lable={btn.lable}
          handler={btn.handler}
          classes={btn.classes}
        />
      ))}
    </div>
  );
};

export default BtnsGroup;
