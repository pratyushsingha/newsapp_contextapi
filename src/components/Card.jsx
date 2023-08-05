import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Card = () => {
  const { posts } = useContext(AppContext);

  return (
    <>
      <div className="mx-3 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">{post.content.slice(0, 122)}...</p>
              </div>
              <div className="px-6 pt-2 pb-4 flex flex-wrap space-x-2">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
              <p className='my-2 mx-3'>
                By <span className="font-bold">{post.author}</span> on{' '}
                <span className="font-bold">{post.category}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
