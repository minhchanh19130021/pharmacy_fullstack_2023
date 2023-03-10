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
                        className="w-6 h-6 text-[#fff] mr-1 px-1 py-1 bg-[#ef4444] rounded-full"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
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
