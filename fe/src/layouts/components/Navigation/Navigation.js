import { useState } from 'react';
import NavModal from '~/components/NavModal';
import NavItem from './NavItem';

function Navigation() {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div className="nav max-w-[1200px] relative flex m-auto items-center justify-between bg-[#ff]">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <NavItem title="THỰC PHẨM CHỨC NĂNG" />
            </div>
            <NavItem title="DƯỢC MỸ PHẨM" />
            <NavItem title="CHĂM SÓC CÁ NHÂN" />
            <NavItem title="THUỐC" />
            <NavItem title="THIẾT BỊ Y TẾ" />
            <NavItem title="BỆNH" />
            <NavItem title="GÓC SỨC KHỎE" />
            <NavItem title="HỆ THỐNG NHÀ THUỐC" />
            {isHovering && (
                <div
                    className="nav-content absolute top-10 left-0 bg-[#edf2f8] max-w-[1200px] w-[1200px] rounded-md z-10"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <NavModal />
                </div>
            )}
        </div>
    );
}

export default Navigation;
