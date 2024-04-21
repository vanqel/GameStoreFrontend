import React, {useEffect, useState} from 'react';
import updateOrder from "../api/update-order";
import getOrder from "../api/get-order";
import delOrder from "../api/del-order";
const UpdateOrder = (index: number) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [linkDownload, setLinkDownload] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [order, setOrder] = useState(null);

    const handleSubmit = async () => {
        setOrder(getOrder(index));
        useEffect(() => {
            const getOneOrder = async () => {
                const orders = await getOneOrder(index);

                setOrder(orders);
            };
            getOneOrder();
        }, null);
        try {
            setLoading(true);
            if (title === '' || description === '' || price === '' || category === '' || linkDownload === '' || image == null){
                setError("Заполните все поля!");
            }else {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('price', price);
                formData.append('category', category);
                formData.append('linkDownload', linkDownload);

                await updateOrder(formData, image)

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

    const handleDelete = async () => {
        await delOrder(index);
    }
    return (
        order.title && (
            <div className="home-text23 ">
                <form onSubmit={handleSubmit} style={{margin: "0", display: "flex"}}>
                    <input
                        className="home-textinput"
                        style={{margin: 0.5 + '%'}}
                        type="text"
                        placeholder="Название"
                        defaultValue={order.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="home-textinput"
                        style={{margin: 0.5 + '%'}}
                        type="text"
                        placeholder="Описание"
                        defaultValue={order.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        className="home-textinput"
                        style={{margin: 0.5 + '%'}}
                        type="number"
                        placeholder="Цена"
                        defaultValue={order.price}
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
        )


    )
        ;
};

export default UpdateOrder;
