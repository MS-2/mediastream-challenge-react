
import { useCartContext } from "../context";

function Cart() {

    const {
        cart,
        decrease,
        increase,
        total,
        subTotal,
        discount,
    } = useCartContext();

    return (
        <div className="movies__cart">
            <ul>
                {cart.map((currentCartItem, i) => (
                    <li className="movies__cart-card" key={i}>
                        <ul>
                            <li>
                                ID: {currentCartItem.id}
                            </li>
                            <li>
                                Name: {currentCartItem.name}
                            </li>
                            <li>
                                Price: ${currentCartItem.price}
                            </li>
                        </ul>
                        <div className="movies__cart-card-quantity">
                            <button onClick={() => decrease(currentCartItem)}>
                                -
                            </button>
                            <span>
                                {currentCartItem.quantity}
                            </span>
                            <button onClick={() => increase(currentCartItem)}>
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="movies__cart-total">
                <p>{subTotal !== total ? "SubTotal: $" + subTotal : null}</p>
                <p style={{ color: "red" }}>{discount !== 0 ? "Discounts: " + discount * 100 + "% OFF" : null}</p>
                <p>Total: ${total}</p>
            </div>
        </div>
    );
}

export default Cart;