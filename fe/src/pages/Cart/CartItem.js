import { useEffect, useState } from 'react';

function CartItem(props) {
    const [quantity, setQuantity] = useState(1);
    const [check, setCheck] = useState(true);
    const [showUnit, setShowUnit] = useState(false);
    useEffect(() => {
        setCheck(props.checkAll);
    }, [props.checkAll]);

    return (
        <div className="border-t flex items-center  py-3 px-3 hover:bg-[#f5f5f5] transition-all">
            <div className="flex mr-1">
                <div className="flex items-center text-sm my-3">
                    <span
                        onClick={() => setCheck(!check)}
                        className={`rounded-full p-1 mr-3 w-5 h-5 flex items-center justify-center text-white cursor-pointer ${
                            check ? 'bg-sky-700 border border-sky-700' : 'border border-black'
                        }`}
                    >
                        {check ? <i className="fa-solid fa-check"></i> : null}
                    </span>
                </div>
                <div className="border border-gray-100 p-1 rounded-md mr-2 max-w-sm	 w-12 h-fit">
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2023/01/00005713-panadol-extra-do-500mg-180v-sanofi-3541-63d7_large.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="flex flex-wrap items-center justify-between">
                    <span className="text-xs w-56 sm:mr-10">
                        Thuốc Panadol Exdiva đỏ GSK giúp giảm đau, hạ sốt (15 vỉ x 12 viên)
                    </span>
                    <span className="text-blue-900 text-base font-bold w-24 my-2">6.400đ</span>
                </div>
                <div className="flex justify-between max-sm:justify-start w-44">
                    <div className="text-center p-0 mr-2">
                        <button
                            className="border px-1 rounded-l-full text-sm text-gray-500 cursor-pointer"
                            onClick={() => {
                                if (quantity > 1) setQuantity(Number(quantity) - 1);
                            }}
                        >
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                            className="text-sm w-6 border-t border-b text-center outline-0 border-border-slate-100 text-gray-500"
                            type="text"
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                        ></input>
                        <button
                            className="border px-1 rounded-r-full text-sm cursor-pointer"
                            onClick={() => {
                                setQuantity(Number(quantity) + 1);
                            }}
                        >
                            <i className="fa-solid fa-plus  text-gray-500"></i>
                        </button>
                    </div>
                    <div className="px-2 py-1 w-16 rounded-full  border text-sm cursor-pointer relative">
                        <div className="flex justify-between items-center" onClick={() => setShowUnit(!showUnit)}>
                            <span className="text-xs">Hộp</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div
                            className={`${
                                showUnit ? 'block' : 'hidden'
                            } ease-in-out duration-300 px-1 text-sm rounded-lg cursor-pointer w-56 border py-2 bg-white absolute z-20 right-0 top-8`}
                        >
                            <div className="flex justify-between px-2 border-b py-2">
                                <div className="flex">
                                    <button className="rounded-full w-5 h-5 flex items-center justify-center mr-2 bg-sky-700 text-white">
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <span>Hộp</span>
                                </div>
                                <span>280.000đ</span>
                            </div>
                            <div className="flex justify-between px-2 border-b-2 py-2">
                                <div className="flex">
                                    <button className="rounded-full w-5 h-5 flex items-center justify-center mr-2 bg-sky-700 text-white">
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <span>Hộp</span>
                                </div>
                                <span>280.000đ</span>
                            </div>
                            <div className="flex justify-between px-2 border-b-2 py-2">
                                <div className="flex">
                                    <button className="rounded-full w-5 h-5 flex items-center justify-center mr-2 bg-sky-700 text-white">
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <span>Hộp</span>
                                </div>
                                <span>280.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-1 ml-3 max-sm:self-start">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default CartItem;
