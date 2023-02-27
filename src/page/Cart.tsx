import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux"

function Cart(){
    interface stock{
        id : number;
        name : string;
        count : number;
    }
    let a:any = useSelector((state) => { return state } )
     console.log(a.stock[0])
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        a.stock.map(function(aa:stock, i:number){
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{a.stock[i].name}</td>
                                    <td>{a.stock[i].count}</td>
                                    <td><button onClick={()=>{

                                    }}>+</button></td>
                                </tr>
                            );
                            
                        })
                    }
                    
                </tbody>
                </Table>
        </div>
    );
}
export default Cart;