import { useState } from 'react';
import ProductMain from '~/components/ProductMain';

function FamousProducts() {
    const [active, setActive] = useState('1');

    const handleClick = (event) => {
        setActive(event.target.id);
    };
    return (
        <div>
            <div className="flex justify-between flex-wrap items-center pb-3 mb-4">
                <div className="flex items-center mb-1">
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

                    <h3 className="text-[#000] font-bold text-[20px] select-none ">Sản Phẩm Nổi Bật</h3>
                </div>
                <div>
                    <button
                        key={1}
                        className={
                            active === '1'
                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1 mb-1'
                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1 mb-1'
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
                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1 mb-1'
                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1 mb-1'
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
                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1 mb-1'
                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1 mb-1'
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
                                ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1 mb-1'
                                : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1 mb-1'
                        }
                        id={'4'}
                        onClick={handleClick}
                    >
                        Giá cao
                    </button>
                </div>
            </div>
            <div className=" grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 cs:grid-cols-1 gap-4 ">
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
    );
}

export default FamousProducts;
