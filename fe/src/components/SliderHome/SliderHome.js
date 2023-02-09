
import Slider from 'react-slick';

function SliderHome() {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1675737458-BWPA-cam-cum-thang-2.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1675735783-rTy2-push-tpcn-t2-2023.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1675045477-Cxhs-kien-tao-hanh-phuc-t2-2023.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default SliderHome;
