import Slider from 'react-slick';

function SliderHome() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="2xl:block xl:block lg:block md:block sm:hidden xs:hidden cs:hidden ">
            <Slider {...settings}>
                {/* <div className="max-w-full mx-auto bg-banner h-[700px] ">
                    <div className="max-w-[1200px] mx-auto flex justify-center items-center h-full">
                        <div>
                            <h2 className="uppercase font-bold text-[#f04578] text-7xl mb-2">hãy đánh răng mỗi ngày</h2>
                            <h2 className="uppercase font-bold text-[#016cc9] text-5xl">để răng chắc khỏe</h2>
                        </div>

                        <div className="bg-[#ccc] rounded-full before:w-[500px] before:h-[500px] before:rounded-full before:bg-[#bd6868]">
                            <img
                                src={require(`../../assets/img/bn.png`)}
                                alt="img"
                                className=" object-cover object-center h"
                            />
                        </div>
                    </div>
                </div> */}
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1677150972-hsMN-cam-cum.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1677654059-RTP9-chuyen-trang-sanofi.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/1600x400/filters:quality(100):fill(white)/https://nhathuoclongchau.com.vn/upload/slide/1676971969-r79p-co-qua-anh-duoc-ve-nha-8-3.png"
                        alt="img"
                        className="w-full h-[475px] object-cover"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default SliderHome;
