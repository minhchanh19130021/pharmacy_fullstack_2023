import Slider from 'react-slick';
import ProductMain from '~/components/ProductMain';

function RelatedProduct() {
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
    return (
        <div className="bg-[#edf2f8] max-w-full ">
            <div className="max-w-[1200px] mx-auto my-0 py-8 padding-responsive">
                <div className="flex flex-wrap ">
                    <div className="flex-[0_0_100%] max-w-full flex items-center mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3140/3140341.png"
                            alt="related-img"
                            className="w-7 h-7"
                        />

                        <h3 className="px-1  text-[20px] text-[#000] font-bold capitalize">Sản phẩm liên quan</h3>
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
            </div>
        </div>
    );
}

export default RelatedProduct;
