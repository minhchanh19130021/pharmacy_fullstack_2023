import Slider from 'react-slick';

function SliderHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1677728079-Ssmc-brauer-tang-de-khang.png"
                        alt="img1"
                        className=" h-[475px] object-cover "
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1676971969-r79p-co-qua-anh-duoc-ve-nha-8-3.png"
                        alt="img2"
                        className=" h-[475px] object-cover "
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1678076840-UxPd-sua-abbott.png"
                        alt="img3"
                        className=" h-[475px] object-cover "
                    />
                </div>
            </Slider>
        </div>
    );
}

export default SliderHome;
