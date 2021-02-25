export function RenderCartItems({ cartItems }) {
    return cartItems.map((item, index) => {
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
                    {item.product}
                </li>
                <span>{item.quantity}</span>
            </div>
        );
    });
}
