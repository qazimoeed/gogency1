import React from "react"
import { motion } from "framer-motion"
import clsx from "clsx" // Import clsx for conditional class merging

const animationProps = {
	initial: { "--x": "100%", scale: 0.8 },
	animate: { "--x": "-100%", scale: 1 },
	whileTap: { scale: 0.95 },
	transition: {
		repeat: Infinity,
		repeatType: "loop",
		repeatDelay: 1,
		type: "spring",
		stiffness: 20,
		damping: 15,
		mass: 2,
		scale: {
			type: "spring",
			stiffness: 200,
			damping: 5,
			mass: 0.5,
		},
	},
} as const

interface ShinyButton2Props {
	text?: string
	className?: string
}

const ShinyButton2: React.FC<ShinyButton2Props> = ({
	text = "shiny-button",
	className,
}) => {
	return (
		<motion.button
			{...animationProps}
			className={clsx(
				"btnFont relative rounded-[30px] px-6 py-2 font-medium transition-[box-shadow] duration-300 ease-in-out bg-[#ffffff] text-[#212121] border border-[#212121] hover:shadow-[0_0_20px_rgba(33,33,33,0.1)]",
				className // Merge the parent provided className
			)}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "fit-content", // Default width
				height: "auto", // Default height
			}}
		>
			<span
				className="relative block h-full text-sm uppercase tracking-wide"
				style={{
					maskImage:
						"linear-gradient(-75deg,#212121 calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#212121 calc(var(--x) + 100%))",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{text}
			</span>
			<span
				style={{
					mask: "linear-gradient(#000, #000) content-box,linear-gradient(#000, #000)",
					maskComposite: "exclude",
				}}
				className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(33,33,33,0.1)_calc(var(--x)+20%),rgba(33,33,33,0.5)_calc(var(--x)+25%),rgba(33,33,33,0.1)_calc(var(--x)+100%))] p-px"
			/>
		</motion.button>
	)
}

export default ShinyButton2
