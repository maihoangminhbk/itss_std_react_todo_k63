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
    <label className="panel-block has-text-grey-light">
             <input type="checkbox" checked={true} onChange={handleChangeColor}/>
                    
             {item.text}
         </label>
     }

    { !changeColor &&
      <label className="panel-block">
              <input type="checkbox" onChange={handleChangeColor} checked={false}/>
              {item.text}
          </label>
      }

      </>
  );
}

export default TodoItem;