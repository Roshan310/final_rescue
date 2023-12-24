import React, { useState } from 'react';

const Card = ({ datas }) => {
    const [showFullText, setShowFullText] = useState(false);

    const truncatedText = datas[2].split(' ').slice(0, 20).join(' ');

    const handleToggleText = () => {
        setShowFullText((prevShowFullText) => !prevShowFullText);
    };

    return (
        <div className="bg-pink-200 w-80 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{datas[0]}</h2>
            {!showFullText ? (
                <>
                    <p className="text-red-700">{truncatedText}</p>
                    {datas[2].split(' ').length > 20 && (
                        <button onClick={handleToggleText} className="btn-show-more">
                            Show More
                        </button>
                    )}
                </>
            ) : (
                <>
                    <p className="text-red-700">{datas[2]}</p>
                    <button onClick={handleToggleText} className="btn-show-more">
                        Show Less
                    </button>
                </>
            )}
        </div>
    );
};

export default Card;
