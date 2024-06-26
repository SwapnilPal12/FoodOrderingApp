import { useContext } from "react"
import "./PlacedOrder.css"
import { StoreContext } from "../../context/StoreContext"

const PlacedOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="number" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}/-</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:40}/-</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+40}/-</b>

            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>  
        </div>  
      </div>
    </form>
  )
}

export default PlacedOrder
