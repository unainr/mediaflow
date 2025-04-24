'use client';
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface CloudinaryImageProps {
  public_id: string;
  alt?: string;
}

const CloudinaryImage = ({ 
  public_id, 
  alt = "Image", 
}: CloudinaryImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-auto aspect-[4/5] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800">
          <Skeleton className="w-full h-full object-cover rounded-xl" />
        </div>
      )}
      
      <CldImage
        width="960"
        height="800"
        src={public_id}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        alt={alt}
        className={`w-full h-full object-cover rounded-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
       
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 w-full p-3">
          <div className="text-white text-sm font-medium truncate">{alt}</div>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryImage;
