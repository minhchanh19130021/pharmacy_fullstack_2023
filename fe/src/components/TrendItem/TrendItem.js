import { NavLink } from 'react-router-dom';
import './TrendItem.module.scss';

function TrendItem({
    to,
    img,
    title,
    productCount,
    className,
    // class01 = 'flex items-center flex-col bg-[#e8f5fd] rounded-lg px-3 py-3 w-[176px] h-[204px] mb-4',
    // class02 = 'flex items-center flex-col bg-[#fef7dc] rounded-lg px-3 py-3 w-[176px] h-[204px] mb-4',
}) {
    return (
        <NavLink to={to || ''} className={className}>
            <img src={img} alt="img" className=" mb-3 px-6  object-cover " />
            <p className="text-[#334155] text-base font-bold">{title}</p>
            <p className="text-[#52637a] text-sm uppercase">{productCount} sản phẩm</p>
        </NavLink>
    );
}

export default TrendItem;
