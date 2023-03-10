import { useState } from 'react';
import NavModal from '~/components/NavModal';
import NavItem from './NavItem';

function Navigation() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="nav max-w-[1200px] relative 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden cs:hidden m-auto items-center justify-between bg-[#ff] grid grid-cols-42 padding-responsive">
            <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <NavItem>
                    <p className="font-bold text-xs uppercase">THỰC PHẨM CHỨC NĂNG</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </NavItem>
            </div>
            <NavItem>
                <p className="font-bold text-xs uppercase">DƯỢC MỸ PHẨM</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">CHĂM SÓC CÁ NHÂN</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">THUỐC</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">THIẾT BỊ Y TẾ</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">BỆNH</p>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">GÓC SỨC KHỎE</p>
            </NavItem>
            <NavItem>
                <p className="font-bold text-xs uppercase">HỆ THỐNG NHÀ THUỐC</p>
            </NavItem>

            {isHovering && (
                <div
                    className="nav-content absolute top-10 left-0 bg-[#edf2f8]  rounded-md z-10 animate-fadeBottomMobile"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <NavModal />
                </div>
            )}
        </div>
    );
}

export default Navigation;
