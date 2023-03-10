import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Button } from 'react-bootstrap'
import data from './data';
import { useState } from 'react';
import Card from './page/Card';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './page/detail';
import axios from 'axios'
import Cart from './page/Cart';

export interface Shoesdata {
  id: number;
  title: string;
  content: string;
  price: number;
}

function App() {

  let [shoes, set_shoes] = useState<Shoesdata[]>(data)
  let [button, set_button] = useState<number>(2)
  let navigate = useNavigate();

  return (
    <div id="main" className="App">

      

      <Navbar id="nav" bg="ligth" variant="ligth">
        <Container>
          <Navbar.Brand href="#home">D-Market</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={ ()=>{navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link href="#features">Menu2</Nav.Link>
            <Nav.Link href="#pricing">Menu3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='' element={
          <div>
            <div className='main-bg'>

            </div>
            <Card shoes={shoes}></Card>
            <Button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data'+button+'.json').then((dataa)=>{
                set_shoes([...shoes,...dataa.data])
              })
              .catch(()=>{
                console.log('실패함')
              });
              set_button(button+1)
            }}>더 보기</Button>
          </div>
        }>
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={ <div>404</div> } />
        <Route path="/event" element={ <Event></Event> }>
          <Route path="one" element={ <div><h3>첫 주문시 양배추 서비스</h3></div> } />
          <Route path="two" element={ <div><h3>생일 기념 쿠폰 받기</h3></div> } />
        </Route>
      </Routes>
      <br />

      
    </div>  
  );
}

export default App;

function Event(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
}