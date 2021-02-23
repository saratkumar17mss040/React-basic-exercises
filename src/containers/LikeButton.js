import React, { useState } from 'react';
import { Items } from '../assets/Items';
import LikeList from '../components/LikeList';

export default function LikeButton() {
    const [likeInfo, setLikeInfo] = useState(Items);

    function setLikeOrNot(item, index) {
        for (let i = 0; i < likeInfo.length; i++) {
            if (i === index) {
                const newLikeInfo = [...likeInfo];

                newLikeInfo[i] = {
                    ...newLikeInfo[i],
                    isLiked: !newLikeInfo[i].isLiked,
                };

                setLikeInfo([...newLikeInfo]);
            }
        }
    }

    return (
        <div>
            <LikeList setLikeOrNot={setLikeOrNot} likeInfo={likeInfo} />
        </div>
    );
}
