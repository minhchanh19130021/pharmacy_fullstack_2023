import { NavLink } from 'react-router-dom';

function ProtectItem({ img, title, to, more }) {
    return (
        <div className="bg-[#fff] shadow-lg rounded-lg flex items-center mx-auto justify-center px-3 py-4 w-full">
            <NavLink to={to || ''} >
                <img src={img} alt="img" className="w-[80px] h-[80px] object-cover mr-6 " />
            </NavLink>
            <div className="2xl:block xl:block lg:block md:block sm:block xs:block cs:hidden">
                <h1 className="text-[14px] font-bold xs:hidden">{title}</h1>
                <NavLink to={to || ''} className="text-sm flex items-center">
                    <span>{more}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}

export default ProtectItem;
