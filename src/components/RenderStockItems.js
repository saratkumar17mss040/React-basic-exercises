export function RenderStockItems({ stockItems, renderQuantityStatus }) {
    return stockItems.map((item, index) => {
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
                {renderQuantityStatus(item.name, item.quantity)}
                <span>{item.quantity}</span>
            </div>
        );
    });
}
