import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers} from 'redux' ;


let alert초기값 = true;

function reducer2( state = alert초기값, 액션){
  if(액션.type === '알람닫기'){
   state = false;
   return state;
  }else{
    return state
  }
}

let 초기값 = [
  { id:0, name:'아디다스신발', quan : 0},
  { id:1, name:'나이키신발', quan: 0},
  { id:2, name:'뉴발신발', quan: 0}
];
  
function reducer(state = 초기값,액션){
  if(액션.type === '항목추가') {

    let found = state.findIndex((a)=>{ return a.id === 액션.payload.id});
    if(found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy
    }else{
      let copy = [...state];
      copy.push(액션.payload);
      return copy
    }

    
  }

  if ( 액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy
  }else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy
  } else {
    return state
  }
   
 }

 let store = createStore(combineReducers({reducer,reducer2}));
  



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
