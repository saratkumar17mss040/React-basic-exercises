import { Items } from './Items';

export function LikeButton() {
    const renderList = Items.map((item, index) => {
        return (
            <div>
                <li
                    style={{
                        listStyle: 'none',
                        marginTop: '20px',
                    }}
                    key={index}
                >
                    {item.name}
                </li>
                <button type="button">Like</button>
            </div>
        );
    });

    return <div>{renderList}</div>;
}
