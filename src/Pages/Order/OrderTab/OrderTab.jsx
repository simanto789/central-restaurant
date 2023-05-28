import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-3'>
            {
                items.map(item => <FoodCard
                    key={item.id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;