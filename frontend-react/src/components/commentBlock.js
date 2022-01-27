const CommentBlock = ({comment, user, avatar, commentedOn}) => {
    return (
        <div className="antialiased mx-auto my-10">

            <div className="space-y-4">

                <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                        <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={avatar} alt="" />
                    </div>
                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>{user}</strong> <span className="text-xs text-gray-400">{commentedOn}</span>
                        <p className="text-sm">
                          {comment}
                        </p>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default CommentBlock;
