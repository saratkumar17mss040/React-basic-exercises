export default function Product({
    name,
    type,
    currentPrice,
    originalPrice,
    discountOffer,
}) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            <div>
                <img
                    width="300px"
                    alt="shirt"
                    src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg"
                />
                <p>{name}</p>
                <div>
                    <span>{type}</span> &nbsp;
                    <span>heart</span>
                </div>
                <div style={{ paddingTop: '18px' }}>
                    <span>{currentPrice}</span> &nbsp;
                    <span style={{ color: 'gray' }}>
                        <strike>{originalPrice}</strike>
                    </span>{' '}
                    &nbsp;
                    <span>{discountOffer}</span>
                </div>
            </div>
        </div>
    );
}
