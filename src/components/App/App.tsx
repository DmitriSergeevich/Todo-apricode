import { observer } from 'mobx-react-lite';
import BtnsGroup from '../BtnsGroup/BtnsGroup';
import InputTextItem from '../InputTextItem/InputTextItem';
import TodoList from '../TodoList/TodoList';
import store from '../../store/store';
import { TodoFilterType } from '../../types';

const App = observer(() => {

  const filterBtns = [
    {
      lable: 'Все',
      handler: () => store.setFilterTodos(TodoFilterType.all),
      classes: `btn ${store.todoFilter === TodoFilterType.all ? 'btn__blue' : ''}`,  
    },
    {
      lable: 'Выполненные',
      handler: () => store.setFilterTodos(TodoFilterType.complited),
      classes: `btn ${store.todoFilter === TodoFilterType.complited ? 'btn__blue' : ''}`,      
    },
    {
      lable: 'Невыполненные',
      handler: () => store.setFilterTodos(TodoFilterType.uncomplited),
      classes: `btn ${store.todoFilter === TodoFilterType.uncomplited ? 'btn__blue' : ''}`,      
    },
  ]

  return (
    <div className='container'>
      <h1 className=''>Todo list</h1>
      <InputTextItem handler={store.addTodo}/>
      <BtnsGroup btns={filterBtns}/>
      <TodoList/>
    </div>
  );
})

export default App;