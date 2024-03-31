import React, { useEffect, useState } from "react";
import '../../../app/home.css'
import getMe from "../api/profile-api";
import {useHistory} from "react-router-dom";
import getOrders from "../api/orders";
import Order from "../model/Order";
import logout from "../../login/api/logout";
import NewOrder from "../../new-order/ui/new-order";
import getAuth from "../api/admin-call";
const Profile = () => {

    const history = useHistory();


    if (localStorage.getItem('Access') == null) {
        history.push("/login");
    }


    const [profile, setProfile] = useState({auth: [] }); // Set profile as an object with a name property

    useEffect(() => {
        const fetchData = async () => {
            const profile = await getMe(history);
            setProfile(profile);
        };
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
        <div >
            <div style={{marginLeft: 10 + '%', marginRight: 10 + '%', marginTop: 2 + '%'}}>
                <div>
                    <span className="home-text19 Heading-3">{profile.sub}</span>
                    <span className="home-text20">
                            <br></br>
                            <span>Ваши заказы</span>

                        </span>
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center', minWidth:"800px"}}>
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
                        {orders && orders.map((order) => {
                            if (order && order.invID && order.link_download && order.status && order.product) {
                                return (
                                    <Order invID={order.invID} link={order.link_download} status={order.status}
                                           title={order.product}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </table>
                </div>

                {Array.isArray(profile.auth) && (
                    <div>
                        {profile.auth.includes("ADMIN") && (
                            <div>
                                <div>
                                        <span className="home-text20">
                                        <br></br>
                                        <span>Создать новый </span>

                                         </span>
                                </div>
                                <br></br>
                                <NewOrder/>
                            </div>)
                        }
                    </div>
                )}

                <div style={{justifyContent: "center"}}>
                    <br></br>
                    <button className="button" onClick={() => logout(history)}>Выйти из аккаунта</button>

                </div>
            </div>

        </div>
    )
        ;
};
export default Profile;