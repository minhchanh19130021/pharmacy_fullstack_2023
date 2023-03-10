import { useState, useRef } from 'react';
// import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import Slider from 'react-slick';
import ProductSeller from '~/components/ProductSeller';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CartEmpty from './CartEmpty';



function Cart() {
    const voucherRef = useRef();
    const [showModal, setShowModal] = useState(false);
    const [checkAll, setCheckAll] = useState(true);
    const [showVouchers, setShowVouchers] = useState(false);

    function outOfStock() {

        return <p className="px-3 py-3 flex items-center text-[#ff4742] text-xs font-bold">Sản phẩm đang tạm hết hàng</p>;

    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: 'absolute',
                    backgroundColor: '#003366',
                    color: 'blue',
                    left: '0%',
                    borderRadius: '100%',
                    padding: 0,
                    margin: 0,
                    paddingTop: '1px',
                    paddingRight: '21px',
                    zIndex: 1,
                }}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: 'absolute',
                    backgroundColor: '#003366',
                    color: 'blue',
                    right: '0%',
                    borderRadius: '100%',
                    border: 'none',
                    paddingTop: '1px',
                    paddingRight: '21px',
                    margin: 0,
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (

        <div className="bg-[rgb(237,240,243)] py-5">
            <div className="max-w-[1200px] mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 cs:grid-cols-1 gap-4 padding-responsive ">
                {/* <CartEmpty></CartEmpty> */}
                <div className="px-1 pb-3 rounded-xl 2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1 cs:col-span-1 ">
                    <div className="bg-white sm:mr-3 rounded-xl ">
                        <div className="px-3 ">
                            <div className="flex items-center my-auto">
                                <div className="flex text-sm py-3 w-80 font-bold">

                                    <span
                                        onClick={() => setCheckAll(!checkAll)}
                                        className={`rounded-full p-1 mr-3 w-5 h-5 flex items-center justify-center text-white cursor-pointer ${
                                            checkAll ? 'bg-sky-700 border border-sky-700' : 'border border-black'
                                        }`}
                                    >
                                        {checkAll ? <i className="fa-solid fa-check"></i> : null}
                                    </span>

                                    <p>Chọn tất cả (3)</p>
                                </div>
                                <div className="text-sm w-32 text-center max-sm:hidden font-bold">Giá thành</div>
                                <div className="text-sm w-20 text-center max-sm:hidden font-bold">Số lượng</div>
                                <div className="text-sm w-32 text-center max-sm:hidden font-bold">Đơn vị</div>

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
                <div className="sticky h-fit top-0 flex">
                    <div className="z-50 w-72 border left-0 bottom-0 bg-[#ffff] h-fit py-4 px-3 sm:rounded-3xl max-sm:rounded-t-3xl max-sm:w-screen max-sm:fixed  transition-all">
                        <div className={`${showModal ? 'block' : 'hidden'} sm:block  animate-fadeBottomMobile`}>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">Tổng tiền</h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">824.400đ</h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">Giảm giá trực tiếp</h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">0đ</h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">Giảm giá điểm thưởng</h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">824.400đ</h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">Tiết kiệm được</h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">0đ</h5>
                            </div>
                        </div>
                        <div className="max-sm:flex justify-between items-center">
                            <div className="flex max-sm:flex-col justify-between sm:border-t mt-3 py-3 ">
                                <h4 className="text-ms font-semibold">Tạm tính</h4>


                                <h4
                                    className="text-[20px] text-[#1250dc] font-[600] tracking-[.005em] flex items-center"
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
                                            className="w-5 h-5 cursor-pointer"
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
                            <h6 className="text-xs text-slate-400">Nếu tiến hành đặt hàng, bạn đồng ý</h6>
                            <h6 className="decoration-solid	text-xs font-semibold underline text-slate-600">

                                Điều khoản của nhà thuốc
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`w-screen h-screen absolute bg-black opacity-50 top-0 z-40 ${
                    showVouchers ? 'block' : 'hidden'
                }`}
            ></div>
            <div
                ref={voucherRef}
                id="test"
                className={`opacity-100	z-40 absolute right-0 top-0 bg-white h-full max-sm:w-full ${
                    showVouchers ? 'block' : 'hidden'
                }`}
            >
                <div className="opacity-100 flex justify-between items-center text-2xl font-[500] p-5">
                    <p className="">Khuyến mại tặng bạn</p>
                    <span
                        className="cursor-pointer"
                        onClick={() => {
                            document.body.style.overflow = 'scroll';
                            setShowVouchers(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
                <div className="bg-[#edf0f3] py-3 h-screen z-50 border-4">
                    <p className="text-[#4a4f63] font-[600] px-5">Khuyến mại đơn hàng</p>
                    <div className="h-3/4 overflow-auto px-5">
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                        <Voucher></Voucher>
                    </div>
                    <div className="h-1/5 pb-10 w-full bg-white flex items-center rounded-2xl">
                        <p className="py-3 mx-5 w-full rounded-3xl h-fit text-center bg-sky-600 text-white text-sm cursor-pointer ">
                            Về giỏ hàng
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
