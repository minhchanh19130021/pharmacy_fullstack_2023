import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import TrendItem from '~/components/TrendItem';
import ProductAds from '~/components/ProductAds';
import ProductMain from '~/components/ProductMain';
import ProtectItem from '~/components/ProtectItem';
import { useRef, useState } from 'react';
import ResultSearchItem from '~/components/ResultSearchItem';
import { useMediaQuery } from 'react-responsive';

function Home() {
    const ref = useRef(null);
    const [showHintSearch, setShowHintSearch] = useState('');
    const [showSearchMobile, setShowSearchMobile] = useState(false);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setShowSearchMobile(true);
    };
    const handleChange = (e) => {
        setShowHintSearch(e.target.value);
    };
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const settings2 = {
        className: 'flex flex-wrap -mx-1 mt-4',
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const blue =
        'flex items-center flex-col mx-auto bg-[#e8f5fd] rounded-lg px-3 py-3 w-full h-[204px] mb-4 hover:border border-[#016cc9]';
    const orange =
        'flex items-center flex-col mx-auto bg-[#fef7dc] rounded-lg px-3 py-3 w-full h-[204px] mb-4 hover:border border-[#016cc9]';
    return (
        <div className="app overflow-hidden">
            <div className="overflow-hidden">
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1671611731-U5BR-chuyen-trang-sanofi.png"
                            alt="img"
                            className=" h-[475px] object-cover "
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1675735783-rTy2-push-tpcn-t2-2023.png"
                            alt="img"
                            className=" h-[475px] object-cover "
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1671181106-Agcp-dac-quyen-mua-hang-1k.jpg"
                            alt="img"
                            className=" h-[475px] object-cover "
                        />
                    </div>
                </Slider>
            </div>
            {/* search */}
            <div
                className="search max-w-[1200px] mx-auto  h-[252px] shadow-md px-[80px] py-6  bg-[#fff] rounded-md my-8  "
                ref={ref}
                onClick={handleClick}
            >
                <h1 className="font-medium text-[32px] mb-4 line-clamp-1 ">
                    Tra Cứu Thuốc, TPCN, Bệnh Lý...
                </h1>

                {/* search form pc */}
                <form className="flex ">
                    <div className="relative w-full">
                        <input
                            placeholder="Nhập từ khóa..."
                            className="rounded-3xl pl-6 pr-4 border border-[#d8e0e8] outline-0 2xl:h-[54px] xl:h-[54px] lg:h-[54px] w-full rounded-r-none md:h-[34px] "
                            onChange={handleChange}
                        />
                        {/* modal result search  */}
                        {showHintSearch.length !== 0 && (
                            <div className="results absolute left-0 bg-[#ffffff] w-full shadow-2xl rounded-lg">
                                <ResultSearchItem
                                    to=""
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                    name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                    title="Thuốc"
                                    oldPrice="123.000đ"
                                    newPrice="12.123đ"
                                    unit="Hộp"
                                />
                                <ResultSearchItem
                                    to=""
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                    name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                    title="Thuốc"
                                    oldPrice="123.000đ"
                                    newPrice="12.123đ"
                                    unit="Hộp"
                                />
                                <ResultSearchItem
                                    to=""
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                    name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                    title="Thuốc"
                                    oldPrice="123.000đ"
                                    newPrice="12.123đ"
                                    unit="Hộp"
                                />
                                <ResultSearchItem
                                    to=""
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                    name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                    title="Thuốc"
                                    oldPrice="123.000đ"
                                    newPrice="12.123đ"
                                    unit="Hộp"
                                />

                                <NavLink
                                    to=""
                                    className="flex justify-center items-center py-2 text-sm text-[#1d48ba] hover:underline"
                                >
                                    Xem tất cả
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <button
                        className="bg-[#1d48ba] rounded-3xl h-[54px] px-[38px] rounded-l-none 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden"
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

                {/* search form mobile  */}

                {isTabletOrMobile && showSearchMobile && (
                    <form className="fixed top-0 left-0 w-screen h-screen bg-[#fff] z-50">
                        <div className="search-form__header flex items-center shadow-xl py-2 pl-[34px] pr[10px]">
                            <div className=" flex items-center border border-[#d8e0e8]   rounded-l-3xl w-full">
                                <input
                                    placeholder="Nhập từ khóa..."
                                    className=" outline-none w-[93%] h-[34px] leading-[34px] pr-3 pl-4 bg-transparent text-sm "
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 leading-[34px] cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="results absolute left-0 bg-[#ffffff] w-full shadow-2xl rounded-lg">
                            <ResultSearchItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                title="Thuốc"
                                oldPrice="123.000đ"
                                newPrice="12.123đ"
                                unit="Hộp"
                            />
                            <ResultSearchItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                title="Thuốc"
                                oldPrice="123.000đ"
                                newPrice="12.123đ"
                                unit="Hộp"
                            />
                            <ResultSearchItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                title="Thuốc"
                                oldPrice="123.000đ"
                                newPrice="12.123đ"
                                unit="Hộp"
                            />
                            <ResultSearchItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/03/00033518-vita-gummies-vitamin-d3-1000iu-120v-7608-6226_large.jpg"
                                name="Kẹo dẻo Vita Gummies Vitamin D3 Nature's Way hỗ trợ xương khớp (120 viên)"
                                title="Thuốc"
                                oldPrice="123.000đ"
                                newPrice="12.123đ"
                                unit="Hộp"
                            />

                            <NavLink
                                to=""
                                className="flex justify-center items-center py-2 text-sm text-[#1d48ba] hover:underline"
                            >
                                Xem tất cả
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </NavLink>
                        </div>
                        <div></div>
                    </form>
                )}

                
            </div>

            {/* easy buy  */}
            <div className="max-w-[1200px] mx-auto my-0 mb-8">
                <div className="flex flex-wrap -mx-4px mb-6">
                    <h3 className="px-1 flex-[0_0_100%] max-w-full text-[28px] text-center font-medium">
                        Mua Thuốc Dễ Dàng Tại Long Châu
                    </h3>
                </div>
                <div className="grid 2xl:grid-cols-3 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ">
                    <div className="px-1 ">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3 className="text-center 2xl:text-base xl:text-base lg:text-xs lg:font-bold sm:text-xs sm:font-bold mt-2">
                                CHỤP TOA THUỐC
                            </h3>
                            <p className="lg:hidden sm:hidden">
                                đơn giản & nhanh chóng
                            </p>
                        </div>
                    </div>
                    <div className="px-1 ">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3 className="text-center 2xl:text-base xl:text-base lg:text-xs lg:font-bold sm:text-xs sm:font-bold mt-2">
                                NHẬP THÔNG TIN LIÊN LẠC
                            </h3>
                            <p className="lg:hidden sm:hidden lg:font-bold">
                                để được tư vấn đặt hàng
                            </p>
                        </div>
                    </div>
                    <div className="px-1 flex-[0_0_33.33333%] max-w-full">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png"
                                alt="img"
                                className="w-[64px] h-[64px]"
                            />
                            <h3 className="text-center 2xl:text-base xl:text-base lg:text-xs lg:font-bold sm:text-xs sm:font-bold mt-2">
                                NHẬN BÁO GIÁ TỪ DƯỢC SỸ
                            </h3>
                            <p className="lg:hidden sm:hidden">
                                kèm theo tư vấn miễn phí
                            </p>
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

            <div className="max-w-[1200px] mx-auto my-0">
                <NavLink to="">
                    <img
                        src="https://nhathuoclongchau.com.vn/frontend_v3/images/chuyen-trang-ung-thu/banner-home.png"
                        alt="banner"
                        className="rounded-lg w-full"
                    />
                </NavLink>
            </div>

            {/* famous */}
            <div className="max-w-[1200px] mx-auto my-0 pt-8">
                <div className="flex flex-wrap -mx-1 ">
                    <div className="flex mx-auto">
                        <h3 className=" text-[28px] text-center font-medium mb-4">
                            Danh Mục Nổi Bật
                        </h3>
                    </div>
                </div>
                <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  gap-2 ">
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={orange}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={orange}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                    <TrendItem
                        className={blue}
                        to=""
                        title=" Sinh lý - Nội tiết tố"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                        productCount={130}
                    />
                </div>
            </div>

            <div className="bg-[#4e70d0] max-w-full">
                <div className="max-w-[1200px] mx-auto my-0 py-8">
                    <div className="flex flex-wrap -mx-1 ">
                        <div className="flex-[0_0_100%] max-w-full flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-[#fff] mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                />
                            </svg>
                            <h3 className="px-1  text-[20px] text-[#fff] font-medium capitalize">
                                Sản Phẩm Tăng Sức Đề Kháng
                            </h3>
                        </div>
                    </div>

                    <Slider {...settings2}>
                        <div className=" px-1 ">
                            <ProductAds
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                                title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                                newPrice="30.000đ"
                                oldPrice=""
                                unit="Chai"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                                title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                                newPrice="30.000đ"
                                oldPrice=""
                                unit="Chai"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className=" px-1 ">
                            <ProductAds
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                                title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                                newPrice="30.000đ"
                                oldPrice=""
                                unit="Chai"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className="max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className="max-w-ful px-1 ">
                            <ProductAds
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                                title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                                newPrice="30.000đ"
                                oldPrice=""
                                unit="Chai"
                            />
                        </div>
                        <div className=" max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                        <div className="max-w-ful px-1 ">
                            <ProductAds
                                label="1 Hộp x 60 Viên"
                                img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                                title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                                newPrice="139.000đ"
                                oldPrice=""
                                unit="Hộp"
                            />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* best seller */}
            <div className="max-w-[1200px] mx-auto my-0 py-8">
                <div className="flex flex-wrap -mx-1 px-1">
                    <div className="flex-[0_0_100%] max-w-full flex items-center mb-4">
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
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                        </svg>

                        <h3 className="px-1  text-[20px] text-[#000] font-medium capitalize">
                            Bán Chạy Nhất
                        </h3>
                    </div>
                </div>
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-1 ">
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                    <ProductMain
                        to=""
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                        newPrice="81.000đ"
                        oldPrice=""
                        unit="chai"
                    />
                </div>
            </div>

            {/* protect  */}
            <div
                className="max-w-full"
                style={{
                    backgroundImage:
                        'url(' +
                        'https://nhathuoclongchau.com.vn/frontend_v3/images/BG.png' +
                        ')',
                }}
            >
                <div className="max-w-[1200px] mx-auto my-0 py-8">
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <h1 className="font-bold text-[40px] text-center">
                                BẢO VỆ
                            </h1>
                            <p className="text-[28px] text-center">
                                Sức khoẻ người thân
                            </p>
                        </div>
                        <div className="px-1 ">
                            <ProtectItem
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/me-be.png"
                                title="MẸ VÀ BÉ"
                                to=""
                                more="Tìm hiểu thêm"
                            />
                        </div>
                        <div className=" px-1">
                            <ProtectItem
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/nguoicaotuoi.png"
                                title="NGƯỜI GIÀ"
                                to=""
                                more="Tìm hiểu thêm"
                            />
                        </div>
                        <div className=" px-1">
                            <ProtectItem
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/treem.png"
                                title="TRẺ EM"
                                to=""
                                more="Tìm hiểu thêm"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* product by object  */}
            <div className="max-w-[1200px] mx-auto my-0 py-8">
                <div className="grid grid-cols-2 gap-4 ">
                    <div className=" max-w-full flex items-center mb-4">
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
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                        </svg>

                        <h3 className="px-1  text-[20px] text-[#000] font-medium capitalize ">
                            Sản Phẩm Theo Đối Tượng
                        </h3>
                    </div>
                </div>
                <div className=" grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
                    <div className="max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="chai"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                            title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                            newPrice="81.000đ"
                            oldPrice=""
                            unit="chai"
                        />
                    </div>
                    <div className=" max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="chai"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                            title="
                            Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                            newPrice="81.000đ"
                            oldPrice=""
                            unit="chai"
                        />
                    </div>
                    <div className=" max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="Hộp 2 Vỉ x 15 Viên"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                            title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                            newPrice="364.000đ"
                            oldPrice=""
                            unit="hộp"
                        />
                    </div>
                    <div className="max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="Hộp 2 Vỉ x 15 Viên"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                            title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                            newPrice="364.000đ"
                            oldPrice=""
                            unit="hộp"
                        />
                    </div>
                    <div className="max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="Hộp 2 Vỉ x 15 Viên"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                            title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                            newPrice="364.000đ"
                            oldPrice=""
                            unit="hộp"
                        />
                    </div>
                    <div className="max-w-full flex items-center px-1">
                        <ProductMain
                            to=""
                            label="Hộp 2 Vỉ x 15 Viên"
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                            title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                            newPrice="364.000đ"
                            oldPrice=""
                            unit="hộp"
                        />
                    </div>
                </div>
            </div>

            {/* Kiểm tra sức khoẻ */}
            <div
                className="max-w-full"
                style={{
                    backgroundImage:
                        'url(' +
                        'https://nhathuoclongchau.com.vn/frontend_v3/images/BG.png' +
                        ')',
                }}
            >
                <div className="max-w-[1200px] mx-auto my-0 py-8">
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-0 gap-y-2">
                        <div className="col-span-2 px-1">
                            <h1 className="font-bold text-[32px] text-center">
                                Kiểm tra sức khoẻ
                            </h1>
                            <p className="text-[16px] text-center ">
                                Tiện ích giúp Quý khách kiểm tra tình trạng sức
                                khỏe dựa trên đánh giá từ các chuyên gia
                            </p>
                        </div>
                        <div className=" px-1">
                            <ProtectItem
                                img="https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach1.png"
                                title="Khả năng trào ngược dạ dày"
                                more="Kiểm tra ngay"
                                to=""
                            />
                        </div>
                        <div className=" px-1">
                            <ProtectItem
                                img="https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach2.png"
                                title="Nguy cơ phụ thuộc bình xịt cắt cơn"
                                more="Kiểm tra ngay"
                                to=""
                            />
                        </div>
                        <div className=" px-1">
                            <ProtectItem
                                img="https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach3.png"
                                title="Sàng lọc nguy cơ mắc bệnh tim mạch"
                                more="Kiểm tra ngay"
                                to=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* view  */}
            <div className="bg-[#edf2f8] max-w-full">
                <div className="max-w-[1200px] mx-auto my-0 py-8">
                    <div className="flex flex-wrap -mx-1 ">
                        <div className="flex-[0_0_100%] max-w-full flex items-center mb-4">
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
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <h3 className="px-1  text-[20px] text-[#000] font-medium capitalize">
                                Vừa mới xem
                            </h3>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap -mx-1 ">
                        
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                                title="
                                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                                newPrice="81.000đ"
                                oldPrice=""
                                unit="chai"
                            />
                        </div>
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="chai"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                                title="
                                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                                newPrice="81.000đ"
                                oldPrice=""
                                unit="chai"
                            />
                        </div>
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="Hộp 2 Vỉ x 15 Viên"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                newPrice="364.000đ"
                                oldPrice=""
                                unit="hộp"
                            />
                        </div>
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="Hộp 2 Vỉ x 15 Viên"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                newPrice="364.000đ"
                                oldPrice=""
                                unit="hộp"
                            />
                        </div>
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="Hộp 2 Vỉ x 15 Viên"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                newPrice="364.000đ"
                                oldPrice=""
                                unit="hộp"
                            />
                        </div>
                        <div className="flex-[0_0_20%] max-w-full flex items-center px-1">
                            <ProductMain
                                to=""
                                label="Hộp 2 Vỉ x 15 Viên"
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                newPrice="364.000đ"
                                oldPrice=""
                                unit="hộp"
                            />
                        </div>
                    </div> */}

                    <div className="pb-8">
                        <Slider {...settings3}>
                            <div className=" px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/06/00028876-vien-sui-khong-duong-immune-60mg-tuyp-20-vien-2855-62ae_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                            <div className="max-w-full px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                            <div className="max-w-full px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                            <div className="max-w-full px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                            <div className="max-w-full px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                            <div className="max-w-full px-1">
                                <ProductMain
                                    to=""
                                    label="Hộp 2 Vỉ x 15 Viên"
                                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/10/00031036-omexxel-ginkgo-120-2x15-5958-633e_large.jpg"
                                    title="Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)"
                                    newPrice="364.000đ"
                                    oldPrice=""
                                    unit="hộp"
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className="grid 2xl:grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/drug-double.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">
                                    THUỐC CHÍNH HÃNG
                                </h3>
                                <p className="text-[#334155]">
                                    đa dạng và chuyên sâu
                                </p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-reload-vector.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">
                                    ĐỔI TRẢ TRONG 30 NGÀY
                                </h3>
                                <p className="text-[#334155]">
                                    kể từ ngày mua hàng
                                </p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-guarantee-vector.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">
                                    CAM KẾT 100%
                                </h3>
                                <p className="text-[#334155]">
                                    chất lượng sản phẩm
                                </p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-shipping.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">
                                    MIỄN PHÍ VẬN CHUYỂN
                                </h3>
                                <p className="text-[#334155]">
                                    theo chính sách giao hàng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-w-[1200px]">
                        <div className="flex flex-wrap -mx-1">
                            <div className="flex-[0_0_100%] px-1">
                                <NavLink to="">
                                    <img
                                        src="https://nhathuoclongchau.com.vn/frontend_v3/images/chuyen-trang-du-an/banner-home-v2.png"
                                        alt="banner"
                                        className="object-cover"
                                    />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#072d94] max-w-full">
                <div className="max-w-[1200px] mx-auto my-0 ">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg::grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 py-3">
                        <NavLink
                            to=""
                            className="text-[#fff]  flex items-center "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 mr-[14px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                            <p className="text-2xl ">
                                Xem hệ thống nhà thuốc toàn quốc
                            </p>
                        </NavLink>
                        <NavLink
                            to=""
                            className="text-[#fff] font-bold bg-[#597db9] px-8 rounded-3xl h-[36px] flex items-center mx-auto justify-end"
                        >
                            Xem danh sách nhà thuốc
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
