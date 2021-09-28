import React, { useState, useEffect } from 'react';
import { SERVER_IP } from "../../private";

const DELETE_ORDER_URL = `${SERVER_IP}/api/delete-order`;

const OrdersList = (props) => {
    const { orders } = props;
    const [currentOrder, setCurrentOrder] = useState(0);

    if (!props || !props.orders || !props.orders.length) return (
        <div className="empty-orders">
            <h2>There are no orders to display</h2>
        </div>
    );

    const deleteButtonClicked = (order) => {
        console.log("order # ", order);

        // remove current order item
        fetch(DELETE_ORDER_URL, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': order})  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
          })
          .then((res) => res.json())
          .then((response) => console.log("Success", JSON.stringify(response)))
          .catch((error) => console.error(error));
          
    }

    return orders.map(order => {
        const createdDate = new Date(order.createdAt);
        return (
            <div className="row view-order-container" key={order._id}>
                <div className="col-md-4 view-order-left-col p-3">
                    <h2>{order.order_item}</h2>
                    <p>Ordered by: {order.ordered_by || ''}</p>
                </div>
                <div className="col-md-4 d-flex view-order-middle-col">
                    <p>Order placed at {`${createdDate.getHours()}:${createdDate.getMinutes()}:${createdDate.getSeconds()}`}</p>
                    <p>Quantity: {order.quantity}</p>
                </div>
                <div className="col-md-4 view-order-right-col">
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteButtonClicked(order._id)}>Delete</button>
                </div>
            </div>
        );
    });
}

export default OrdersList;