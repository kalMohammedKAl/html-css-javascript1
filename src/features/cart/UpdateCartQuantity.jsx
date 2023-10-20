import { useDispatch } from "react-redux"
import Button from "../ui/Button"
import { decItemcount, incteItemcount } from "./cartSlice";

function UpdateCartQuantity({pizzaId , currantQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 items-center md:gap-3" >
            <Button click={()=>dispatch(decItemcount(pizzaId))} type="round">-</Button>
            <span className="text-sm font-medium ">{currantQuantity}</span>
            <Button click={()=>dispatch(incteItemcount(pizzaId))} type="round">+</Button>
        </div>
    )
}

export default UpdateCartQuantity