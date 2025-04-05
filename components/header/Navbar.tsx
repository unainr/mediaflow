"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../modetoggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setisScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setisScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header>
			<nav
				className={`fixed top-0 z-50 w-full  transition-all duration-200   ${
					isScrolled ? "bg-background/60 backdrop-blur-md" : ""
				}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex items-center">
							<Link href="/" className="flex items-center gap-3 group">
								<div className="relative">
									<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
									<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center relative">
										<svg
											className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-200"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
											/>
										</svg>
									</div>
								</div>
								<h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
									AI Chat Assistant
								</h1>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8 dark:text-white ">
							<Link
								href="/"
								className="text-black dark:text-white transition-colors">
								Home
							</Link>
							<Link
								href="/imagegenerate"
								className="text-black dark:text-white transition-colors">
								Image Generate 
							</Link>
							<Link
								href="/about"
								className="text-black dark:text-white transition-colors">
								About
							</Link>
							<SignedOut>
								<Link
									href="/sign-in"
									className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-black dark:text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
									Sign In
								</Link>
							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
							<ModeToggle />
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
								{isOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md ">
						<Link
							href="/"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
							onClick={() => setIsOpen(false)}>
							Home
						</Link>
						<Link
							href="/pricing"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
							onClick={() => setIsOpen(false)}>
							Pricing
						</Link>
						<Link
							href="/about"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
							onClick={() => setIsOpen(false)}>
							About
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
