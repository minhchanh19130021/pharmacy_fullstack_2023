import { useState } from 'react';
import Slider from 'react-slick';

function MainDetail() {
    const [showDetailImage, setShowDetailImage] = useState(false);
    const settings = {
        customPaging: function (i) {
            return (
                <div className="w-[132px] border rounded-md cursor-pointer px-4 py-4 hover:border-[#016cc9]">
                    <img
                        src={require(`../../../assets/img/slide0${i + 1}.png`)}
                        alt="slide-img"
                        className=" object-cover w-[100px] h-[100px] "
                    />
                </div>
            );
        },
        dots: true,
        dotsClass: 'grid grid-cols-4 gap-4 px-1',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const settingsModal = {
        customPaging: function (i) {
            return (
                <div className="w-[132px] flex mx-auto border rounded-md cursor-pointer px-4 py-4 hover:border-[#016cc9]">
                    <img
                        src={require(`../../../assets/img/slide0${i + 1}.png`)}
                        alt="slide-img"
                        className=" object-cover w-[100px] h-[100px] "
                    />
                </div>
            );
        },
        dots: true,
        dotsClass: 'grid grid-cols-4 gap-4 px-1',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [toggleClickUnit, setToggleClickUnit] = useState(false);
    return (
        <div className="main-detail grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6 ">
            <div
                className="img px-1"
                onClick={() => {
                    setShowDetailImage(!showDetailImage);
                }}
            >
                <Slider {...settings}>
                    <div className="select-none outline-none h-[576px] cursor-pointer">
                        <img
                            src={require('~/assets/img/slide01.png')}
                            alt="slide-img"
                            className="w-[432px] h-[432px] object-cover flex mx-auto "
                        />
                    </div>
                    <div className="select-none outline-none h-[576px] cursor-pointer">
                        <img
                            src={require('~/assets/img/slide02.png')}
                            alt="slide-img"
                            className="w-[432px] h-[432px] object-cover flex mx-auto"
                        />
                    </div>
                    <div className="select-none h-[576px] cursor-pointer">
                        <img
                            src={require('~/assets/img/slide03.png')}
                            alt="slide-img"
                            className="w-[432px] h-[432px] object-cover flex mx-auto"
                        />
                    </div>
                    <div className="select-none h-[576px] cursor-pointer">
                        <img
                            src={require('~/assets/img/slide04.png')}
                            alt="slide-img"
                            className="w-[432px] h-[432px] object-cover flex mx-auto"
                        />
                    </div>
                </Slider>
            </div>

            <div className="text px-1">
                <div className="header-text border-b pb-4 ">
                    <p className="text-base">
                        Thương hiệu:
                        <span className="text-[#1d48ba] uppercase"> Thành công</span>
                    </p>
                    <h3 className="text-[#072d94] text-[28px] font-bold">
                        Viên uống Trùng Thảo Gold Thành Công hỗ trợ dễ ngủ, ngủ sâu giấc (30 viên)
                    </h3>
                    <div className="flex justify-between items-center">
                        <span className="text-[#b6c0d7]">(00032348)</span>
                        <div className="text-sm">
                            <span className="px-2 border-r border-[#bb91a5] hover:underline cursor-pointer">
                                0 đánh giá
                            </span>
                            <span className="px-2 hover:underline cursor-pointer">23 bình luận</span>
                        </div>
                    </div>
                </div>
                <div className="center-text pt-4">
                    <div className="price">
                        <h3 className="text-[32px] font-medium">
                            173.000đ &#8260; <span className="text-2xl text-[#1e293b] font-normal">Hộp</span>
                        </h3>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="mr-2">Đơn vị bán: </p>
                        <select className="w-[200px] border outline-none">
                            <option>Hộp</option>
                            <option>Gói</option>
                            <option>Viên</option>
                        </select>
                    </div>
                    <div className="category mt-4">
                        <p className="font-medium">
                            Danh mục: &#160;
                            <span className="font-normal hover:underline text-[#1d48ba] cursor-pointer">
                                Hỗ trợ giấc ngủ ngon
                            </span>
                        </p>
                    </div>
                    <p className="font-medium mt-4">
                        Quy cách: &#160;
                        <span className="font-normal">Hộp 30 viên</span>
                    </p>
                    <p className="font-medium mt-4">
                        Nhà sản xuất: &#160;
                        <span className="font-normal">CÔNG TY DƯỢC PHẨM VÀ THƯƠNG MẠI THÀNH CÔNG - TNHH</span>
                    </p>
                    <p className="mt-4 font-medium">
                        Công dụng: &#160;
                        <span className="text-justify font-normal">
                            Trùng Thảo Gold hỗ trợ dễ ngủ, ngủ sâu giấc trong các trường hợp mất ngủ, ngủ kém. Hỗ trợ
                            tăng cường sức khỏe, nâng cao sức đề kháng.
                        </span>
                    </p>

                    <div className="flex items-center mt-4">
                        <p className="font-medium">Chọn số lượng &#160;</p>
                        <div className="modify-quantity flex items-center ">
                            <button className="px-[6px] border rounded-l-3xl  h-9">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <input
                                className="border outline-none hover:border-[#807b7b] h-9 w-10 text-center"
                                placeholder="1"
                            />
                            <button className="px-[6px] border rounded-r-3xl  h-9">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* button buy */}
                    <div className="flex items-center mt-4">
                        <button className="bg-[#1d48ba] rounded-[100px] font-bold text-[20px] uppercase text-[#fff] mr-4 max-w-full grow basis-0 h-[56px]	">
                            Chọn mua
                        </button>
                        <button className="bg-[#f59e0b] text-[#fff] font-bold uppercase px-[36px] rounded-[100px] h-[56px]">
                            Tìm nhà thuốc
                        </button>
                    </div>
                    <div className="commit border rounded-2xl mt-4">
                        <div className="commit-header">
                            <p className="font-medium uppercase text-center py-3 border-b">
                                NHÀ THUỐC LONG CHÂU CAM KẾT
                            </p>
                        </div>
                        <div className="commits flex items-center justify-between px-3 py-3">
                            <div className="commit-item flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-11 h-11 px-2 py-2 bg-[#e1e9ff] rounded-full text-[#1d48ba] mb-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>
                                <p className="font-medium">Đổi trả trong 30 ngày</p>
                                <p>kể từ ngày mua hàng</p>
                            </div>
                            <div className="commit-item flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-11 h-11 px-2 py-2 bg-[#e1e9ff] rounded-full text-[#1d48ba] mb-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                    />
                                </svg>

                                <p className="font-medium">Miễn phí 100%</p>
                                <p>đổi thuốc</p>
                            </div>
                            <div className="commit-item flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-11 h-11 px-2 py-2 bg-[#e1e9ff] rounded-full text-[#1d48ba] mb-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                    />
                                </svg>

                                <p className="font-medium">Miễn phí vận chuyển</p>
                                <p>theo chính sách giao hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDetailImage && (
                <>
                    <div
                        className="detail-img__overlay fixed top-0 left-0 z-50  w-screen h-screen bg-[rgb(67,67,67,0.6)]"
                        onClick={() => {
                            setShowDetailImage(!showDetailImage);
                        }}
                    ></div>
                    <div className="detail-img absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-50 bg-white w-[50%] min-w-[690px] px-10 py-10 rounded-lg">
                        <div className="detail-img__header flex items-center justify-between">
                            <p className="line-clamp-1">
                                Viên uống Gasso Max Vitamins For Life bổ sung enzym và các thảo mộc (30 viên)
                            </p>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 cursor-pointer px-2 py-2 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                                    />
                                </svg>
                                <button
                                    className="flex items-center bg-[#718198] px-2 py-1 rounded-lg text-[#fff]"
                                    onClick={() => {
                                        setShowDetailImage(!showDetailImage);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p>Đóng</p>
                                </button>
                            </div>
                        </div>
                        <div className="detail-img__content">
                            <Slider {...settingsModal}>
                                <div className="select-none outline-none h-[576px]">
                                    <img
                                        src={require('~/assets/img/slide01.png')}
                                        alt="slide-img"
                                        className="w-[432px] h-[432px] object-cover flex mx-auto hover:scale-110 cursor-pointer"
                                    />
                                </div>
                                <div className="select-none outline-none">
                                    <img
                                        src={require('~/assets/img/slide02.png')}
                                        alt="slide-img"
                                        className="w-[432px] h-[432px] object-cover flex mx-auto hover:scale-110 cursor-pointer"
                                    />
                                </div>
                                <div className="select-none outline-none">
                                    <img
                                        src={require('~/assets/img/slide03.png')}
                                        alt="slide-img"
                                        className="w-[432px] h-[432px] object-cover flex mx-auto hover:scale-110 cursor-pointer"
                                    />
                                </div>
                                <div className="select-none outline-none">
                                    <img
                                        src={require('~/assets/img/slide04.png')}
                                        alt="slide-img"
                                        className="w-[432px] h-[432px] object-cover flex mx-auto hover:scale-110 cursor-pointer"
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="detail-img__footer"></div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MainDetail;
