import { NavLink } from 'react-router-dom';

function ResultSearchItem({ to, img, name, title, oldPrice, newPrice, unit }) {
    return (
        <NavLink
            to={to || ''}
            className="result-item flex items-center py-2 px-6 border-[] border-b-2"
        >
            <img
                src={img}
                alt="result-img"
                className="w-[64px] h-[64px] object-cover mr-2"
            />
            <div className="result-item__info">
                <p className="text-sm text-[#334155] line-clamp-2">{name}</p>
                <span className="px-2 bg-[#edf2f8] text-[#334155] rounded-sm text-sm h-6 mt-1 ">
                    {title}
                </span>
                <div className="price">
                    <span className="old-price line-through text-sm mr-1">
                        {oldPrice}
                    </span>
                    <span className="new-price text-base text-[#072d94] font-bold">
                        {newPrice} &#8260;
                    </span>
                    <span className="unit text-sm">{unit}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default ResultSearchItem;
