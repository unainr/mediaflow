import React from "react";
import UploadButton from "@/components/buttons/UploadButton";
import cloudinary from "cloudinary";
import Link from "next/link";
import CloudinaryImage from "@/components/cloudinarycomponents/CloudinaryImage";
import Image from "next/image";
import { revalidatePath } from "next/cache";

interface SearchResult {
	public_id: string;
	url: string;
}

const ImageGenerate = async () => {
	const result = (await cloudinary.v2.search
		.expression(`resource_type:image`)
		.sort_by("created_at", "desc")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	const imageResult = result.resources.map((resource) => resource.public_id);

	return (
		<>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Hero section with gradient background */}
				<div className="relative overflow-hidden rounded-xl shadow-2xl mb-12 group">
					{/* Dynamic animated background */}
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700"></div>

					{/* Animated particle background */}
					<div className="absolute inset-0 opacity-30">
						<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')] animate-subtle-shift"></div>
					</div>

					{/* Floating light orbs - animated */}
					<div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob"></div>
					<div className="absolute top-10 right-0 w-40 h-40 bg-purple-300 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

					{/* Modern grid lines */}
					<div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

					{/* Spotlight effect */}
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_70%)] transition-all duration-1000"></div>

					{/* Content container */}
					<div className="relative min-h-[28vh] flex items-center justify-center py-8 px-6">
						<div className="flex flex-col items-center justify-center text-center relative z-10 max-w-3xl mx-auto">
							{/* Attention-grabbing headline with animated text effect */}
							<h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
								<span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-gradient-x">
									Create Stunning Images
								</span>
							</h1>

							{/* Animated accent line */}
							<div className="w-24 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-pulse mb-3"></div>

							{/* Compelling subheading */}
							<p className="text-white/90 text-lg max-w-xl mb-6 font-light">
								Transform ordinary photos into{" "}
								<span className="text-pink-300 font-medium">
									extraordinary art
								</span>{" "}
								with our powerful AI tools
							</p>

							{/* Attention-grabbing button with animation */}
							<div className="relative group transform hover:scale-105 transition-all duration-300">
								<div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 animate-pulse"></div>
								<div className="relative px-6 py-3 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg border border-white/10">
									<span className="relative flex items-center justify-center text-white font-medium">
										<svg
											className="w-5 h-5 mr-2 text-pink-300"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
											/>
										</svg>
										<UploadButton />
									</span>
								</div>
							</div>

							{/* Social proof elements */}
							<div className="flex justify-center gap-3 mt-5">
								<div className="flex -space-x-2">
									<div className="relative w-6 h-6 rounded-full border border-white overflow-hidden">
										<Image
											src="https://randomuser.me/api/portraits/women/17.jpg"
											alt="User avatar"
											fill
											sizes="24px"
											className="object-cover"
										/>
									</div>

									<div className="relative w-6 h-6 rounded-full border border-white overflow-hidden">
										<Image
											src="https://randomuser.me/api/portraits/men/32.jpg"
											alt="User avatar"
											fill
											sizes="24px"
											className="object-cover"
										/>
									</div>

									<div className="relative w-6 h-6 rounded-full border border-white overflow-hidden">
										<Image
											src="https://randomuser.me/api/portraits/women/44.jpg"
											alt="User avatar"
											fill
											sizes="24px"
											className="object-cover"
										/>
									</div>
								</div>
								<span className="text-xs text-white/80">
									<span className="font-semibold text-pink-300">10,000+</span>{" "}
									creators trust our tools
								</span>
							</div>

							{/* Feature badges */}
							<div className="flex flex-wrap justify-center gap-2 mt-4">
								<div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 flex items-center border border-white/5 shadow-sm">
									<span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
									Instant Enhancement
								</div>
								<div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 flex items-center border border-white/5 shadow-sm">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
									AI Powered
								</div>
								<div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 flex items-center border border-white/5 shadow-sm">
									<span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
									Pro Quality
								</div>
							</div>
						</div>
					</div>

					{/* Dynamic bottom border */}
					<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
				</div>

				{/* Gallery section */}
				<div className="mt-12">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
							<span className="inline-block border-b-4 border-indigo-500 pb-1">
								Your Gallery
							</span>
						</h2>
						<span className="text-sm text-gray-500 font-medium">
							{imageResult.length} images
						</span>
					</div>

					{imageResult.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
							{imageResult.map((public_id: string) => (
								<Link
									href={`/edit/${public_id}`}
									key={public_id}
									className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
									<div className="aspect-square overflow-hidden">
										<div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
											<CloudinaryImage public_id={public_id} />
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
											<span className="px-3 py-1.5 bg-white/90 text-black font-medium rounded-full text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
												Edit Image
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="bg-gray-50 border border-gray-100 rounded-xl p-12 text-center">
							<div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								No images yet
							</h3>
							<p className="text-gray-500 mb-6">
								Upload your first image to get started
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ImageGenerate;

export const revalidate  = 60