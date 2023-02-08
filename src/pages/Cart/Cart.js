import { useState } from 'react';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';

function Cart() {
    const [showModal, setShowModal] = useState(false);
    const [checkAll, setCheckAll] = useState(true);

    function outOfStock() {
        return (
            <div>
                <div>
                    <div className="mb-3 flex items-center text-orange-400 text-xs">
                        Sản phẩm đang tạm hết hàng
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-evenly max-sm:justify-start">
            {/* <CartEmpty></CartEmpty> */}
            <div className="border px-2 py-3 rounded-xl">
                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="flex text-sm my-3 w-80">
                                <span
                                    onClick={() => setCheckAll(!checkAll)}
                                    className={`rounded-full p-1 mr-3 w-5 h-5 flex items-center justify-center text-white cursor-pointer ${
                                        checkAll
                                            ? 'bg-sky-700 border border-sky-700'
                                            : 'border border-black'
                                    }`}
                                >
                                    {checkAll ? (
                                        <i className="fa-solid fa-check"></i>
                                    ) : null}
                                </span>
                                Chọn tất cả (3)
                            </div>
                            <div className="text-sm w-28 text-center max-sm:hidden ">
                                Giá thành
                            </div>
                            <div className="text-sm w-28 text-center max-sm:hidden ">
                                Số lượng
                            </div>
                            <div className="text-sm w-24 text-center max-sm:hidden ">
                                Đơn vị
                            </div>
                        </div>
                    </div>
                    <div>
                        {<CartItem checkAll={checkAll}></CartItem>}
                        {outOfStock()}
                        {<CartItem checkAll={checkAll}></CartItem>}
                        {<CartItem checkAll={checkAll}></CartItem>}
                    </div>
                </div>
            </div>
            <div className="z-50 w-60 bottom-0 bg-white border-2 h-fit py-4 px-3 sm:rounded-3xl max-sm:rounded-t-3xl max-sm:w-screen max-sm:fixed">
                <div className={`${showModal ? 'block' : 'hidden'} sm:block`}>
                    <div className="flex justify-between my-2">
                        <h5 className="sm:text-xs max-sm:text-sm text-slate-600">
                            Tổng tiền
                        </h5>
                        <h5 className="sm:text-xs max-sm:text-sm">824.400đ</h5>
                    </div>
                    <div className="flex justify-between my-2">
                        <h5 className="sm:text-xs max-sm:text-sm text-slate-600">
                            Giảm giá trực tiếp
                        </h5>
                        <h5 className="sm:text-xs max-sm:text-sm">0đ</h5>
                    </div>
                    <div className="flex justify-between my-2">
                        <h5 className="sm:text-xs max-sm:text-sm text-slate-600">
                            Giảm giá điểm thưởng
                        </h5>
                        <h5 className="sm:text-xs max-sm:text-sm">824.400đ</h5>
                    </div>
                    <div className="flex justify-between my-2">
                        <h5 className="sm:text-xs max-sm:text-sm text-slate-600">
                            Tiết kiệm được
                        </h5>
                        <h5 className="sm:text-xs max-sm:text-sm">0đ</h5>
                    </div>
                </div>
                <div className="max-sm:flex justify-between items-center">
                    <div className="flex max-sm:flex-col justify-between sm:border-t mt-3 py-3">
                        <h4 className="text-ms font-semibold">Tạm tính</h4>
                        <h4
                            className="text-base text-blue-700 font-bold flex items-center"
                            onClick={() => setShowModal(!showModal)}
                        >
                            818.000đ
                            <span
                                className={`sm:hidden ml-2 duration-300 ${
                                    showModal ? 'rotate-180' : 'rotate-0'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="black"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </h4>
                    </div>
                    <button className="w-full max-sm:w-5/12 max-sm:py-4 sm:py-2 rounded-3xl h-fit text-center bg-sky-600 text-white text-sm cursor-pointer ">
                        Đặt hàng (2)
                    </button>
                </div>
                <div className="text-center mt-5 max-sm:hidden">
                    <h6 className="text-xs text-slate-400">
                        Nếu tiến hành đặt hàng, bạn đồng ý
                    </h6>
                    <h6 className="decoration-solid	text-xs underline text-slate-400">
                        Điều khoản của nhà divuốc
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Cart;
