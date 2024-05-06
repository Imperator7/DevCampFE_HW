import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART, REMOVE_ITEM } from "../store/actiontypes"


export default function AddToCart() {
    const products = useSelector((state) => state.cart.itemList)

    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()

        const actionObject = {
            type: ADD_TO_CART,
            payload: {
               item: {
                productName: e.target.elements.productName.value,
                productPrice: e.target.elements.productPrice.value,
                id: crypto.randomUUID()
               }
            }
        }
                    
        dispatch(actionObject)
    }

    const delCard = (e) => {
        const actionObject = {
            type: REMOVE_ITEM,
            payload: {
                id: e.target.id
            }
        }

        dispatch(actionObject)
    }
    return (
        <div>
            <form onSubmit={onSubmit} style={{display:"flex", gap: '7px'}}>
                <div style={{position: 'relative',left:"15px"}}>
                    <label name="name">ชื่อสินค้า</label> <input type="text" name="productName"/>
                </div>
                <div style={{position: 'relative',left:"15px"}}>
                    <label name="price">ราคาสินค้า</label> <input type="text" name="productPrice"/>
                </div >
                <button type="submit" style={{position: 'relative',left:"15px", borderRadius:"10px", border: '1px solid #524C42'}}>เพิ่มสินค้า</button>
            </form>
            <div className="card-container">
                {products.map((product) => <div key={product.id} className="product-card">
                        <label className="h3"><strong>{product.productName}</strong></label>
                        <label>ราคา: {product.productPrice} บาท</label>
                        <button className="btn btn-warning" id={product.id} onClick={delCard}>ลบ</button>
                    </div>)}
            </div>
        </div>
    )
}