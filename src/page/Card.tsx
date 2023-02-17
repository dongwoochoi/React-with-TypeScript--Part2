import { Shoesdata } from "../App";

function Card({shoes}:{shoes:Shoesdata[];}){
    return(
        <div>
            <div className="container">
                <div className="row">
                    {
                        shoes.map(function(aa, i:number){
                            return(
                                <div className="col-md-4">
                                    <img src={"https://codingapple1.github.io/shop/shoes"+ (i+1) +".jpg"} width="80%" alt='a' />
                                    <h4>{shoes[i].title}</h4>
                                    <p>{shoes[i].content}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Card; 