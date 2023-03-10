import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import CurrencyFormat from 'react-currency-format';

function FilterPrice() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000000);
    return (
        <div className="filter-item">
            <h3 className="mb-1 font-bold">Giá bán</h3>
            <div className="flex items-center justify-between">
                <CurrencyFormat
                    type="text"
                    className="w-[100px] border border-[#d3c2c2] outline-none px-1 py-1"
                    value={minValue}
                    displayType={'text'}
                    thousandSeparator={true}
                />
                -
                <CurrencyFormat
                    type="text"
                    className="w-[100px] border border-[#d3c2c2] outline-none px-1 py-1"
                    value={maxValue}
                    displayType={'text'}
                    thousandSeparator={true}
                />
            </div>
            <MultiRangeSlider
                barInnerColor="#0a6bff"
                ruler="false"
                className="!border-none !shadow-none !h-[2px]"
                min={0}
                max={1000000}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e: ChangeResult) => {
                    setMinValue(e.minValue);
                    setMaxValue(e.maxValue);
                }}
                label="false"
            />
        </div>
    );
}

export default FilterPrice;
