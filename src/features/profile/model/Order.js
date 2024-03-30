import React from "react";
//




import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom';
const Order = (props) => {

    switch (props.status){
        case false:{
            return(
                <tr>
                    <td>{props.invID}</td>
                    <td>{props.title}</td>
                    <td>Ошибка оплаты</td>
                    <td>-</td>
                </tr>);
        }
        case true:{
            return(
                <tr>
                    <td>{props.invID}</td>
                    <td>{props.title}</td>
                    <td>Успешно</td>
                    <td><a href={props.link}>Скачать</a></td>
                </tr>);
        }
    }
}

Order.defaultProps = {
    invID: "",
    title: "name",
    status: "ok",
    link: ""
}

Order.propTypes = {
    invID: PropTypes.number,
    title:  PropTypes.string,
    status:  PropTypes.bool,
    link:  PropTypes.string
}

export default Order;
