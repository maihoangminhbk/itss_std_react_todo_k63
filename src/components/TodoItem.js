/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, {useState} from 'react';

function TodoItem({item, changeDone}) {
  // const [changeColor, setChangeColor] = useState(false)

  const handleChangeColor = () => {
    changeDone(item)
  }
  return (
    <>
    { item.done &&
    <label className="panel-block has-text-grey-light">
             <input type="checkbox" checked={item.done} onChange={handleChangeColor}/>
                    
             {item.text}
         </label>
     }

    { !item.done &&
      <label className="panel-block">
              <input type="checkbox" onChange={handleChangeColor} checked={item.done}/>
              {item.text}
          </label>
      }

      </>
  );
}

export default TodoItem;