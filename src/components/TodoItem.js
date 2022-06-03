/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, {useState} from 'react';

function TodoItem({item}) {
  const [changeColor, setChangeColor] = useState(false)

  const handleChangeColor = () => {
    setChangeColor(!changeColor)
  }
  return (
    <>
    { changeColor &&
    <label className="panel-block has-text-grey-light" onClick={handleChangeColor}>
             <input type="checkbox" />
             {item.text}
         </label>
     }

    { !changeColor &&
      <label className="panel-block" onClick={handleChangeColor}>
              <input type="checkbox" />
              {item.text}
          </label>
      }

      </>
  );
}

export default TodoItem;