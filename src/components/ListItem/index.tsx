import { ChangeEvent, useState } from "react";
import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
  item: Item;
  list: Item[];
  setList: (items: Item[]) => void;
};

export const ListItem = ({ item, list, setList }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheckboxchange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    const newTodoList = list.map((elem) => {
      if (elem.id === item.id) {
        elem.done = e.target.checked;
      }

      return elem;
    });

    setList(newTodoList);
  };

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxchange}
      />
      <label htmlFor="">{item.name}</label>
    </C.Container>
  );
};
