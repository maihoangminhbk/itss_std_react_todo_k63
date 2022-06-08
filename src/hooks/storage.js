import { useState, useEffect } from 'react';
import { getKey } from "../lib/util";

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

const getData = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialValue = JSON.parse(saved);
  return initialValue || [];
}

const setData = (items) => {
  console.log(JSON.stringify(items))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const clearItems = () => {
  localStorage.removeItem(STORAGE_KEY)
}

export const useStorage = {
  getData, setData, clearItems
}