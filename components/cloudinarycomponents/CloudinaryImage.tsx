'use client';
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const CloudinaryImage = ({ public_id }: { public_id: string }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
		<div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
		{isLoading && (
				<div className="absolute inset-0">
					<Skeleton className="w-full h-full object-cover rounded-lg" />
				</div>
			)}
			<CldImage
				width="720"
				height="480"
				src={public_id}
				sizes="100vw"
				alt="Description of my image"
				className={`w-full h-80 object-cover rounded-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out`}
				onLoad={() => setIsLoading(false)}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
		</div>
		</>
	);
};

export default CloudinaryImage;
