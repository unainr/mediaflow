'use client';
import {  CldUploadButton } from 'next-cloudinary';
import React from 'react'
import { Button } from '../ui/button';

const UploadButton = () => {
    
    const handleSuccess = (result: any) => {
        const final = result.info.public_id;
       console.log(final);
        };
      const handleError = (error: any) => {
            console.error("Upload failed:", error);
        };
  return (
    <>
    <Button asChild variant={"ghost"} className='cursor-pointer'>
    <CldUploadButton uploadPreset="photoesset" onSuccess={handleSuccess}
				onError={handleError}/>
                </Button>
                </>
  )
}

export default UploadButton