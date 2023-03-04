import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showItemMobile, setShowItemMobile] = useState(false);
    const [showMenuMobiles, setShowMenuMobiles] = useState(false);

    return (
        <div className="wrapper bg-[#072d94] h-20">
            <div className="2xl:flex xl:flex lg:flex m-auto items-center justify-between max-w-[1200px] h-20 md:hidden sm:hidden xs:hidden" >
                <NavLink to="">
                    <img
                        src="https://nhathuoclongchau.com.vn/frontend_v3/images/longchau-logo.svg"
                        alt="logo"
                    />
                </NavLink>
                <div className="right flex text-white ">
                    <NavLink to="" className="track flex items-center mr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                        </svg>
                        <div className="track-title">
                            <p>Tra cứu</p>
                            <p>Lịch sử đơn hàng</p>
                        </div>
                    </NavLink>
                    <NavLink to="" className="cart flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        <div className="cart-title">
                            <p>Giỏ hàng</p>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex justify-between items-center 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-3 xs:px-3 h-20 relative">
                <div className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                        onClick={() => setShowMenuMobiles(!showMenuMobiles)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    {/* menu mobile */}
                    {showMenuMobiles && (
                        <div
                            className="overlay fixed top-0 left-0  w-screen h-screen bg-[rgb(24,24,24,0.6)] "
                            onClick={() => setShowMenuMobiles(false)}
                        ></div>
                    )}
                    {showMenuMobiles && (
                        <div className="menu-mobile fixed top-0 left-0 bg-[#e8f5fd] z-20 w-[89%] h-screen ">
                            <div
                                className="header-menu flex justify-between px-6 py-3 bg-[#072d94]  "
                                onClick={() =>
                                    setShowMenuMobiles(!showMenuMobiles)
                                }
                            >
                                <NavLink to="/" className="center">
                                    <img
                                        src="https://nhathuoclongchau.com.vn/frontend_v3/images/longchau-logo.svg"
                                        alt="img-logo"
                                    />
                                </NavLink>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#fff]  "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="content-menu bg-[#fff] px-3">
                                <div className="menu-item py-[14px] pl-3 text-sm border-[#e4eaf1] border-b flex items-center justify-between">
                                    <NavLink to="">Trang chủ</NavLink>
                                </div>
                                <div className="menu-item py-[14px] pl-3 text-sm border-[#e4eaf1] border-b ">
                                    <div
                                        className="flex items-center justify-between"
                                        onClick={() =>
                                            setShowItemMobile(!showItemMobile)
                                        }
                                    >
                                        <NavLink to="" className="select-none">
                                            Thực phẩm chức năng
                                        </NavLink>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                    {showItemMobile && (
                                        <ul className="menu-item__childs mt-3 bg-[#e8f5fd] rounded-lg">
                                            <li className="item px-3 py-3 text-sm select-none">
                                                <NavLink to="">
                                                    Dinh dưỡng
                                                </NavLink>
                                            </li>
                                            <li className="item px-3 py-3 text-sm select-none">
                                                <NavLink to="">
                                                    Dinh dưỡng
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <div className="menu-item py-[14px] pl-3 text-sm border-[#e4eaf1] border-b flex items-center justify-between">
                                    <NavLink to="" className="select-none">
                                        Dược mỹ phẩm
                                    </NavLink>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="footer-menu flex items-center pt-4 pb-6 pl-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 text-[#072d94] mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                    />
                                </svg>
                                <div className="info-contact">
                                    <h3 className="font-bold text-base text-[#072d94]">
                                        1800 6928
                                    </h3>
                                    <p className="text-sm text-[#072d94]">
                                        Tư vấn miễn phí
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <NavLink to="/" className="center">
                    <img
                        src="https://nhathuoclongchau.com.vn/frontend_v3/images/longchau-logo.svg"
                        alt="img-logo"
                    />
                </NavLink>
                <NavLink to="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
