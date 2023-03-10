import ProtectItem from '~/components/ProtectItem';

function Protect() {
    return (
        <div
            className="max-w-full"
            style={{
                backgroundImage: 'url(' + 'https://nhathuoclongchau.com.vn/frontend_v3/images/BG.png' + ')',
            }}
        >
            <div className="max-w-[1200px] mx-auto my-0 py-8">
                <div className="2xl:flex xl:flex lg:block md:block sm:block xs:block justify-between">
                    <div className="col-span-2">
                        <h1 className="font-bold text-[40px] text-center">BẢO VỆ</h1>
                        <p className="text-[28px] text-center">Sức khoẻ người thân</p>
                    </div>
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 cs:grid-cols-1 gap-4 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4">
                        <ProtectItem
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/me-be.png"
                            title="MẸ VÀ BÉ"
                            to=""
                            more="Tìm hiểu thêm"
                        />
                        <ProtectItem
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/nguoicaotuoi.png"
                            title="NGƯỜI GIÀ"
                            to=""
                            more="Tìm hiểu thêm"
                        />
                        <ProtectItem
                            img="https://cdn.nhathuoclongchau.com.vn/unsafe/filters:quality(69):fill(white)/https://nhathuoclongchau.com.vn/upload/treem.png"
                            title="TRẺ EM"
                            to=""
                            more="Tìm hiểu thêm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Protect;
