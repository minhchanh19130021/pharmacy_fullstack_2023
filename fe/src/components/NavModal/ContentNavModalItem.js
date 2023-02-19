import { NavLink } from 'react-router-dom';

function ContentNavModalItem({ to, img, title }) {
    return (
        <NavLink
            to={to || ''}
            className="flex items-center rounded-3xl border-[#c3cedb] bg-[#fff] pt-1 pr-4 pb-1 pl-1  mb-2 border"
        >
            <picture className="px-2 py-2 hover:rounded-full w-10 h-10 mr-2">
                <img src={img} alt="navmodal-item-img" />
            </picture>
            <p className="navmodal-item__title text-sm">{title}</p>
        </NavLink>
    );
}

export default ContentNavModalItem;
