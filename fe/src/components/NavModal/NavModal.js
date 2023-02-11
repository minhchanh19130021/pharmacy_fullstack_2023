import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductSeller from '../ProductSeller';
import ContentNavModalItem from './ContentNavModalItem';
import NavModalItem from './NavModalItem';

function NavModal() {
    const [nameNavHover, setNameNavHover] = useState();
    const handleHover = (e) => {
        setNameNavHover(e.target.innerText);
    };
    console.log(nameNavHover);
    return (
        <div className="wrapper-navmodal flex flex-wrap shadow-lg ">
            <div className="w-3/12 bg-[#fff] ">
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/dinh-duong.png"
                    title="Dinh Dưỡng"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png"
                    title="Sinh lý - Nội tiết tố"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/cai-thien-tang-cuong-chuc-nang.png"
                    title="Cải thiện tăng cường chức năng"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/lam-dep.png"
                    title="Hỗ trợ làm đẹp"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/than-kinh-nao.png"
                    title="Thần kinh não"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/ho-tro-tieu-hoa.png"
                    title="Hỗ trợ tiêu hóa"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20220624120650-9722.png"
                    title="Sức khỏe tim mạch"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/upload/images/filtercate/vitamin-va-khoang-chat.png"
                    title="Vitamin & Khoáng chất"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
                <NavModalItem
                    to=""
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20220909010920-4562.png"
                    title="Hỗ trợ điều trị"
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                />
            </div>

            {/* content nav modal item  */}
            <div className="w-9/12 px-4 py-4">
                <div className="grid grid-cols-4 gap-2 border-[#d8e0e8] border-b ">
                    <div className="px-1 ">
                        <ContentNavModalItem
                            to=""
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                            title=" Vi sinh - Probiotic"
                        />
                    </div>
                    <div className="px-1 ">
                        <ContentNavModalItem
                            to=""
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                            title=" Vi sinh - Probiotic"
                        />
                    </div>
                    <div className="px-1 ">
                        <ContentNavModalItem
                            to=""
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                            title=" Vi sinh - Probiotic"
                        />
                    </div>
                    <div className="px-1 ">
                        <ContentNavModalItem
                            to=""
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                            title=" Vi sinh - Probiotic"
                        />
                    </div>
                    <div className="px-1 ">
                        <ContentNavModalItem
                            to=""
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://nhathuoclongchau.com.vn/images/category/20221012091059-9023.png"
                            title=" Vi sinh - Probiotic"
                        />
                    </div>
                </div>
                <div className="best-seller pt-3  pb-4">
                    <div className="flex flex-wrap mb-3">
                        <div className="px-1 max-w-[50%] flex-[0_0_50%] flex items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                />
                            </svg>
                            <p className="font-bold text-sm">Bán chạy nhất</p>
                        </div>
                        <div className="px-1 max-w-[50%] flex-[0_0_50%] flex items-center justify-end">
                            <NavLink to="" className="text-[#1d48ba] text-sm">
                                Xem tất cả
                            </NavLink>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="px-1">
                            <ProductSeller
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/06/00500184-sua-nutren-junior-nestle-health-science-hop-850g-2256-62a8_large.jpg"
                                name="  Sữa bột Nestlé Nutren Junior hỗ trợ hệ tiêu hóa giúp trẻ hấp thu dinh dưỡng (850g)"
                                newPrice="591.000đ"
                                unit="Hộp"
                                oldPrice=""
                            />
                        </div>
                        <div className=" px-1">
                            <ProductSeller
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2023/01/00500698-yen-sao-cho-tre-em-greenbabi-huong-vani-4-hu-x-72g-1255-63bb_large.jpg"
                                name="Nước Yến Sào cho trẻ em 15% Yến hương vani (4 hũ x 72g)"
                                newPrice="131.200đ"
                                unit="Hộp"
                                oldPrice="164.000đ"
                            />
                        </div>
                        <div className=" px-1">
                            <ProductSeller
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/06/00013459-sua-bot-abbott-glucerna-cho-benh-nhan-tieu-duong-2450-62af_large.jpg"
                                name=" Sữa bột Abbott Glucerna bổ sung vitamin, khoáng chất cho người tiểu đường (850g)"
                                newPrice="879.000đ"
                                unit="Hộp"
                                oldPrice=""
                            />
                        </div>
                        <div className=" px-1">
                            <ProductSeller
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/09/00010637-sua-abbott-glucerna-400g-2158-6327_large.jpg"
                                name="Sữa bột Abbott Glucerna dinh dưỡng đặc biệt cho người đái tháo đường (400g)"
                                newPrice="401.000đ"
                                unit="Hộp"
                                oldPrice=""
                            />
                        </div>
                        <div className=" px-1">
                            <ProductSeller
                                img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/06/00013645-sua-abbott-ensure-gold-850g-1487-62af_large.jpg"
                                name=" Sữa Abbott Ensure Gold hương Vani dinh dưỡng đầy đủ và cân đối (850g)"
                                newPrice="876.000đ"
                                unit="Hộp"
                                oldPrice=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavModal;
