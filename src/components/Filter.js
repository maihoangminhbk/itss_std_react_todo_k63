/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {changeFilter} ) {

  return (
    <div className="panel-tabs">
    <a onClick={() => { changeFilter('All') }}> 全て</a>
    <a onClick={() => { changeFilter('Inprocess') }}> 未完了</a>
    <a onClick={() => { changeFilter('Complete') }}> 完了済み</a>
    </div>
  );
}

export default Filter