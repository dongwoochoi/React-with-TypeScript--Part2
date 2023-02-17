import { Shoesdata } from "../App";
import { useParams } from 'react-router-dom'

function Detail({shoes}:{shoes:Shoesdata[]}){
    let {id} = useParams() as { id: string };
    let 찾은상품 = shoes.find(function(x){
        return x.id == parseInt(id)
      });
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id)+1) +".jpg"} width="100%" alt='b' />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{shoes[parseInt(id)].title}</h4>
                        <p>{shoes[parseInt(id)].content}</p>
                        <p>{shoes[parseInt(id)].price} + "원"</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
                </div> 
        </div>
    );
}
export default Detail;