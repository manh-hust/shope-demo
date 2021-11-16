import {useSelector, useDispatch} from 'react-redux';
import {Button, Container, Table} from 'reactstrap'
import { removeToCard } from '../../Store/Action.Creator'

function Cart(){

    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    function handleDelete(item){
        dispatch(removeToCard(item))
    }
    return (
    <Container>
         <h2>Cart</h2>
         <Table >
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Sum
                    </th>
                    <th>
                        Total
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            { cart.length > 0 ?
            (<tbody>
                {cart.map((item, index) => ( 
                    <tr key={index}>
                        <th scope="row">
                            {index + 1}
                        </th>
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {item.price}$
                        </td>
                        <td>
                            {item.tt ? item.tt : ''}
                        </td>
                        <td>
                            {item.price*item.tt}$
                        </td>
                        <td>
                        <Button
                            color="danger"
                            className="" onClick = {() => {handleDelete(item)}}
                        >
                            Delete
                        </Button>
                        </td>
                    </tr>
            ))}
            </tbody>):
            (<tbody>
                <tr>
                    <th>Chưa có sản phẩm nào </th>
                </tr>
            </tbody>)
            }
        </Table>
    </Container>  
    )
}
    
export default Cart