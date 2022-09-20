import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    setList([
      ...list,
      {
        id: list.length + 1,
        name: taskName,
        done: false,
      },
    ]);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} list={list} setList={setList} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
