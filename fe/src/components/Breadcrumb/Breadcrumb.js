import { NavLink } from 'react-router-dom';

function Breadcrumb() {
    return (
        <div className="breadcrumb pb-4 pt-3 padding-responsive">
            <NavLink to="" className="text-sm text-[#1d48ba]">
                Trang chủ
            </NavLink>
            <span className="px-2"> &#8260;</span>
            <NavLink to="" className="text-sm text-[#1d48ba]">
                Dược mỹ phẩm
            </NavLink>
            <span className="px-2"> &#8260;</span>

            <NavLink to="" className="text-sm text-[#1d48ba]">
                Mỹ phẩm trang điểm
            </NavLink>
            <span className="px-2"> &#8260;</span>
            <NavLink to="" className="text-sm text-[#1d48ba]">
                Son môi
            </NavLink>
        </div>
    );
}

export default Breadcrumb;
