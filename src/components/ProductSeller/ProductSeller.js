import { NavLink } from 'react-router-dom';

function ProductSeller({ to, img, name, newPrice, unit, oldPrice }) {
    return (
        <div className="product">
            <NavLink to={to || ''}>
                <img
                    src={img}
                    alt="product-img"
                    className="px-2 py-2 bg-[#fff] rounded-md border-[#d8e0e8] border-2 w-[155px] h-[157px] object-cover hover:border-[#072d94]"
                />
            </NavLink>
            <NavLink to={to || ''} className="text-[#334155] line-clamp-2 text-base hover:text-[#072d94]">
                {name}
            </NavLink>
            <p className="price">
                <span className="text-[#072d94] font-bold">{newPrice}</span>
                &#8260;
                <span className="unit text-[#334155]">{unit}</span>
            </p>
            <p className="old-price line-through text-[#718198]">{oldPrice}</p>
        </div>
    );
}

export default ProductSeller;
