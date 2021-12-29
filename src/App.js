/* eslint-disable */
import React, { useContext, useEffect, useState,lazy, Suspense } from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import './App.css';
import data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
//import Detail from './Detail.js'
let Detail = lazy(()=>{ return import('./Detail.js')});
import axios from 'axios';
import Cart from './Cart.js';
import { useHistory, useParams } from 'react-router-dom';
export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(data);
  let [로딩,로딩변경] = useState(true);
  let [재고,재고변경] = useState([10,11,12]);

  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  

  function 데이터2(){
    var newdata = [...shoes];
    newdata.push(result.data);
    shoes변경(newdata);
  }

  useEffect(()=>{
    if(count !=0 && count<3){
      setAge(age+1)
    }
  },[count])




  return (
    <div className="App">
      <div>안녕하십니까 전 {age} </div>
      <button onClick={()=>{ setCount(count+1)}}>누르면한살먹기</button>

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">상훈'S:hop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

    <Switch>
      {/* 메인페이지 */}
      <Route exact path="/">
        <div className="jumbotron">
          <h1 className="display-4">20% Season Off</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        
        <div className="container">
        
          <재고context.Provider value={재고}>

          <div className="row">
            {
              shoes.map((카드,i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/>
              })
            }
            
          </div>
          </재고context.Provider>
          <button className="btn btn-primary" onClick={()=>{

            {
              로딩 === true
              ?<Modal2/>
              : null
            }
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              shoes변경([...shoes,...result.data])
            })
            .catch(()=>{
              console.log('실패')
            })
            
          }}>더보기</button>
        </div>
      </Route>
      
      
      {/* 디테일페이지 */}
      <Route exact path="/detail/:id">
        <재고context.Provider value={재고}>
          <Suspense fallback={<div>로딩중입니다.</div>}>  
           <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </Suspense>
        </재고context.Provider>
      </Route>

      <Route path="/cart">
        <Cart></Cart>
      </Route>

      <Route path="/:id">
          <div>아무거나 적엇을떄 이거 보여줭</div>
      </Route>
    
    </Switch>
      

      
    
    </div>
  );
}

function Modal2(){
  return (
    
    <div>
      <h1>로딩중입니다</h1>
    </div>
    
  )
}



function Card(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();
  return (
    <div className="col-md-4" onClick={()=>{ history.push('/detail/'+ props.shoes.id)}}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} width="100%"></img>
      <h4>{ props.shoes.title}</h4>
      <p>{ props.shoes.content} & {props.shoes.price}</p>
      <Test></Test>
     </div>
  )
}
function Test(props){
  let 재고 = useContext(재고context);
  return(
    <p>재고 : {재고[0]}</p>
  )
}

export default App;
