import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1671611731-U5BR-chuyen-trang-sanofi.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1675735783-rTy2-push-tpcn-t2-2023.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1671181106-Agcp-dac-quyen-mua-hang-1k.jpg"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
            </Slider>
            <div className="search max-w-[1200px] mx-auto my-0 h-[252px] shadow-md px-[80px] py-6  bg-[#fff] rounded-md  ">
                <h1 className="font-medium text-[32px] mb-4">
                    Tra Cứu Thuốc, TPCN, Bệnh Lý...
                </h1>
                <form className="flex">
                    <input
                        placeholder="Nhập từ khóa..."
                        className="rounded-3xl pl-6 pr-4 border-2 border-[#d8e0e8] outline-0 h-[54px] w-full rounded-r-none"
                    />
                    <button
                        className="bg-[#1d48ba] rounded-3xl h-[54px] px-[38px] rounded-l-none"
                        type="button"
                    >
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </form>
                <div className="search-trend mt-6">
                    <h3 className="mb-2 text-[20px]">Tra Cứu Hàng Đầu</h3>
                    <div className="trends flex items-center flex-wrap gap-x-2 gap-y-3">
                        <div className="trend-item bg-[#edf2f8] text-[#698fc9] rounded-3xl px-3 lowercase cursor-pointer">
                            panadol
                        </div>
                        <div className="trend-item bg-[#edf2f8] text-[#698fc9] rounded-3xl px-3 lowercase cursor-pointer">
                            vitamin
                        </div>
                        <div className="trend-item bg-[#edf2f8] text-[#698fc9] rounded-3xl px-3 lowercase cursor-pointer">
                            bao cao su
                        </div>
                        <div className="trend-item bg-[#edf2f8] text-[#698fc9] rounded-3xl px-3 lowercase cursor-pointer">
                            tinh chất hào
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto my-0">
                <div className="flex flex-wrap -mx-4px mb-6">
                    <h3 className="px-1 flex-[0_0_100%] max-w-full text-[28px] text-center font-medium">
                        Mua Thuốc Dễ Dàng Tại Long Châu
                    </h3>
                </div>
                <div className="flex flex-wrap -mx-4px ">
                    <div className="px-1 flex-[0_0_33%] max-w-full">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3>CHỤP TOA THUỐC</h3>
                            <p>đơn giản & nhanh chóng</p>
                        </div>
                    </div>
                    <div className="px-1 flex-[0_0_33%] max-w-full">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3>NHẬP THÔNG TIN LIÊN LẠC</h3>
                            <p>để được tư vấn đặt hàng</p>
                        </div>
                    </div>
                    <div className="px-1 flex-[0_0_33.33333%] max-w-full">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3>NHẬN BÁO GIÁ TỪ DƯỢC SỸ</h3>
                            <p>kèm theo tư vấn miễn phí</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4px mt-6">
                    <div className="px-1 flex-[0_0_100%] max-w-full ">
                        <div className="flex items-center justify-center ">
                            <NavLink
                                to=""
                                className="bg-[#016cc9] text-[#fff] px-8 rounded-3xl h-[36px] flex items-center"
                            >
                                MUA THUỐC NGAY
                            </NavLink>
                            <p className="hover:underline hover:cursor-pointer ml-2">
                                Hoặc mua qua hotline{' '}
                                <strong className="text-[#016cc9] font-bold">
                                    1800 6928
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
