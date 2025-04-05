'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { CldImage } from 'next-cloudinary';


type CloudinaryEffectProps =
| undefined
| "generativefill"
| "blur"
| "grayscale"
| "pixelate"
| "overlay"
| "crop"
|"Generative Remove"

const CloudinaryEffect = ({id}:{id:string}) => {
	const [GenerativeFill, setGenerativeFill] = useState<CloudinaryEffectProps>();
    const [value, setValue] = useState('')
  return (
    <div className="max-w-full py-20 mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-xl">
  <div className="flex flex-col gap-8">
    {/* Title section */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Image Transformations</h2>
      <p className="text-gray-600 dark:text-gray-400">Apply professional effects to your images</p>
    </div>
    
    {/* Buttons with improved styling */}
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center flex-wrap justify-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
  <Button
    onClick={() => setGenerativeFill(undefined)}
    variant={"destructive"}
    className="font-medium shadow-sm"
  >
    Clear All
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("generativefill")}
    variant={GenerativeFill === "generativefill" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "generativefill" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Generative Fill
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("blur")}
    variant={GenerativeFill === "blur" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "blur" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Apply Blur
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("grayscale")}
    variant={GenerativeFill === "grayscale" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "grayscale" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Gray Scale
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("pixelate")}
    variant={GenerativeFill === "pixelate" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "pixelate" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Pixelate
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("overlay")}
    variant={GenerativeFill === "overlay" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "overlay" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Overlay
  </Button>
  
  <Button
    onClick={() => setGenerativeFill("crop")}
    variant={GenerativeFill === "crop" ? "default" : "secondary"}
    className={`font-medium shadow-sm ${GenerativeFill === "crop" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : ""}`}
  >
    Crop Fill
  </Button>
  
  {/* Form with proper alignment */}
  <form 
    onSubmit={(e) => {
      e.preventDefault();
      setGenerativeFill("Generative Remove");
    }}
    className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto mt-2 sm:mt-0"
  >
    <input 
      type="text" 
      name="value" 
      onChange={(e) => setValue(e.target.value)} 
      placeholder="Generative Remove" 
      className="border border-gray-300 dark:border-gray-700 rounded-md p-2 w-full sm:w-auto" 
    />
    <Button 
      type="submit"
     
    >
      Remove
    </Button>
  </form>
</div>

    
    {/* Image grid with improved styling */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Original image with label */}
      <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full z-10">
          Original
        </div>
        <CldImage
          width="1200"
          height="800"
          src={id}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Original image"
          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
        />
      </div>
      
      {/* Transformed images with consistent styling */}
      {GenerativeFill === "generativefill" && (
  <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
    <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
      Generative Fill
    </div>
    <CldImage
      width="1200"
      height="800"
      src={id}
      sizes="(max-width: 768px) 100vw, 50vw"
      crop="pad"
      fillBackground
      preserveTransformations
      alt="Generated image"
      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
    />
  </div>
)}

      
      {GenerativeFill === "blur" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
            Blur Effect
          </div>
          <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="(max-width: 768px) 100vw, 50vw"
            blur="1200"
            alt="Generated image"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}
      
      {GenerativeFill === "grayscale" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
            Grayscale
          </div>
          <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="(max-width: 768px) 100vw, 50vw"
            grayscale
            alt="Generated image"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}
      
      {GenerativeFill === "pixelate" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
            Pixelate
          </div>
          <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="(max-width: 768px) 100vw, 50vw"
            pixelate
            alt="Generated image"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}
      
      {GenerativeFill === "overlay" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
            Overlay
          </div>
          <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Generated image"
            overlays={[
              {
                publicId: `${id}`,
                position: {
                  x: 50,
                  y: 50,
                  gravity: "north_west",
                },
                effects: [
                  {
                    crop: "fill",
                    gravity: "auto",
                    width: 350,
                    height: 350,
                  },
                ],
              },
            ]}
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}
      
      {GenerativeFill === "crop" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
            Crop Fill
          </div>
          <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="100vw"
            crop="fill"
            alt="Generated image"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}
     
     {GenerativeFill === "Generative Remove" && (
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-xs px-3 py-1 rounded-full z-10">
          Generative Remove
          </div>
          {value?(
            <CldImage
            width="1200"
            height="800"
            src={id}
            sizes="100vw"
            remove={{
                prompt: value,
                removeShadow: true
              }}
            alt="Generated image"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
          ):(
            <div className="flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Select an effect to see the transformation</p>
            </div>
          </div>
          )}
          
        </div>
       )}
      {/* Empty state when no transformation is selected */}
      {!GenerativeFill  && (
        <div className="flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Select an effect to see the transformation</p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

  )
}
export default CloudinaryEffect