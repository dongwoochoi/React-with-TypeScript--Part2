import { Shoesdata } from "../App";
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Nav } from "react-bootstrap";
// import styled from 'styled-components';

function Detail({shoes}:{shoes:Shoesdata[]}){
    let [tab, set_tab] = useState(0)
    let {id} = useParams() as { id: string };
    let searchid = shoes.find(function(x){
        return x.id == parseInt(id)
      }) as unknown as Shoesdata;
      console.log(searchid.id)
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={"https://codingapple1.github.io/shop/shoes" + (searchid.id+1) +".jpg"} width="100%" alt='b' />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{shoes[parseInt(id)].title}</h4>
                        <p>{shoes[searchid.id].content}</p>
                        <p>{shoes[searchid.id].price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
                <Nav variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={()=>{ set_tab(0) }} eventKey="link0">버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{ set_tab(1) }} eventKey="link1">버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{ set_tab(2) }} eventKey="link2">버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab}/>
            </div>
             
        </div>
    );
}
export default Detail;

function TabContent({tab}:{tab:number}){
    let [fade, setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
    return ()=>{
        setFade('')
    }
    }, [tab])
    return (
        <div className={"start"+" "+ fade}>
          { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
      )
  }