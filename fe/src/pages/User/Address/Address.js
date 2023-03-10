import { useState } from 'react';
import AddressItem from './AddressItem';

function Address() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <h1 className="text-[#1e293b] text-[28px] mb-4 font-bold">Sổ Địa Chỉ Nhận Hàng</h1>
            <div className="list-address border border-[#d8e0e8]  px-4 py-4 rounded-2xl animate-fadeBottomMobile">
                <AddressItem
                    name="Chánh "
                    phone="0327172479"
                    address="54/9E , Phường Linh Trung, Thành phố Thủ Đức, Hồ Chí Minh"
                />
                <AddressItem
                    name="Chánh "
                    phone="0327172479"
                    address="54/9E , Phường Linh Trung, Thành phố Thủ Đức, Hồ Chí Minh"
                />
                <AddressItem
                    name="Chánh "
                    phone="0327172479"
                    address="54/9E , Phường Linh Trung, Thành phố Thủ Đức, Hồ Chí Minh"
                />
                <AddressItem
                    name="Chánh "
                    phone="0327172479"
                    address="54/9E , Phường Linh Trung, Thành phố Thủ Đức, Hồ Chí Minh"
                />
                <div
                    className="flex items-center justify-center mx-auto my-0 pb-6 pt-4"
                    onClick={() => setShowModal(true)}
                >
                    <button className="px-8 leading-9 border border-[#d8e0e8] bg-[#072d94] rounded-3xl text-[#fff]">
                        THÊM ĐỊA CHỈ MỚI
                    </button>
                </div>

                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold capitalize">Thêm Địa Chỉ Mới</h3>
                                        <button
                                            className="p-1 ml-auto bg- border-0 text-[#718198]  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 "
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto max-w-xl w-[756px]">
                                        <div className="flex flex-col mb-2">
                                            <label htmlFor="name" className="text-base">
                                                Họ và tên
                                            </label>
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                                                placeholder="ví dụ: lê minh chánh"
                                            />

                                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <label htmlFor="phone" className="text-base ">
                                                Số điện thoại
                                            </label>
                                            <input
                                                name="phone"
                                                id="phone"
                                                type="text"
                                                className="border border-[#d8e0e8] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                                            />
                                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1 mb-2">
                                            <div className="flex flex-col">
                                                <label htmlFor="date">Chọn Tỉnh/Thành</label>
                                                <select className="border border-[#d8e0e8] rounded-md px-4 py-1 outline-0 h-10 mb-1">
                                                    <option value="a" className="text-[#728f8f] ">
                                                        --Chọn tỉnh thành--
                                                    </option>
                                                    <option value="a">a</option>
                                                    <option value="b">b</option>
                                                    <option value="c">c</option>
                                                </select>
                                                <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="date">Chọn Quận/Huyện</label>
                                                <select className="border border-[#d8e0e8] rounded-md px-4 py-1 outline-0 h-10 mb-1">
                                                    <option value="a" className="text-[#728f8f] ">
                                                        --Chọn quận huyện--
                                                    </option>

                                                    <option value="a">a</option>
                                                    <option value="b">b</option>
                                                    <option value="c">c</option>
                                                </select>
                                                <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <label htmlFor="date">Chọn Phường/Xã</label>
                                            <select className="border border-[#d8e0e8] rounded-md px-4 py-1 outline-0 h-10 mb-1">
                                                <option value="a" className="text-[#728f8f] ">
                                                    --Chọn phường xã--
                                                </option>

                                                <option value="a">a</option>
                                                <option value="b">b</option>
                                                <option value="c">c</option>
                                            </select>
                                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <label htmlFor="address">Địa chỉ cụ thể</label>
                                            <textarea
                                                name="address"
                                                id="address"
                                                type="text"
                                                rows="2"
                                                className="border border-[#d8e0e8] rounded-md px-4 py-1 outline-0 h-full  mb-1 resize-none"
                                                placeholder="ví dụ: Nhà số 313, Ấp Lập Thành, Xã Hòa Khánh Tây, Huyện Đức Hòa, Tỉnh Long An"
                                            />
                                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="bg-[#1D48BA] text-white active:bg-[#1D48BA] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            HOÀN TẤT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </>
    );
}

export default Address;
