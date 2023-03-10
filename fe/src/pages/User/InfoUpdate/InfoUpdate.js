import { useState } from 'react';
import useBodyScrollLock from '~/hooks/useBodyScrollLock';

function InfoUpdate() {
    const [showModal, setShowModal] = useState(false);
    const [lock, toggle] = useBodyScrollLock();
    return (
        <div className="flex flex-col justify-center items-center -mt-10 ">
            <div className="w-[120px] h-[120px] bg-[#b6c0ce] rounded-full flex justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-w-20 text-[#fff] "
                >
                    <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <p className="mt-3 text-[#072d94] text-xl font-bold">Danh</p>
            <p className="mt-1 text-[#334155] text-base">032xxxxx79</p>
            <button
                className="rounded-xl border border-[#d8e0e8] bg-transparent hover:bg-[#718198] text-[#52637a] hover:text-[#fff] flex items-center mt-1 px-4 py-1 leading-6"
                onClick={() => {
                    toggle();
                    setShowModal(!showModal);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-1"
                >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
                <span>Chỉnh sửa</span>
            </button>

            {showModal && (
                <div className="modal-update-info fixed left-0 top-0 w-full h-full animate-fadeBottomMobile ">
                    <div
                        className="overlay inset-0 fixed w-screen h-screen bg-[#020202] opacity-25"
                        onClick={() => {
                            toggle();
                            setShowModal(!showModal);
                        }}
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 flex-auto max-w-xl w-9/12 bg-[#fff] rounded-2xl">
                        <div className="flex flex-col mb-2">
                            <h3 className="font-bold text-xl">Chỉnh sửa thông tin</h3>
                        </div>
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
                        <div className="flex flex-col mb-1">
                            <label htmlFor="email" className="text-base">
                                Địa chỉ email
                            </label>
                            <input
                                name="email"
                                id="email"
                                type="text"
                                className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                                placeholder="ví dụ: abc@gmail.com"
                            />
                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                        </div>
                        <div className="flex flex-col mb-1">
                            <label htmlFor="phone" className="text-base">
                                Số điện thoại
                            </label>
                            <input
                                name="phone"
                                id="phone"
                                type="text"
                                className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                            />
                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                        </div>
                        <div className="flex flex-col mb-1">
                            <label htmlFor="date" className="text-base">
                                Ngày sinh
                            </label>
                            <input
                                name="date"
                                id="date"
                                type="date"
                                className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                            />
                            <span className="text-[#ff4742]">Thông tin bắt buộc</span>
                        </div>
                        <button
                            className="flex mx-auto bg-[#016cc9] px-12 py-2 rounded-xl font-bold text-[#fff] uppercase mt-8"
                            onClick={() => {
                                toggle();
                                setShowModal(!showModal);
                            }}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfoUpdate;
