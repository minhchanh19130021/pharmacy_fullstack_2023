function CartEmpty() {
    return (
        <div className="flex flex-col items-center w-full border">
            <img
                width={250}
                src="https://nhathuoclongchau.com.vn/estore-images/empty-cart.png"
            ></img>
            <h3 className="font-bold">Chưa có sản phẩm nào trong giỏ hàng</h3>
            <h3 className="my-5">
                Cùng mua sắm hàng ngàn sản phẩm tại nhà thuốc FPT Long Châu nhé!
            </h3>
            <button className="bg-blue-600 text-white rounded-full px-12 py-2 border-radius cursor-pointer">
                Mua Hàng
            </button>
        </div>
    );
}

export default CartEmpty;
