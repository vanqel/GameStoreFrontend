import React, { useEffect, useState } from "react";
import '../../../app/home.css'
import getMe from "../api/profile-api";
import {useHistory} from "react-router-dom";
import getOrders from "../api/orders";
import Order from "../model/Order";

const Profile = () => {
    const [profile, setProfile] = useState({ name: '' }); // Set profile as an object with a name property

    const history = useHistory();


    if (localStorage.getItem('Access') == null) {
        console.log("PUSTO")
        history.push("/login");
    }

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await getMe();
            setProfile(profileData);
        };
//
        fetchData();
    }, []);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders();
            setOrders(orders);
        };

        fetchOrders();
    }, []);

    return (
        <div>
        <br/>
            <div>
                <div style={{width: 1000 + 'px'}}>
                    <span className="home-text19 Heading-3">{localStorage.getItem('username')}</span>
                    <span className="home-text20">
                            <br></br>
                            <span>Ваши заказы</span>

                        </span>
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <table style={{
                        border: '1px solid black',
                        borderCollapse: 'collapse',
                        width: '100%',
                        maxWidth: '1000px',
                        textAlign: "center"
                    }}>
                        <tr>
                            <th>Номер заказа</th>
                            <th>Продукт</th>
                            <th>Статус</th>
                            <th>Ссылка на скачивание</th>
                        </tr>
                        {orders.map((order) => (
                            <Order invID={order.invID} link={order.link_download} status={order.status} title={order.product} />
                        ))}
                    </table>
                </div>

            </div>
            <button>Выйти</button>
        </div>
    );
};
export default Profile;