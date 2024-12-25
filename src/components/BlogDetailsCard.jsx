import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const BlogDetailsCard = ({ blog, handleCommentSubmit, comments }) => {
    const navigate = useNavigate();
    const { user } = useAuth()
    const [commentText, setCommentText] = useState("");
    const { _id, title, imageUrl, category, shortDescription, longDescription, date, author_email, author, author_photoUrl } = blog || {};

    const isBlogOwner = author_email === user?.email;



    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition">
            
            <img
                className="w-full h-96 object-cover"
                src={imageUrl || "https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1734937221~exp=1734940821~hmac=9122502d0978c14175c28629bbfcfa5aca68dd1d7202605369f9cb01bf16fc4e&w=826"}
                alt={title}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 py-1 text-sm">By: {author}</p>
                <div className="author-info flex items-center my-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={author_photoUrl}
                        alt={author}
                    />
                </div>
                <p className="text-gray-500 pb-2 text-xs">{new Date(date).toLocaleDateString()}</p>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {category}
                </span>
                <p className="text-gray-700 mt-2 text-sm">
                    {shortDescription}
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                    {longDescription}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/all-blogs')}
                        className="bg-purple-500 text-white hover:bg-purple-600 transition px-3 py-1 rounded"
                    >
                        Read More
                    </button>
                    {isBlogOwner && (
                        <button
                            onClick={() => navigate(`/update-blog/${blog._id}`)}
                            className=" bg-[#00e29a] hover:bg-[#25f5b3] text-white px-3 py-1 rounded "
                        >
                            Update
                        </button>
                    )}
                </div>

                {/* comments  */}
                <div className="comments-section mt-8">
                    <h2 className="text-2xl font-bold">Comments</h2>
                    {isBlogOwner ? (
                        <p className="text-gray-600 mt-4">Cannot comment on your own blog.</p>
                    ) : (
                        <div className="comment-input mt-4">
                            <textarea
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write your comment here..."
                            ></textarea>
                            <button
                                onClick={() => handleCommentSubmit(commentText, _id, author, author_photoUrl, setCommentText)}
                                className="bg-purple-500 text-white hover:bg-purple-600 px-4 py-2 rounded mt-2"
                            >
                                Submit Comment
                            </button>
                        </div>
                    )}

                    {/* Show the all comments */}
                    <div className="comment-list mt-6 ">
                        {comments.map((comment, ind) => (
                            <div key={ind} className="comment mb-4 p-4 border rounded">
                                <div className="comment-header flex items-center">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={comment.profilePicture}
                                        alt={comment.username}
                                    />
                                    <p className="ml-2 font-bold">{comment.username}</p>
                                </div>
                                <p className="text-gray-700 mt-2">{comment.commentText}</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div >
    );
};

export default BlogDetailsCard;