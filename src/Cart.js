import React from 'react';
import {Table} from 'react-bootstrap'; 
import { connect, useDispatch, useSelector } from 'react-redux';
import './Detail.scss'
import { useEffect, memo } from 'react';

function Cart(props) {

  let state = useSelector((state)=>state)
  let dispatch = useDispatch();
  function 알림닫기(){
    dispatch({type : '알람닫기'})
  }
  
  

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>          
          </tr>
        </thead>
        <tbody>
        {
          state.reducer.map((a,i)=>{
            return (
              <tr key={i}>
                <td>{ a.id}</td>
                <td>{ a.name}</td>
                <td>{ a.quan}</td>
                <td>
                  <button onClick={()=>{ dispatch({type : '수량증가', 데이터 : a.id })}}>+</button>
                  <button onClick={()=>{dispatch({type : '수량감소', 데이터 : a.id }) }}>-</button>
                </td>               
              </tr> 
            )
          })
        }
        </tbody>
      </Table>
      { 
        state.reducer2 === true
        ?(<div className="my-alert2">
           <p>지금 구매하시면 신규할인 20%
             <button onClick={ 알림닫기 }>x</button>
           </p>         
        </div>)
        : null
      }
      <Parent 이름="박상훈" 나이="25"></Parent>
      
    </div>
  )
}

function Parent(props){
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  )
}
function Child1(){
  useEffect( ()=>{ console.log('렌더링됨1') } );
  return <div>1111</div>
}
let Child2 = memo(function(){
  useEffect( ()=>{ console.log('렌더링됨2') } );
  return <div>2222</div>
});



//function  함수명(state){
  // return{
  //   상품 : state.reducer,
  //   alert : state.reducer2
  // }
  
//}

//export default connect(함수명)(Cart)

export default Cart;