import FilterItem from './FilterItem';

function FilterObject() {
    return (
        <FilterItem title="Đối tượng">
            <div className="mb-2">
                <input type="checkbox" id="all" name="all" className="mr-2 cursor-pointer" defaultChecked />
                <label htmlFor="all" className="cursor-pointer">
                    Tất cả
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Trẻ Em" name="Trẻ Em" className="mr-2 cursor-pointer" />
                <label htmlFor="Trẻ Em" className="cursor-pointer">
                    Trẻ Em
                </label>
            </div>

            <div className="mb-2">
                <input type="checkbox" id="Người Cao Tuổi" name="Người Cao Tuổi" className="mr-2 cursor-pointer" />
                <label htmlFor="Người Cao Tuổi" className="cursor-pointer">
                    Người Cao Tuổi
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Người Lớn" name="Người Lớn" className="mr-2 cursor-pointer" />
                <label htmlFor="Người Lớn" className="cursor-pointer">
                    Người Lớn
                </label>
            </div>

            <div className="mb-2">
                <input
                    type="checkbox"
                    id="  Người Trưởng Thành"
                    name="  Người Trưởng Thành"
                    className="mr-2 cursor-pointer"
                />
                <label htmlFor="  Người Trưởng Thành" className="cursor-pointer">
                    Người Trưởng Thành
                </label>
            </div>
            <div className="mb-2">
                <input
                    type="checkbox"
                    id="Phụ Nữ Cho Con Bú"
                    name="Phụ Nữ Cho Con Bú"
                    className="mr-2 cursor-pointer"
                />
                <label htmlFor="Phụ Nữ Cho Con Bú" className="cursor-pointer">
                    Phụ Nữ Cho Con Bú
                </label>
            </div>
        </FilterItem>
    );
}

export default FilterObject;
