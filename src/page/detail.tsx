import { Shoesdata } from "../App";
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
// import styled from 'styled-components';

function Detail({shoes}:{shoes:Shoesdata[]}){
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
                </div> 
        </div>
    );
}
export default Detail;