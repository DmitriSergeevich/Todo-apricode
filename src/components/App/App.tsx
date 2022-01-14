import { observer } from "mobx-react-lite";
import BtnsGroup from "../BtnsGroup/BtnsGroup";
import InputTextItem from "../InputTextItem/InputTextItem";
import TodoList from "../TodoList/TodoList";
import store from "../../store/store";
import { TodoFilters } from "../../types";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const App = observer(() => {
  const { setFilterTodos, todoFilter, addTodo } = store;
  const { all, complited, uncomplited } = TodoFilters;

  const filterBtns = [
    {
      lable: "Все",
      handler: () => setFilterTodos(all),
      classes: `btn ${todoFilter === all ? "btn__blue" : ""}`,
    },
    {
      lable: "Выполненные",
      handler: () => setFilterTodos(complited),
      classes: `btn ${todoFilter === complited ? "btn__blue" : ""}`,
    },
    {
      lable: "Невыполненные",
      handler: () => setFilterTodos(uncomplited),
      classes: `btn ${todoFilter === uncomplited ? "btn__blue" : ""}`,
    },
  ];

  return (
    <ErrorBoundry>
      <div className="container">
        <h1>Todo list</h1>
        <InputTextItem handler={addTodo} />
        <BtnsGroup btns={filterBtns} />
        <TodoList />
      </div>
    </ErrorBoundry>
  );
});

export default App;
