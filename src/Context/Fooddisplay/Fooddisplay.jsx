import React, { useContext } from 'react';
import './Fooddisplay.css';
import { Storecontext } from '../Storecontext';
import Fooditem from '../../Components/Fooditem/Fooditem';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(Storecontext); 

    return (
        <div className="food-display" id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <Fooditem 
                                key={item._id} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                            />
                        ); 
                    }
                    return null; 
                })}
            </div>
        </div>
    );
};

export default Fooddisplay;