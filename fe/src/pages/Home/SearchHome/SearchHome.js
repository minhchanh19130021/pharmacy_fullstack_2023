import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import ResultSearchItem from '~/components/ResultSearchItem';

function SearchHome() {
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
    return (
        <div
            className="search max-w-[1200px] mx-auto  h-[252px] shadow-md px-[80px] py-6  bg-[#fff] rounded-md my-8  "
            ref={ref}
            onClick={handleClick}
        >
            <h1 className="font-bold text-[32px] mb-4 line-clamp-1 ">Tra Cứu Thuốc, TPCN, Bệnh Lý...</h1>

            {/* search form pc */}
            <form className="flex min-w-[300px] ">
                <div className="relative w-full">
                    <input
                        placeholder="Nhập từ khóa..."
                        className="rounded-3xl pl-6 pr-4 border border-[#d8e0e8] outline-0 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] sm:h-[54px] xs:h-[54px] cs:h-[54px] w-full rounded-r-none focus:border-[#072d94]"
                        onChange={handleChange}
                    />
                    {/* modal result search  */}
                    {showHintSearch.length !== 0 && (
                        <div className="results absolute left-0 bg-[#ffffff] w-full shadow-2xl rounded-lg z-10">
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </NavLink>
                        </div>
                    )}
                </div>

                <button
                    className="bg-[#1d48ba] rounded-3xl h-[54px] px-[38px] rounded-l-none 2xl:block xl:block lg:block md:block sm:block xs:block cs:block"
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
                    <div className="search-form__header flex items-center shadow-xl py-2 pl-[34px] pr-[10px] 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4 ">
                        <div className="flex items-center border border-[#d8e0e8]  rounded-l-3xl w-full ">
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                            onClick={() => setShowSearchMobile(!showSearchMobile)}
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </NavLink>
                    </div>
                    <div></div>
                </form>
            )}
        </div>
    );
}

export default SearchHome;
