import { NavLink } from 'react-router-dom';

function NavItem({ title }) {
    return (
        <NavLink
            to=""
            className="nav-title flex items-center flex-wrap  hover:border-b-[#f59e0b] hover:border-b-2 px-[18px] py-[10px]	"
        >
            <p className="font-medium text-xs uppercase ">{title}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </NavLink>
    );
}

export default NavItem;
