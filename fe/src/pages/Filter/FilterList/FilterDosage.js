import FilterItem from './FilterItem';

function FilterDosage() {
    return (
        <FilterItem title="Dạng bào chế">
            <div className="mb-2">
                <input type="checkbox" id="all" name="all" className="mr-2 cursor-pointer" defaultChecked />
                <label htmlFor="all" className="cursor-pointer">
                    Tất cả
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Dạng Bột" name="Dạng Bột" className="mr-2 cursor-pointer" />
                <label htmlFor="Dạng Bột" className="cursor-pointer">
                    Dạng Bột
                </label>
            </div>

            <div className="mb-2">
                <input type="checkbox" id="Dạng Xịt" name="Dạng Xịt" className="mr-2 cursor-pointer" />
                <label htmlFor="Dạng Xịt" className="cursor-pointer">
                    Dạng Xịt
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Dung Dịch" name="Dung Dịch" className="mr-2 cursor-pointer" />
                <label htmlFor="Dung Dịch" className="cursor-pointer">
                    Dung Dịch
                </label>
            </div>

            <div className="mb-2">
                <input
                    type="checkbox"
                    id="  Nhũ Tương (Gel)"
                    name="  Nhũ Tương (Gel)"
                    className="mr-2 cursor-pointer"
                />
                <label htmlFor="  Nhũ Tương (Gel)" className="cursor-pointer">
                    Nhũ Tương (Gel)
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Túi Lọc" name="Túi Lọc" className="mr-2 cursor-pointer" />
                <label htmlFor="Túi Lọc" className="cursor-pointer">
                    Túi Lọc
                </label>
            </div>
        </FilterItem>
    );
}

export default FilterDosage;
