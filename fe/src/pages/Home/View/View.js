import Slider from 'react-slick';
import ProductMain from '~/components/ProductMain';

function View() {
    const settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="bg-[#edf2f8] max-w-full">
            <div className="max-w-[1200px] mx-auto my-0 py-8">
                <div className="flex flex-wrap -mx-1 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4 ">
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <h3 className="px-1  text-[20px] text-[#000] font-bold capitalize">Vừa mới xem</h3>
                    </div>
                </div>

                <Slider {...settings3} className="padding-respinsive">
                    <div className="!w-11/12 !flex !mx-auto !justify-center !items-center">
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
                    <div className="!w-11/12 !flex !mx-auto !justify-center !items-center">
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
                    <div className="!w-11/12 !flex !mx-auto !justify-center !items-center">
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
                    <div className="!w-11/12 !flex !mx-auto !justify-center !items-center">
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
                    <div className="!w-11/12 !flex !mx-auto !justify-center !items-center">
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
                </Slider>
            </div>
        </div>
    );
}

export default View;
