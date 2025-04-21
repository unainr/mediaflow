import UploadButton from "@/components/buttons/UploadButton";
import { HeroSection } from "@/components/HeroSection";
import CloudinaryImage from "@/components/cloudinarycomponents/CloudinaryImage";
import cloudinary from "cloudinary";
import Link from "next/link";


interface SearchResult {
	public_id: string;
  url: string;
}

export default async function Home() {
	const result = (await cloudinary.v2.search
		.expression(`resource_type:image`)
		.sort_by("created_at", "desc")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	const imageResult = result.resources.map((resource) => resource.public_id);
	const images = result.resources.slice(0,32).map((resource) => resource.url);

	return (
		<section>
			<HeroSection images={images} />
			<div className="space-y-16 my-12">
  {/* Gallery Header */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 inline-block">
      Featured Creations
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
      Explore our collection of stunning images ready for transformation. Select any image to begin editing.
    </p>
  </div>

  {/* Enhanced Image Grid with Animation */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    {imageResult.slice(0, 8).map((public_id: string, index) => (
      <Link 
        href={`/edit/${public_id}`} 
        key={public_id}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
        style={{ 
          animationDelay: `${index * 100}ms`,
          animation: "fadeInUp 0.6s ease-out forwards"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20 flex flex-col">
          <span className="text-white font-medium text-lg">Transform This</span>
          <div className="flex mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Edit</span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Enhance</span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Share</span>
          </div>
        </div>
        <div className="aspect-[4/5] overflow-hidden">
          <CloudinaryImage 
            public_id={public_id} 
            
          />
        </div>
      </Link>
    ))}
  </div>
  
  {/* Divider with Icon */}
  <div className="relative flex items-center justify-center py-8">
    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  </div>
  
  {/* Premium Feature Showcase */}
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950/30 dark:to-purple-950/20 p-10 shadow-xl">
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
    
    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Transform Your Media Experience</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          MediaFlow combines powerful AI technology with intuitive design to give you complete control over your visual content.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Editing</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Transform your images with advanced AI tools. Remove objects, change backgrounds, and apply professional effects with just a few clicks.
          </p>
          <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Generate New Content</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create stunning visuals from text prompts. Our AI generation tools turn your ideas into beautiful, unique images instantly.
          </p>
          <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center">
              Try it now
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cloud Storage</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Access your media library from anywhere. Your images are securely stored in the cloud and available whenever you need them.
          </p>
          <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center">
              Explore storage
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/pricing" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Explore Premium Features
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
  
  {/* Testimonial or Stats Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10M+</div>
      <div className="text-gray-600 dark:text-gray-400">Images processed</div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
      <div className="text-gray-600 dark:text-gray-400">Editing features</div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99%</div>
      <div className="text-gray-600 dark:text-gray-400">Customer satisfaction</div>
    </div>
  </div>
</div>



		</section>
	);
}

export const revalidate = 5;


