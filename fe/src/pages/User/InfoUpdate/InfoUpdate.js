import { useState } from 'react';

function InfoUpdate() {
    const [showModal, setShowModal] = useState(false);
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
            <p className="mt-3 text-[#072d94] text-xl font-medium">Danh</p>
            <p className="mt-1 text-[#334155] text-base">032xxxxx79</p>
            <button
                className="rounded-xl border border-[#d8e0e8] bg-transparent hover:bg-[#718198] text-[#52637a] hover:text-[#fff] flex items-center mt-1 px-4 py-1 leading-6"
                onClick={() => setShowModal(true)}
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

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold capitalize">Chỉnh sửa thông tin</h3>
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
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-[#1D48BA] text-white active:bg-[#1D48BA] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        CẬP NHẬT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}

export default InfoUpdate;
