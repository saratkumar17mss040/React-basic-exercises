export default function RenderListItems({ items, addToCart }) {
    return items.map((item, index) => {
        return (
            <div
                style={{
                    border: '3px solid black',
                    width: '100px',
                    padding: '20px',
                    margin: '20px',
                }}
            >
                <li key={index} style={{ listStyle: 'none' }}>
                    {item.name}
                </li>
                <span>{item.price}</span>
                <button
                    value={item.name}
                    onClick={addToCart}
                    style={{ margin: '10px' }}
                    type="button"
                >
                    Add to cart 🛒
                </button>
            </div>
        );
    });
}
