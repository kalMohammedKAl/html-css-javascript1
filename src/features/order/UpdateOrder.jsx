import { useFetcher } from "react-router-dom"
import Button from "../ui/Button"
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({order}) {
    const fetcher = useFetcher();

    return (
       <fetcher.Form method="PATCH" className="text-right">
        <Button type="primary">make priority</Button>
       </fetcher.Form>
    )
}

export async function action ({ params}){
    console.log("update")
    const data = {priority : true}
    await updateOrder(params.orderId , data)
    return null
}

export default UpdateOrder
