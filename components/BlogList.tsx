import React from "react";
import urlFor from "../lib/urlFor";
import Image from "next/image";
type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group">
            <div className="relative w-full h-80 drop-shadow-xl  transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div>
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex items-center justify-between ">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>{new Date(post._createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                    {post.categories &&
                      post.categories.map((category) => {
                        return (
                          <div
                            key={category._id}
                            className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            <p>{category.title.toString()}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
