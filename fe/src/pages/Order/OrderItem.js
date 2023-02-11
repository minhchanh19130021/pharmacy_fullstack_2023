function OrderItem() {
    return (
        <div className="flex items-center p-3">
            <div className="flex items-center border p-1 rounded-lg">
                <img
                    width={50}
                    src="https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                ></img>
            </div>
            <div className="flex flex-wrap items-center justify-between w-4/5 ml-5">
                <h6>
                    Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn
                    ngon (120ml)
                </h6>
                <div className="pt-2 max-sm:w-full flex justify-between">
                    <span className="font-semibold mr-5">81.000đ</span>
                    <span>x1 Chai</span>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;
