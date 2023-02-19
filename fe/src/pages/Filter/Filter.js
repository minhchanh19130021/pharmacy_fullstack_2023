import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import Breadcrumb from '~/components/Breadcrumb';
import { ContentNavModalItem } from '~/components/NavModal';
import PharmacyBranch from '~/components/PharmacyBranch';
import ProductMain from '~/components/ProductMain';
import BestSeller from './BestSeller';
import FilterCategory from './FilterCategory';
import FilterItem from './FilterItem';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import CurrencyFormat from 'react-currency-format';

function Filter() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
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
    const [active, setActive] = useState('1');

    const handleClick = (event) => {
        setActive(event.target.id);
    };
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000000);
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto my-0 mb-4 ">
                <Breadcrumb />
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1  sm:grid-cols-1  xs:grid-cols-1 gap-4 px-1 ">
                    <div className="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
                        <FilterItem title="Thương hiệu">
                            <div className="mb-2">
                                <input type="checkbox" id="all" name="all" className="mr-2 cursor-pointer" />
                                <label htmlFor="all" className="cursor-pointer">
                                    Tất cả
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="child" name="child" className="mr-2 cursor-pointer" />
                                <label htmlFor="child" className="cursor-pointer">
                                    Aderma
                                </label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Banobagi
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Cetaphil
                                </label>
                            </div>
                        </FilterItem>
                        <FilterItem title="Thương hiệu">
                            <div className="mb-2">
                                <input
                                    type="checkbox"
                                    id="all"
                                    name="all"
                                    className="mr-2 cursor-pointer"
                                    defaultChecked
                                />
                                <label htmlFor="all" className="cursor-pointer">
                                    Tất cả
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="child" name="child" className="mr-2 cursor-pointer" />
                                <label htmlFor="child" className="cursor-pointer">
                                    Aderma
                                </label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Banobagi
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Cetaphil
                                </label>
                            </div>
                        </FilterItem>
                        <FilterItem title="Thương hiệu">
                            <div className="mb-2">
                                <input
                                    type="checkbox"
                                    id="all"
                                    name="all"
                                    className="mr-2 cursor-pointer"
                                    defaultChecked
                                />
                                <label htmlFor="all" className="cursor-pointer">
                                    Tất cả
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="child" name="child" className="mr-2 cursor-pointer" />
                                <label htmlFor="child" className="cursor-pointer">
                                    Aderma
                                </label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Banobagi
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Cetaphil
                                </label>
                            </div>
                        </FilterItem>
                        <FilterItem title="Thương hiệu">
                            <div className="mb-2">
                                <input
                                    type="checkbox"
                                    id="all"
                                    name="all"
                                    className="mr-2 cursor-pointer"
                                    defaultChecked
                                />
                                <label htmlFor="all" className="cursor-pointer">
                                    Tất cả
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="child" name="child" className="mr-2 cursor-pointer" />
                                <label htmlFor="child" className="cursor-pointer">
                                    Aderma
                                </label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Banobagi
                                </label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" id="older" name="older" className="mr-2 cursor-pointer" />
                                <label htmlFor="older" className="cursor-pointer">
                                    Cetaphil
                                </label>
                            </div>
                        </FilterItem>
                        <div className="filter-item">
                            <h3 className="mb-1 font-medium">Giá bán</h3>
                            <div className="flex items-center justify-between">
                                <CurrencyFormat
                                    type="text"
                                    className="w-[100px] border border-[#d3c2c2] outline-none px-1 py-1"
                                    value={minValue}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                />
                                -
                                <CurrencyFormat
                                    type="text"
                                    className="w-[100px] border border-[#d3c2c2] outline-none px-1 py-1"
                                    value={maxValue}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                />
                            </div>
                            <MultiRangeSlider
                                barInnerColor="#0a6bff"
                                ruler="false"
                                className="border-none shadow-none h-[2px]"
                                min={0}
                                max={1000000}
                                step={5}
                                minValue={minValue}
                                maxValue={maxValue}
                                onInput={(e: ChangeResult) => {
                                    setMinValue(e.minValue);
                                    setMaxValue(e.maxValue);
                                }}
                                label="false"
                            />
                        </div>
                    </div>
                    <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-2 xs:col-span-2">
                        <div className="flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 mr-2 bg-[#1d48ba] rounded-full px-1 text-[#fff]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>

                            <h3 className="font-medium">Chăm sóc cá nhân</h3>
                        </div>
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 mb-8">
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                            <ContentNavModalItem
                                to=""
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                                title=" Vi sinh - Probiotic"
                            />
                        </div>
                        <div className="filters grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4  mb-8">
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                            <FilterCategory
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png"
                                title="Vệ sinh cá nhân"
                                quantity="134"
                                to=""
                            >
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Nước rửa tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                                <NavLink to="" className="text-[#1d48ba] text-sm pb-2">
                                    Vệ sinh tay
                                </NavLink>
                            </FilterCategory>
                        </div>
                        <div className="mb-8">
                            <BestSeller />
                        </div>
                        <div>
                            <div className="flex justify-between flex-wrap items-center pb-3 mb-4">
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#fff] mr-1 px-1 py-1 bg-[#ef4444] rounded-full"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                        />
                                    </svg>

                                    <h3 className="text-[#000] font-medium text-[20px] select-none">
                                        Sản Phẩm Nổi Bật
                                    </h3>
                                </div>
                                <div>
                                    <button
                                        key={1}
                                        className={
                                            active === '1'
                                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                                        }
                                        id={'1'}
                                        onClick={handleClick}
                                    >
                                        Bán chạy
                                    </button>
                                    <button
                                        key={2}
                                        className={
                                            active === '2'
                                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                                        }
                                        id={'2'}
                                        onClick={handleClick}
                                    >
                                        Hàng mới
                                    </button>
                                    <button
                                        key={3}
                                        className={
                                            active === '3'
                                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                                        }
                                        id={'3'}
                                        onClick={handleClick}
                                    >
                                        Giá thấp
                                    </button>
                                    <button
                                        key={4}
                                        className={
                                            active === '4'
                                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                                        }
                                        id={'4'}
                                        onClick={handleClick}
                                    >
                                        Giá cao
                                    </button>
                                </div>
                            </div>
                            <div className=" grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
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
                    </div>
                </div>
            </div>
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

                            <h3 className="px-1  text-[20px] text-[#000] font-medium capitalize">Vừa mới xem</h3>
                        </div>
                    </div>

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
                                <h3 className="font-bold text-[#072d94]">THUỐC CHÍNH HÃNG</h3>
                                <p className="text-[#334155]">đa dạng và chuyên sâu</p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-reload-vector.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">ĐỔI TRẢ TRONG 30 NGÀY</h3>
                                <p className="text-[#334155]">kể từ ngày mua hàng</p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-guarantee-vector.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">CAM KẾT 100%</h3>
                                <p className="text-[#334155]">chất lượng sản phẩm</p>
                            </div>
                        </div>
                        <div className=" px-1 flex items-center">
                            <img
                                src="https://nhathuoclongchau.com.vn/frontend_v3/images/ic-shipping.svg"
                                alt="img"
                                className="w-[48px] h-[48px] object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-[#072d94]">MIỄN PHÍ VẬN CHUYỂN</h3>
                                <p className="text-[#334155]">theo chính sách giao hàng</p>
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
            <PharmacyBranch />
        </div>
    );
}

export default Filter;
