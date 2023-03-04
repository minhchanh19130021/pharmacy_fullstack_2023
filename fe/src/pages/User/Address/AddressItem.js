function AddressItem({ name, phone, address }) {
    return (
        <div className="address-item grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 border-b py-3">
            <div className="flex justify-between flex-col col-span-2">
                <div className="flex items-center">
                    <strong>{name}</strong> &#8211;
                    <strong>{phone}</strong>
                </div>
                <p className="mt-1">{address}</p>
                <div className="flex items-center mt-1">
                    <input type="radio" name="setDefault" id="setDefault" className="mr-1" />
                    <label htmlFor="setDefault">Địa chỉ mặc định</label>
                </div>
            </div>
            <div className="flex items-center mx-auto my-0">
                <button className="px-5 leading-8 border border-[#d8e0e8] bg-transparent rounded-2xl font-medium hover:text-[#fff] hover:bg-[#718198] hover:border-[#718198]">
                    Chỉnh sửa
                </button>
            </div>
        </div>
    );
}

export default AddressItem;
