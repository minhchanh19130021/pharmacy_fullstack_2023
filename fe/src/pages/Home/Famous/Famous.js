import TrendItem from '~/components/TrendItem';
import FamousItem from './FamousItem';

function Famous() {
    const blue =
        'flex items-center flex-col mx-auto bg-[#e8f5fd] rounded-lg py-3 min-w-[150px]  2xl:w-[176px] xl:w-[176px] lg::w-[176px] md::w-[176px] sm:w-[176px] xs:w-full cs:w-full   h-[204px] mb-4 hover:border border-[#016cc9] transition ease-in-out delay-75';
    const orange =
        'flex items-center flex-col mx-auto bg-[#fef7dc] rounded-lg py-3  min-w-[150px] 2xl:w-[176px] xl:w-[176px] lg::w-[176px] md::w-[176px] sm:w-[176px] xs:w-full  cs:w-full   h-[204px] mb-4 hover:border border-[#016cc9] transition ease-in-out delay-75';
    return (
        <div className="max-w-[1200px] mx-auto my-0 pt-8 ">
            <div className="flex flex-wrap -mx-1 ">
                <div className="flex mx-auto">
                    <h3 className=" text-[28px] text-center font-bold mb-4">Danh Mục Nổi Bật</h3>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 cs:grid-cols-1 2xl:px-1 xl:px-1 lg:px-2 md:px-2 sm:px-4 xs:px-4 cs:px-4  gap-4 mb-8">
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2209/2209673.png"
                    title="Cải thiện tăng cường chức năng"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2927/2927436.png"
                    title="Vitamin"
                />
                <FamousItem
                    to=""
                    img="https://themebeyond.com/html/yed/img/products/categories_06.png"
                    title="Dụng cụ y tế"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/3673/3673582.png"
                    title="Hỗ trợ tình dục"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2652/2652533.png"
                    title="Chăm sóc tóc - da đầu"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/1386/1386873.png"
                    title="Chăm sóc răng miệng"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2491/2491314.png"
                    title="Thần kinh não"
                />
                 <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2209/2209673.png"
                    title="Cải thiện tăng cường chức năng"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2927/2927436.png"
                    title="Vitamin"
                />
                <FamousItem
                    to=""
                    img="https://themebeyond.com/html/yed/img/products/categories_06.png"
                    title="Dụng cụ y tế"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/3673/3673582.png"
                    title="Hỗ trợ tình dục"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2652/2652533.png"
                    title="Chăm sóc tóc - da đầu"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/1386/1386873.png"
                    title="Chăm sóc răng miệng"
                />
                <FamousItem
                    to=""
                    img="https://cdn-icons-png.flaticon.com/512/2491/2491314.png"
                    title="Thần kinh não"
                />
                
            </div>
        </div>
    );
}

export default Famous;
