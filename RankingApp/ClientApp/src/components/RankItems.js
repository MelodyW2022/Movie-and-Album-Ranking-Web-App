import React, { useState, useEffect } from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((response) => response.json())
            .then((data) => setItems(data)
            .catch((error) => {
                    console.error('Error fetching items:', error);
                });
    }, []);

    return (
        <main>
                {items !== null ? (
                    items.map((item) => <h3 key={item.Id}>{item.Title}</h3>)
                ) : (
                    <div>Loading...</div>
                )}
        </main>

    );
};

export default RankItems;