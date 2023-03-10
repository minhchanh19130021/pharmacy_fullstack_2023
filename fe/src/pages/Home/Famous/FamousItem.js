import { NavLink } from 'react-router-dom';

function FamousItem({ to, img, title }) {
    return (
        <div className="flex items-center flex-col mx-auto border border-[#dceaf3] hover:bg-[#ecf5fc] transition-all align-middle px-4 pt-6 pb-5 rounded-lg h-full w-[160px]">
            <NavLink to={to || ''}>
                <img src={img} alt="img-item-famous" className="w-[105px] h-[110px] object-cover flex mx-auto"/>
                <p className="font-bold mt-4 text-sm text-center">{title}</p>
            </NavLink>
        </div>
    );
}

export default FamousItem;
