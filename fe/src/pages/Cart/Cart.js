import { useState } from 'react';
// import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import Slider from 'react-slick';
import ProductSeller from '~/components/ProductSeller';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: 'absolute',
                    backgroundColor: '#003366',
                    color: 'blue',
                    left: '-2%',
                    borderRadius: '100%',
                    padding: 0,
                    margin: 0,
                    paddingTop: '1px',
                    paddingRight: '21px',
                    zIndex: 5,
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
                    right: '-2%',
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
            <div className="w-full sm:flex flex-wrap justify-evenly max-sm:justify-start ">
                {/* <CartEmpty></CartEmpty> */}
                <div className="px-1 pb-3 rounded-xl">
                    <div className="bg-white sm:mr-3 px-3 rounded-xl ">
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
                                <div className="text-sm w-32 text-center max-sm:hidden ">
                                    Giá thành
                                </div>
                                <div className="text-sm w-20 text-center max-sm:hidden ">
                                    Số lượng
                                </div>
                                <div className="text-sm w-32 text-center max-sm:hidden ">
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
                    <div className="sm:w-[700px] my-3">
                        <h2 className="font-semibold">Sản phẩm vừa xem</h2>
                        <Slider {...settings} className="m-0 p-0 relative">
                            {Array.from({ length: 6 }, (v, i) => (
                                <div key={i} className="">
                                    <div className="max-sm:px-1 sm:px-3 py-5">
                                        <ProductSeller
                                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/06/00500184-sua-nutren-junior-nestle-health-science-hop-850g-2256-62a8_large.jpg"
                                            name="Sữa bột Nestlé Nutren Junior hỗ trợ hệ tiêu hóa giúp trẻ hấp thu dinh dưỡng (850g)"
                                            newPrice="591.000đ"
                                            unit="Hộp"
                                            oldPrice=""
                                            backgroundColor="bg-white"
                                            py="sm:py-5 max-sm:py-4"
                                            px="max-sm:px-2 sm:px-5"
                                            borderRadius="rounded-xl"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="sticky h-fit top-0 flex">
                    <div className="z-10 w-72 border-2 bottom-0 bg-white h-fit py-4 px-3 sm:rounded-3xl max-sm:rounded-t-3xl max-sm:w-screen max-sm:fixed">
                        <div
                            className={`${
                                showModal ? 'block' : 'hidden'
                            } sm:block`}
                        >
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">
                                    Tổng tiền
                                </h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">
                                    824.400đ
                                </h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">
                                    Giảm giá trực tiếp
                                </h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">
                                    0đ
                                </h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">
                                    Giảm giá điểm thưởng
                                </h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">
                                    824.400đ
                                </h5>
                            </div>
                            <div className="flex justify-between my-2">
                                <h5 className="sm:text-[15px] max-sm:text-sm text-slate-600">
                                    Tiết kiệm được
                                </h5>
                                <h5 className="sm:text-[15px] max-sm:text-sm">
                                    0đ
                                </h5>
                            </div>
                        </div>
                        <div className="max-sm:flex justify-between items-center">
                            <div className="flex max-sm:flex-col justify-between sm:border-t mt-3 py-3">
                                <h4 className="text-ms font-semibold">
                                    Tạm tính
                                </h4>
                                <h4
                                    className="text-base text-blue-700 font-bold flex items-center"
                                    onClick={() => setShowModal(!showModal)}
                                >
                                    818.000đ
                                    <span
                                        className={`sm:hidden ml-2 duration-300 ${
                                            showModal
                                                ? 'rotate-180'
                                                : 'rotate-0'
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
                            <h6 className="decoration-solid	text-xs font-semibold underline text-slate-600">
                                Điều khoản của nhà thuốc
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
