import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import { useStorage } from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";


function Todo() {
  const [items, putItems] = React.useState(
    useStorage.getData()
  );
  console.log(useStorage.getData())

  // putItems(useStorage()[0])

  // const GetData = () => {
  //   console.log('Check')
  //   console.log(useStorage()[0])
  //   return useStorage()[0]
  // }

  useEffect(() => {
    // storing input name
    console.log(items)
    if (items.length !== 0)
      useStorage.setData(items)
  }, [items])

  console.log('check')
  


  // useEffect(() => {
  //   getData()
  //   putItems([])
  //   // putItems([])
  // }, [])
  // console.log( GetData )


  const addToItemList = (item) => {
    
    putItems( itemlist => [...itemlist, item])
  }
  // putItems({ key: getKey(), text: 'test', done: false })

  // addToItemList({ key: getKey(), text: 'test', done: false })
  /**
   * listFilter = All, Inprocess, Complete
   */
  const [listFilter, setListFilter] = useState('All')

  const showItem = () => {
    let filterItems = items
    if (listFilter === 'Inprocess') {
      filterItems = items.filter(item => item.done === false)
    }

    if (listFilter === 'Complete') {
      filterItems = items.filter(item => item.done === true)
    }

    return filterItems
  }

  const changeDone = (item) => {

    var index = items.findIndex(x=> x.key === item.key);
    if (index === -1)
      // handle error
      return
    else {
      const itemSet = item
      itemSet.done = !itemSet.done

      putItems(
        [
          ...items.slice(0,index),
          item,
          ...items.slice(index+1)
        ]
      )
    }
      
    
  }
  
  const deleteData = () => {
    putItems([])
    useStorage.clearItems()
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input putItem={addToItemList}/>
      <Filter changeFilter={setListFilter}/>
      {
        showItem().length !== 0 &&
        showItem().map(item => (
          <TodoItem
            key={item.key}
            item={item}
            changeDone={changeDone}
          />
      ))
        
        
      }
      <div className="panel-block">
        {showItem().length} items
      </div>
      <button onClick={deleteData}>全てのTODOを削除</button>
    </div>
  );
}

export default Todo;