import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{/* Form Section */}
			<div className="flex flex-col items-center justify-center mx-auto my-10">
				{children}
			</div>
		</>
	);
};

export default layout;
