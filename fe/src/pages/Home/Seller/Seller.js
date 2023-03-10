import ProductMain from '~/components/ProductMain';

function Seller() {
    return (
        <div className="max-w-[1200px] mx-auto my-0 py-8">
            <div className="flex flex-wrap -mx-1 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4 ">
                <div className="flex-[0_0_100%] max-w-full flex items-center mb-4">
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

                    <h3 className="px-1  text-[20px] text-[#000] font-bold capitalize">Bán Chạy Nhất</h3>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4">
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
                <ProductMain
                    to=""
                    label="chai"
                    img="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                    title="
                Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon (120ml)"
                    newPrice="81.000đ"
                    oldPrice=""
                    unit="chai"
                />
            </div>
        </div>
    );
}

export default Seller;
