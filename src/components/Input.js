import React, { useState } from 'react';
import {getKey} from "../lib/util";

/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({putItem}) {
  const [value, setValue] = useState('')
  const handleChangeValue = (e) => setValue(e.target.value)
  return (
    <div className="panel-block">
      <input 
      className='input' 
      type='text'
      placeholder='Add new Todo'
      value={value} 
      onChange={handleChangeValue}
      onKeyDown={(e) => {
        const valueInput = { key: getKey(), text: value, done: false }
        if (e.key === 'Enter') {
          putItem(valueInput)
          setValue('')
        }
        }
      } 
      />

    
    </div>
  );
}

export default Input;
