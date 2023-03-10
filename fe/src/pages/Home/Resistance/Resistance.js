import Slider from 'react-slick';
import ProductAds from '~/components/ProductAds';

function Resistance() {
    const settings2 = {
        className: 'flex flex-wrap -mx-1 mt-4',
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
                    slidesToShow: 5,
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
                    slidesToShow: 3,
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
        <div className="bg-[#4e70d0] max-w-full">
            <div className="max-w-[1200px] mx-auto my-0 py-8">
                <div className="flex flex-wrap -mx-1 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4">
                    <div className="flex-[0_0_100%] max-w-full flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-[#fff] mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                            />
                        </svg>
                        <h3 className="px-1  text-[20px] text-[#fff] font-bold capitalize line-clamp-1">
                            Sản Phẩm Tăng Sức Đề Kháng
                        </h3>
                    </div>
                </div>

                <Slider {...settings2}>
                    <ProductAds
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                        title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                        newPrice="30.000đ"
                        oldPrice=""
                        unit="Chai"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                        title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                        newPrice="30.000đ"
                        oldPrice=""
                        unit="Chai"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                        title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                        newPrice="30.000đ"
                        oldPrice=""
                        unit="Chai"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="chai"
                        img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG"
                        title="Nước biển sâu sạch thông mũi dành cho trẻ em Xisat (75ml)"
                        newPrice="30.000đ"
                        oldPrice=""
                        unit="Chai"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                    <ProductAds
                        label="1 Hộp x 60 Viên"
                        img=" https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/12/00032942-b-complex-vitamin-royal-care-60v-5253-61c0_large.jpg"
                        title="Viên uống B Complex Vitamin Royal Care giảm mệt mỏi, căng thẳng (60 viên)"
                        newPrice="139.000đ"
                        oldPrice=""
                        unit="Hộp"
                    />
                </Slider>
            </div>
        </div>
    );
}

export default Resistance;
