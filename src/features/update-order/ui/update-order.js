import React, {useEffect, useState} from 'react';
import updateOrder from "../api/update-order";
import getProducts from "../../market/api/market-api";
import delOrder from "../api/del-order";

const UpdateOrder = () => {
    const [index, setIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [linkDownload, setLinkDownload] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [order, setOrder] = useState(null);
    useEffect(() => {
        const getOneOrder = async () => {
            const orders = await getProducts(null);

            setOrder(orders);
        };
        getOneOrder()
    }, []);
    const handleSubmit = async () => {

        try {
            setLoading(true);
            if (index === 0 || title === '' || description === '' || price === '' || category === '' || linkDownload === '' || image == null) {
                setError("Заполните все поля!");
            } else {
                const formData = new FormData();
                formData.append('id', index);
                formData.append('title', title);
                formData.append('description', description);
                formData.append('price', price);
                formData.append('category', category);
                formData.append('linkDownload', linkDownload);

                await updateOrder(formData, image)
                setIndex(0);
                setTitle('');
                setDescription('');
                setPrice('');
                setCategory('');
                setLinkDownload('');
                setError(null);
                setImage(null);
            }

        } catch (error) {
            console.error('Ошибка при отправке заказа:', error);
        }
    };

    const handleDelete = async (index) => {
        await delOrder(index);
    }

    return (
        <div>
            {
                <div className="home-text23 ">
                    <form onSubmit={handleSubmit} style={{margin: "0", display: "flex"}}>
                        <select
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            value={index}
                            onChange={(e) => setIndex(e.target.value)}>
                            {
                                order !== null && (order.map((o) => <option value={o.id}>${o.name}</option>))
                            }
                        </select>
                        <input
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            type="text"
                            placeholder="Название"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            type="text"
                            placeholder="Описание"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            type="number"
                            placeholder="Цена"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min="10"
                        />
                        <input
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            type="text"
                            placeholder="Ссылка"
                            value={linkDownload}
                            onChange={(e) => setLinkDownload(e.target.value)}
                        />
                        <input
                            className="home-textinput"
                            style={{margin: 0.5 + '%'}}
                            type="file"
                            placeholder="Изображение"
                            onChange={(e) => setImage(e.target.files[0])}

                        />
                    </form>
                    <button className="button" type="submit" onClick={handleSubmit}>Обновить</button>
                    <button className="button" type="submit" onClick={handleDelete}>Удалить</button>

                    <div style={{textAlign: "center"}}>
                        {error && (
                            <div>
                                <span>Заполните все поля</span>
                            </div>
                        )}
                    </div>
                </div>
            }


        </div>


    )
        ;
};

export default UpdateOrder;
