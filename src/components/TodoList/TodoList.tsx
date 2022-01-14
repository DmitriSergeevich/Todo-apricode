import { observer } from "mobx-react-lite";
import store from "../../store/store";
import Button from "../Button/Button";
import "./TodoList.scss";
const TodoList = () => {
  return (
    <ul>
      {store.filteredTodos().map((todo) => (
        <li key={todo.id} className="row list-group-item">
          <span style={
              todo.complited
              ? { textDecoration: "line-through" }
              : undefined
            }
          >
            {todo.title}
          </span>

          <div className="btn-group">
            <Button
              lable={<i className="fa fa-trash-o" />}
              handler={() => store.removeTodo(todo.id)}
              classes={"btn btn__red-border"}
            />
            <Button
              lable={<i className="fa fa-check" aria-hidden="true"></i>}
              handler={() => store.compliteTodo(todo.id)}
              classes={"btn btn__green-border"}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default observer(TodoList);
