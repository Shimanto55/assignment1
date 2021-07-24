import React from 'react';

const SelectedPlayers = (props) => {
    // const {image, description,title,price} = props.cart;
    const cartData= props.cart;
    const totalCost = cartData.reduce((sum, player) => sum + player.price ,0)
    console.log(cartData)

    return (
        <div>
            <h2>SelectedPlayers : {cartData.length}</h2>
            <h3>Total Cost: {totalCost}</h3>
            {/* <div>
                <img src={cartData.image} alt="sorry"></img>
                <h5>Player Name: {title}</h5>
                <h6>Description: {description}</h6>
                <p>Sallary: {price}</p>
            </div> */}


        </div>
    );
};

export default SelectedPlayers;