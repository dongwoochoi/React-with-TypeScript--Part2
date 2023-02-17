import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'
import data from './data';
import { useState } from 'react';
import Card from './page/Card';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './page/detail';

export interface Shoesdata {
  id: number;
  title: string;
  content: string;
  price: number;
}

function App() {

  let [shoes] = useState<Shoesdata[]>(data)
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
          </div>
        }>
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
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