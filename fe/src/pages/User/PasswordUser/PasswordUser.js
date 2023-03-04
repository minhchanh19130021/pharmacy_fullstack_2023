import { useState } from 'react';

function PasswordUser() {
    const [oldpwdShow, setOldPwdShow] = useState(false);
    const [newPwdShow, setNewPwdShow] = useState(false);
    const [confirmPwdShow, setConfirmPwdShow] = useState(false);

    return (
        <div className="relative p-6 flex-auto max-w-xl">
            <div className="flex flex-col mb-2 relative">
                <label htmlFor="opwd" className="text-base">
                    Mật khẩu hiện tại
                </label>
                <input
                    name="opwd"
                    id="opwd"
                    type={oldpwdShow ? 'text' : 'password'}
                    className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-8 right-2 cursor-pointer text-[#b6b6b6]"
                    onClick={() => setOldPwdShow(!oldpwdShow)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#ff4742]">Thông tin bắt buộc</span>
            </div>
            <div className="flex flex-col mb-1 relative">
                <label htmlFor="pwd" className="text-base">
                    Mật khẩu mới
                </label>
                <input
                    name="pwd"
                    id="pwd"
                    type={newPwdShow ? 'text' : 'password'}
                    className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1 "
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-8 right-2 cursor-pointer text-[#b6b6b6]"
                    onClick={() => setNewPwdShow(!newPwdShow)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="text-[#ff4742]">Thông tin bắt buộc</span>
            </div>
            <div className="flex flex-col mb-1 relative">
                <label htmlFor="cpwd" className="text-base ">
                    Nhập lại mật khẩu mới
                </label>
                <input
                    name="cpwd"
                    id="cpwd"
                    type={confirmPwdShow ? 'text' : 'password'}
                    className="border border-[#ff4742] rounded-md px-4 py-1 outline-0 h-10 mb-1"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-8 right-2 cursor-pointer text-[#b6b6b6]"
                    onClick={() => setConfirmPwdShow(!confirmPwdShow)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#ff4742]">Thông tin bắt buộc</span>
            </div>
            <div className="flex items-center justify-center p-6  rounded-b">
                <button
                    className="bg-[#1D48BA] text-white active:bg-[#1D48BA] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    CẬP NHẬT
                </button>
            </div>
        </div>
    );
}

export default PasswordUser;
