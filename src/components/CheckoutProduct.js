import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket} from "../slices/basketSlice"

function CheckoutProduct({id, title, price, description, category, image, hasPrime, rating}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {id, title, price, description, category, image, hasPrime};
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <Currency quantity={price * 75} currency="INR" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div>
                )}
            </div>
            
            <div className="flex flex-col space-y-2 justify-self-end">
                <button className="btn" onClick={addItemToBasket}>Add to Cart</button>
                <button className="btn" onClick={removeItemFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
