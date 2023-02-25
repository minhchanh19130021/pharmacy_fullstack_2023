import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div className="grid place-content-center p-6">
            <div className="flex justify-center my-3">
                <img                    
                    width={400}
                    src="https://firebasestorage.googleapis.com/v0/b/pharmacy-969d7.appspot.com/o/error%2F404.png?alt=media&token=b78fea73-bdcd-4835-adb0-e83e43eba6d5"
                ></img>
            </div>
            <p className="text-center text-3xl font-semibold my-3">Yêu cầu không tìm thấy</p>
            <p className="text-center text-lg">Trang yêu cầu không tìm thấy. Vui lòng tìm kiếm lại.</p>
            <div className="text-center my-8">
                <NavLink to="/" className="border border-md w-fit py-4 px-8 rounded-full text-white bg-[#1d48ba] hover:bg-blue-900">
                    VỀ TRANG CHỦ
                </NavLink>
            </div>
        </div>
    );
}

export default NotFound;
