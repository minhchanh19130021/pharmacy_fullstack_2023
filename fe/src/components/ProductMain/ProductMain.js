import { NavLink } from 'react-router-dom';

function ProductMain({ to, label, img, title, newPrice, oldPrice, unit }) {
    return (
        <div
            to={to || ''}
            className="product-main  rounded-md hover:border-[#4f71d0] border px-3 py-3 relative mb-4 bg-[#fff] h-full"
        >
            <div className="product-label absolute top-3 right-3 py-1 px-2 bg-[#4f71d0] text-[#fff] rounded-3xl">
                <p className="text-xs capitalize">{label}</p>
            </div>
            <img
                src={img}
                alt="main-img"
                className=" object-cover px-2 py-2  mb-3 "
            />
            <p className="text-[#334155] line-clamp-2 text-base hover:text-[#072d94] mb-2">
                {title}
            </p>
            <p className="price">
                <span className="text-[#072d94] font-bold">{newPrice}</span>
                &#8260;
                <span className="unit text-[#334155] capitalize">{unit}</span>
            </p>
            <p className="old-price line-through text-[#718198]">{oldPrice} </p>
        </div>
    );
}

export default ProductMain;
