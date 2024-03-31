import React, { useState } from 'react';
import newOrder from "../api/new-order";
const NewOrder = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [linkDownload, setLinkDownload] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = async () => {

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

                await newOrder(formData, image)

                // Очистите поля формы после отправки
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

    return (
        <div className="home-text23 ">
            <form onSubmit={handleSubmit} style={{margin: "0", display: "flex"}}>
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
                <select
                    className="home-textinput"
                    style={{margin: 0.5 + '%'}}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Категория</option>
                    <option value="music">Музыка</option>
                    <option value="heroes">Герои</option>
                    <option value="games">Игры</option>
                    <option value="library">Библиотека</option>
                </select>
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
            <button className="button" type="submit" onClick={handleSubmit}>Отправить</button>
            <div style={{textAlign: "center"}}>
                {error && (
                    <div>
                        <span>Заполните все поля</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewOrder;