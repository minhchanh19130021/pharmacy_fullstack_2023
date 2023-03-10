import FilterItem from './FilterItem';

function FilterDrug() {
    return (
        <FilterItem title="Dược chất">
            <div className="mb-2">
                <input
                    type="checkbox"
                    id="Tá Dược Vừa Đủ"
                    name="Tá Dược Vừa Đủ"
                    className="mr-2 cursor-pointer"
                    defaultChecked
                />
                <label htmlFor="  Tá Dược Vừa Đủ" className="cursor-pointer">
                    Tá Dược Vừa Đủ
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Vitamin B6" name=" Vitamin B6" className="mr-2 cursor-pointer" />
                <label htmlFor="Vitamin B6" className="cursor-pointer">
                    Vitamin B6
                </label>
            </div>

            <div className="mb-2">
                <input type="checkbox" id=" Vitamin B1" name=" Vitamin B1" className="mr-2 cursor-pointer" />
                <label htmlFor=" Vitamin B1" className="cursor-pointer">
                    Vitamin B1
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id="Vitamin C" name="Vitamin C" className="mr-2 cursor-pointer" />
                <label htmlFor="Vitamin C" className="cursor-pointer">
                    Vitamin C
                </label>
            </div>
            <div className="mb-2">
                <input type="checkbox" id=" Vitamin B2" name=" Vitamin B2" className="mr-2 cursor-pointer" />
                <label htmlFor=" Vitamin B2" className="cursor-pointer">
                    Vitamin B2
                </label>
            </div>
        </FilterItem>
    );
}

export default FilterDrug;
