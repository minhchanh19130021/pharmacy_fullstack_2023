import { NavLink } from "react-router-dom";

function PharmacyBranch() {
    return (
        <div className="bg-[#072d94] max-w-full">
            <div className="max-w-[1200px] mx-auto my-0 ">
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg::grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 py-3">
                    <NavLink to="" className="text-[#fff]  flex items-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 mr-[14px]"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <p className="text-2xl ">Xem hệ thống nhà thuốc toàn quốc</p>
                    </NavLink>
                    <NavLink
                        to=""
                        className="text-[#fff] font-bold bg-[#597db9] px-8 rounded-3xl h-[36px] flex items-center mx-auto justify-end"
                    >
                        Xem danh sách nhà thuốc
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default PharmacyBranch;
