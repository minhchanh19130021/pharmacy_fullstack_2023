import { NavLink } from 'react-router-dom';

function NavModalItem({ to, img, title, onMouseOver, onMouseOut }) {
    return (
        <NavLink
            onMouseover={onMouseOver}
            onMouseOut={onMouseOut}
            to={to}
            className="navmodal-item border-r-1 border-[#c3cedb] flex items-center py-2 pr-0 pl-4 hover:bg-[#edf2f8] hover:text-[#072D94] hover:font-bold hover:border-y-1 hover:border-x-0 hover:border-[#c3cedb]"
        >
            <picture className="px-2 py-2 hover:rounded-full w-10 h-10 hover:bg-[#fff] mr-2">
                <img src={img} alt="navmodal-item-img" />
            </picture>
            <p className="navmodal-item__title text-sm">{title}</p>
        </NavLink>
    );
}

export default NavModalItem;
