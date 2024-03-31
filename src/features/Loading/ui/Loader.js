import React, { useState, useEffect } from "react";

const InfiniteLoading = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        let intervalId;

        const fetchData = async () => {
            setLoading(true);
            // Simulating an asynchronous API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const newData = [...data, Math.random()];
            setData(newData);
            setLoading(false);
        };

        intervalId = setInterval(fetchData, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [data]);

    return (
        <div className="centered-container home-text46">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.toFixed(3)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default InfiniteLoading;