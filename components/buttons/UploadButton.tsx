"use client";

import { CldUploadButton } from "next-cloudinary";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { revalidateGallery } from "@/lib/actions/strip.actions";


const UploadButton = () => {
	const router = useRouter();
	const [isUploading, setIsUploading] = useState(false);
	const [uploadSuccess, setUploadSuccess] = useState(false);

	// Effect to force refresh when upload is successful
	useEffect(() => {
		if (uploadSuccess) {
			// First refresh
			router.refresh();

			// Set a timer for a second refresh in case the first one wasn't enough
			const timer = setTimeout(() => {
				router.refresh();
				setUploadSuccess(false);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [uploadSuccess, router]);

	const handleSuccess = async (result: any) => {
		setIsUploading(true);
		try {
			// Call the server action to revalidate
			await revalidateGallery();
			
			// Set upload success to trigger the effect
			setUploadSuccess(true);
		} catch (error) {
			console.error("Failed to revalidate:", error);
		} finally {
			setIsUploading(false);
		}
	};

	const handleError = (error: any) => {
		console.error("Upload failed:", error);
		setIsUploading(false);
	};

	return (
		<>
			<Button 
				asChild 
				variant={"ghost"} 
				className="cursor-pointer"
				disabled={isUploading}
			>
				<CldUploadButton
					uploadPreset="photoesset"
					onSuccess={handleSuccess}
					onError={handleError}
				>
					{isUploading ? 'Uploading...' : 'Upload Image'}
				</CldUploadButton>
			</Button>
		</>
	);
};

export default UploadButton;