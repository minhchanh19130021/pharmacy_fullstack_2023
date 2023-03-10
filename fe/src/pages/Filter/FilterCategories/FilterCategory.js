function FilterCategory({ img, title, quantity, to, children }) {
    return (
        <div className="filter-category flex h-[196px] border rounded-lg">
            <div className="flex flex-col items-center justify-center w-[163.44px] bg-[#edf2f8] ">
                <img src={img} alt="category-img" className="w-20 h-20 object-cover flex mx-auto my-0" />
                <h3 className="font-bold px-[10px] text-center line-clamp-2">{title}</h3>
                <p className="text-[#a7b2c2]">{quantity} sản phẩm</p>
            </div>
            <div className="pt-2 pl-3 flex flex-col">{children}</div>
        </div>
    );
}

export default FilterCategory;
