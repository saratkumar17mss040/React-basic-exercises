export function LikeList({ likeInfo, setLikeOrNot }) {
    return likeInfo.map((currentLikeInfo, index) => {
        return (
            <div>
                <li
                    style={{
                        listStyle: 'none',
                        marginTop: '20px',
                    }}
                    key={index}
                >
                    {currentLikeInfo.name}
                </li>
                <button
                    style={
                        currentLikeInfo.isLiked
                            ? { backgroundColor: '#60A5FA' }
                            : {}
                    }
                    type="button"
                    onClick={() => setLikeOrNot(currentLikeInfo, index)}
                >
                    Like
                </button>
            </div>
        );
    });
}
