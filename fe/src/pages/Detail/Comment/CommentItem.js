function CommentItem({ avatar, name, time, content, children }) {
    return (
        <div className="comment-item flex">
            <p className="w-12 h-12 bg-[#a39c9c] text-[#fff] rounded-full flex items-center justify-center mr-2">
                {avatar}
            </p>
            <div>
                <div>
                    <span className="mr-4">{name}</span>
                    <span>{time}</span>
                </div>
                <div className="mt-1">
                    <p>{content}</p>
                    <div className="mt-1 flex items-center">
                    {children}

                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
