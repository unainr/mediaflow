"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "../modetoggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NavbarDemo() {
	const pathname = usePathname();
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Image Generate",
			link: "/imagegenerate",
		},
		{
			name: "Pricing",
			link: "/pricing",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="fixed w-full top-0 z-50">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
					<SignedOut>
						<Button asChild className="cursor-pointer z-10  rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium dark:text-white text-gray-400 backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none ">
							<Link href="/sign-in">Sign In</Link>
						</Button>
						</SignedOut>
						<SignedIn>
								<UserButton />
							</SignedIn>
						<NavbarButton variant="secondary">
							{" "}
							<ModeToggle />
						</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}>
						{navItems.map((item, idx) => (
							<Link
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className={`relative  ${
									pathname === item.link
										? "text-blue-500 "
										: "text-gray-500 dark:text-neutral-100"
								} `}>
								<span className="block">{item.name}</span>
							</Link>
						))}
						<div className="flex w-full flex-col gap-4">
							<Button
								onClick={() => setIsMobileMenuOpen(false)}
								asChild
								className="cursor-pointer z-10 rounded-full ">
								<Link href="/sign-in">Sign In</Link>
							</Button>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="secondary"
								className="  rounded-full">
								<ModeToggle />
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
			{/* Navbar */}
		</div>
	);
}
