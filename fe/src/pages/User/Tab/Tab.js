import { useState } from 'react';

function Tab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <ul className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5  sm:grid-cols-1  xs:grid-cols-1 cs:grid-cols-1  gap-4 border  border-[#d8e0e8] bg-[#edf2f8] px-1 py-1 rounded-2xl">
                <li
                    onClick={() => toggleTab(1)}
                    className={
                        toggleState === 1
                            ? 'px-3 py-[6px]  bg-[#072d94] text-[#fff] rounded-xl w-full text-center cursor-pointer select-none'
                            : 'px-3 py-[6px]  bg-transparent text-[#52637a] rounded-xl w-full text-center cursor-pointer select-none'
                    }
                >
                    Tất cả
                </li>
                <li
                    onClick={() => toggleTab(2)}
                    className={
                        toggleState === 2
                            ? 'px-3 py-[6px]  bg-[#072d94] text-[#fff] rounded-xl w-full text-center cursor-pointer select-none'
                            : 'px-3 py-[6px]  bg-transparent text-[#52637a] rounded-xl w-full text-center cursor-pointer select-none'
                    }
                >
                    Chưa hoàn tất
                </li>
                <li
                    onClick={() => toggleTab(3)}
                    className={
                        toggleState === 3
                            ? 'px-3 py-[6px]  bg-[#072d94] text-[#fff] rounded-xl w-full text-center cursor-pointer select-none'
                            : 'px-3 py-[6px]  bg-transparent text-[#52637a] rounded-xl w-full text-center cursor-pointer select-none'
                    }
                >
                    Hoàn tất
                </li>
                <li
                    onClick={() => toggleTab(4)}
                    className={
                        toggleState === 4
                            ? 'px-3 py-[6px]  bg-[#072d94] text-[#fff] rounded-xl w-full text-center cursor-pointer select-none'
                            : 'px-3 py-[6px]  bg-transparent text-[#52637a] rounded-xl w-full text-center cursor-pointer select-none'
                    }
                >
                    Đã hủy
                </li>
                <li
                    onClick={() => toggleTab(5)}
                    className={
                        toggleState === 5
                            ? 'px-3 py-[6px]  bg-[#072d94] text-[#fff] rounded-xl w-full text-center cursor-pointer select-none'
                            : 'px-3 py-[6px]  bg-transparent text-[#52637a] rounded-xl w-full text-center cursor-pointer select-none'
                    }
                >
                    Trả hàng
                </li>
            </ul>
            <div className="tab-content">
                <div
                    className={
                        toggleState === 1
                            ? 'flex flex-col justify-center items-center pt-16 pb-10 animate-fadeBottomMobile'
                            : 'hidden'
                    }
                >
                    <img src="https://nhathuoclongchau.com.vn/frontend_v3/images/empty-chitiet.png" alt="non-order" />
                    <p className="mt-4 font-bold text-base">Quý khách chưa có đơn hàng nào 1</p>
                </div>
                <div
                    className={
                        toggleState === 2
                            ? 'flex flex-col justify-center items-center pt-16 pb-10 animate-fadeBottomMobile'
                            : 'hidden'
                    }
                >
                    <img src="https://nhathuoclongchau.com.vn/frontend_v3/images/empty-chitiet.png" alt="non-order" />
                    <p className="mt-4 font-bold text-base">Quý khách chưa có đơn hàng nào 2</p>
                </div>
                <div
                    className={
                        toggleState === 3
                            ? 'flex flex-col justify-center items-center pt-16 pb-10 animate-fadeBottomMobile'
                            : 'hidden'
                    }
                >
                    <img src="https://nhathuoclongchau.com.vn/frontend_v3/images/empty-chitiet.png" alt="non-order" />
                    <p className="mt-4 font-bold text-base">Quý khách chưa có đơn hàng nào 3</p>
                </div>
                <div
                    className={
                        toggleState === 4
                            ? 'flex flex-col justify-center items-center pt-16 pb-10 animate-fadeBottomMobile'
                            : 'hidden'
                    }
                >
                    <img src="https://nhathuoclongchau.com.vn/frontend_v3/images/empty-chitiet.png" alt="non-order" />
                    <p className="mt-4 font-bold text-base">Quý khách chưa có đơn hàng nào 4</p>
                </div>
                <div
                    className={
                        toggleState === 5
                            ? 'flex flex-col justify-center items-center pt-16 pb-10 animate-fadeBottomMobile'
                            : 'hidden'
                    }
                >
                    <img src="https://nhathuoclongchau.com.vn/frontend_v3/images/empty-chitiet.png" alt="non-order" />
                    <p className="mt-4 font-bold text-base">Quý khách chưa có đơn hàng nào 5</p>
                </div>
            </div>
        </>
    );
}

export default Tab;
