import { useState } from 'react';
import ProductMain from '~/components/ProductMain';

function Object() {
    const [active, setActive] = useState('1');

    const handleClickFilter = (event) => {
        setActive(event.target.id);
    };

    return (
        <div className="max-w-[1200px] mx-auto my-0 py-8">
            <div className="2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 ">
                <div className=" max-w-full flex flex-wrap items-center justify-between mb-4">
                    <div className="flex items-center">
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

                        <h3 className="px-1  text-[20px] text-[#000] font-bold capitalize ">Sản Phẩm Theo Đối Tượng</h3>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-2">Lọc theo</p>
                        <button
                            key={1}
                            className={
                                active === '1'
                                    ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1 '
                                    : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                            }
                            id={'1'}
                            onClick={handleClickFilter}
                        >
                            Trẻ Em
                        </button>
                        <button
                            key={2}
                            className={
                                active === '2'
                                    ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                    : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                            }
                            id={'2'}
                            onClick={handleClickFilter}
                        >
                            Người Cao Tuổi
                        </button>
                        <button
                            key={3}
                            className={
                                active === '3'
                                    ? 'border border-[#d8e0e8] text-[#fff] text-sm bg-[#1d48ba] rounded-3xl px-4 py-1 mr-1'
                                    : 'border border-[#d8e0e8] text-[#52637a] text-sm bg-[#fff] rounded-3xl px-4 py-1 mr-1'
                            }
                            id={'3'}
                            onClick={handleClickFilter}
                        >
                            Phụ Nữ Cho Con Bú
                        </button>
                    </div>
                </div>
            </div>
            <div className=" grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4">
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
    );
}

export default Object;
