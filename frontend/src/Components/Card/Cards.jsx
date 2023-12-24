import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
    const [datas, setDatas] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const cardsToShow = showAll ? datas : datas.slice(0, 2);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/news", { method: "GET" });
                const data = await response.json();
                setDatas(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchApi();
     
    }, []);

    const handleShowMore = () => {
        setShowAll(true);
    };

    return (
        <div className="flex gap-4 flex-wrap justify-center mt-5">
            {cardsToShow.map((data) => (
                <Card datas={data} />
            ))}
            {!showAll && datas.length > 2 && (
                <button onClick={handleShowMore} className="btn-show-more">
                    Show More
                </button>
            )}
        </div>
    );
};

export default Cards;
