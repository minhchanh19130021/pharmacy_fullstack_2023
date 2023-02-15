import Breadcrumb from '~/components/Breadcrumb';
import DetailList from './DetailList';
import MainDetail from './MainDetail';
import RelatedProduct from './RelatedProduct';

function Detail() {
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto my-0 border-b pb-8">
                <Breadcrumb />
                <MainDetail />
            </div>
            <div className="max-w-[1200px] mx-auto my-0 pt-8 pb-8">
                <DetailList />
            </div>

            {/* related products */}
            <RelatedProduct />
            {/* <div className="comment bg-[#edf2f8]">
                <div className="comment-header">
                    <h3>Bình luận</h3>
                </div>
                <div className="comment-form">
                    <input placeholder="Nhập nội dung câu hỏi (Vui lòng gõ tiếng Việt có dấu)..." />
                    <button>gửi bình luận</button>
                    <span className="text-[#ef4444]"> Mời bạn viết bình luận. (Tối thiểu 3 ký tự)</span>
                </div>
                <div className="comment-detail">
                    <div className="comment-item">
                        <span>TN</span>
                        <div>
                            <div>
                                <span>Phạm Thị Thu Nguyệt</span>
                                <span>1 ngày trước</span>
                            </div>
                            <div>
                                <p>
                                    Dùng thuốc xong thường mình bị nóng trong người đây là nguyên nhân do thuốc hay cơ
                                    thể mình kích ứng
                                </p>
                                <button>Trả lời</button>
                                <button>Thích</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Detail;
