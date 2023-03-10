import { useRef } from 'react';

function DetailList() {
    const refScrollDesc = useRef(null);
    const refScrollIngredient = useRef(null);
    const refScrollUses = useRef(null);
    const refScrollDosage = useRef(null);
    const refScrollEffects = useRef(null);
    const refScrollNote = useRef(null);
    const refScrollPreserve = useRef(null);
    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  gap-6 px-1">
            <div className="detail-list bg-[#edf2f8] border-b rounded-lg h-[350px] sticky top-0 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden cs:hidden">
                <div className="px-4 py-3 cursor-pointer flex items-center border-b border-[#d8e0e8]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2 text-[#000000] "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        />
                    </svg>
                    <span className="capitalize font-bold"> Nội dung chính</span>
                </div>
                <ul className="py-2">
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff]  hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollDesc.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Mô tả sản phẩm
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff]  hover:border hover:border-[#e4eaf1] hover:shadow-xl hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollIngredient.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Thành phần
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff]  hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollUses.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Công dụng
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff]  hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollDosage.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Liều dùng
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff]  hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollEffects.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Tác dụng phụ
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff] hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollNote.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Lưu ý
                    </li>
                    <li
                        className="px-2 py-[8px] cursor-pointer hover:bg-[#fff] hover:border hover:border-[#e4eaf1]  hover:font-bold
            hover:px-4 hover:py-[6px] transition-all"
                        onClick={() => {
                            refScrollPreserve.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Bảo quản
                    </li>
                </ul>
            </div>
            <div className="detail col-span-3">
                <div className="desc" ref={refScrollDesc}>
                    <h3 className="text-[#1e293b] text-2xl mb-3 font-bold">Mô Tả Sản Phẩm</h3>
                    <p className="text-[#1e293b] text-xl mb-3 font-bold">Trùng Thảo Gold</p>
                    <p>Tăng cường thể lực - Cải thiện giấc ngủ</p>
                    <p>
                        Trùng Thảo Gold chứa đông trùng hạ thảo, linh chi, nhân sâm, sữa ong chúa và 12 dưỡng chất khác
                        giúp nâng cao sức khỏe, cải thiện giấc ngủ. Đặc biệt thích hợp cho những người sức khỏe kém, ăn
                        ngủ kém, người cần tăng cường hoặc phục hồi sức khỏe.
                    </p>
                    <img
                        src="https://nhathuoclongchau.com.vn/upload/images/sanpham/32476/images/00032348-trung-thao-gold-thanh-cong-30v-5558-614d_large.jpg"
                        alt="img"
                        className="flex mx-auto my-0 "
                    />
                    <p className="text-center">Viên uống giúp ngủ ngon Trùng Thảo Gold Thành Công 30 viên.</p>
                </div>

                <div className="ingredient mb-3" ref={refScrollIngredient}>
                    <h3 className="text-[#1e293b] text-2xl mb-3 font-bold">Thành Phần</h3>
                    <div className="ingredient-detail px-4 py-2 border border-[#333] rounded-lg">
                        <h3 className="mb-1 text-xl capitalize border-b-8 border-[#333]">Thông Tin Thành Phần</h3>
                        <div className="ingredient-item flex justify-between px-1 py-1 border-b-4 border-[#333]">
                            <p>Thành phần</p>
                            <p>Hàm lượng</p>
                        </div>
                        <div className="ingredient-item flex justify-between px-1 py-1 border-b border-[#333]">
                            <p>Lá Neem</p>
                            <p>300mg</p>
                        </div>
                        <div className="ingredient-item flex justify-between px-1 py-1 border-b border-[#333]">
                            <p>Kẽm</p>
                            <p>1.5mg</p>
                        </div>
                        <div className="ingredient-item flex justify-between px-1 py-1 border-b border-[#333]">
                            <p>Sữa ong chúa</p>
                            <p>80mcg</p>
                        </div>
                    </div>
                    <div className="ingredient-desc">
                        <p className="mb-4">
                            <span className="text-[#718198] ">Lysine</span>: Giúp ăn ngon miệng; giảm lo lắng do chặn
                            các thụ thể liên quan đến phản ứng căng thẳng; cải thiện hấp thụ canxi giúp tăng cường chiều
                            cao, ngăn ngừa bệnh còi xương, loãng xương.
                        </p>
                        <p className="mb-4">
                            <span className="text-[#718198] ">L-Arginin:</span>: Là acid amin bán cần thiết, hay còn gọi
                            là acid amin thiết yếu có điều kiện. Trong cơ thể arginine được tổng hợp từ Citrulline. Có
                            tác dụng cải thiện chức năng tình dục, làm tăng số lượng và chất lượng tinh trùng. Tăng quá
                            trình lành vết thương và liền xương, phục hồi nhanh các mô bị tổn thương, hư hỏng. Hạ huyết
                            áp, tăng tuần hoàn máu tới các tổ chức.
                        </p>
                        <p className="mb-4">
                            <span className="text-[#718198] ">Lysine</span>: Giúp ăn ngon miệng; giảm lo lắng do chặn
                            các thụ thể liên quan đến phản ứng căng thẳng; cải thiện hấp thụ canxi giúp tăng cường chiều
                            cao, ngăn ngừa bệnh còi xương, loãng xương.
                        </p>
                        <p className="mb-4">
                            <span className="text-[#718198] ">L-Arginin:</span>: Là acid amin bán cần thiết, hay còn gọi
                            là acid amin thiết yếu có điều kiện. Trong cơ thể arginine được tổng hợp từ Citrulline. Có
                            tác dụng cải thiện chức năng tình dục, làm tăng số lượng và chất lượng tinh trùng. Tăng quá
                            trình lành vết thương và liền xương, phục hồi nhanh các mô bị tổn thương, hư hỏng. Hạ huyết
                            áp, tăng tuần hoàn máu tới các tổ chức.
                        </p>
                        <p className="mb-4">
                            <span className="text-[#718198] ">Lysine</span>: Giúp ăn ngon miệng; giảm lo lắng do chặn
                            các thụ thể liên quan đến phản ứng căng thẳng; cải thiện hấp thụ canxi giúp tăng cường chiều
                            cao, ngăn ngừa bệnh còi xương, loãng xương.
                        </p>
                        <p className="mb-4">
                            <span className="text-[#718198] ">L-Arginin:</span>: Là acid amin bán cần thiết, hay còn gọi
                            là acid amin thiết yếu có điều kiện. Trong cơ thể arginine được tổng hợp từ Citrulline. Có
                            tác dụng cải thiện chức năng tình dục, làm tăng số lượng và chất lượng tinh trùng. Tăng quá
                            trình lành vết thương và liền xương, phục hồi nhanh các mô bị tổn thương, hư hỏng. Hạ huyết
                            áp, tăng tuần hoàn máu tới các tổ chức.
                        </p>
                    </div>
                </div>
                <div className="uses" ref={refScrollUses}>
                    <h3 className="text-[#1e293b] text-2xl mb-3 font-bold">Công dụng</h3>
                    <p className="mb-4">
                        Trùng Thảo Gold hỗ trợ dễ ngủ, ngủ sâu giấc trong các trường hợp mất ngủ, ngủ kém.
                    </p>
                    <p className="mb-4">Hỗ trợ tăng cường sức khỏe, nâng cao sức đề kháng.</p>
                </div>
                <div className="dosage" ref={refScrollDosage}>
                    <h3 className="text-[#1e293b] text-2xl mb-3 font-bold">Liều Dùng</h3>
                    <p className="font-bold mb-4">Cách dùng</p>
                    <ul>
                        <li className="mb-4">Người lớn: Uống 2 viên/lần/ngày.</li>
                        <li className="mb-4">Trẻ em từ 12 tuổi: Uống 1 viên/lần/ngày. </li>
                        <li className="mb-4">Uống vào buổi tối trước khi đi ngủ.</li>
                    </ul>
                    <p className="font-bold mb-4">Đối tượng sử dụng</p>
                    <ul>
                        <li className="mb-4">
                            Trùng Thảo Gold thích hợp dùng cho người ăn ngủ kém, sức khỏe kém, người mới ốm dậy, cần
                            tăng cường sức khỏe.
                        </li>
                    </ul>
                </div>
                <div className="effects mb-8 " ref={refScrollEffects}>
                    <h3 className="text-[#1e293b] text-2xl  font-bold mt-12 mb-6"> Tác Dụng Không Mong Muốn</h3>
                    <p className="mb-4">Chưa có thông tin về tác dụng phụ của sản phẩm.</p>
                </div>
                <div className="note border border-[#b6c0ce] rounded-lg px-3 py-3 mb-6" ref={refScrollNote}>
                    <div className="flex items-center pb-2 border-b border-[#e4eaf1]">
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
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                        </svg>

                        <h3>Lưu Ý</h3>
                    </div>
                    <ul className="pt-3">
                        <li className="mb-2">Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm.</li>
                        <li className="mb-2">
                            Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
                        </li>
                        <li className="mb-2"> Đọc kỹ hướng dẫn sử dụng trước khi dùng.</li>
                    </ul>
                </div>
                <div className="mb-8" ref={refScrollPreserve}>
                    <h3 className="text-[#1e293b] text-2xl mb-3 font-bold">Bảo Quản</h3>
                    <ul>
                        <li className="mb-4">
                            Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp từ mặt trời.
                        </li>
                        <li className="mb-4">Để xa tầm tay trẻ em.</li>
                    </ul>
                </div>
                <div class="label-detail px-4 py-4 border-l-2 rounded-r-lg border-[#1d48ba] bg-[#edf2f8]">
                    <p>Thực phẩm bảo vệ sức khoẻ, không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>
                </div>
                <div className="approve flex items-center mt-9 bg-[#edf2f8] border-[#bee3f8] rounded-lg   py-3 px-4 ">
                    <img
                        src="https://nhathuoclongchau.com.vn/upload/be/avatar/ZEurNG7e5s3lxcts2DKXVxXxrgl67a.png"
                        alt="img-approve"
                        className="w-[72px] h-[72px] object-cover rounded-lg mr-2"
                    />
                    <div className="approve-detail">
                        <div className="approve-detail__header flex items-center justify-between pb-2 border-b">
                            <p className="text-xl font-bold">Dược sĩ Đại học Nguyễn Thanh Hải</p>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-[#378f0b] mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <p className="text-[#378f0b]">Đã duyệt nội dung</p>
                            </div>
                        </div>
                        <p className="pt-2 line-clamp-2">
                            Tốt nghiệp Đại học Dược Hà Nội, với hơn 10 năm kinh nghiệm trong lĩnh vực Dược phẩm. Hiện là
                            giảng viên giảng dạy các môn Dược lý, Dược lâm sàng,...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailList;
