import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import React from "react"

interface BlurInProps {
	word: string
	className?: string
	variant?: {
		hidden: { filter: string; opacity: number }
		visible: { filter: string; opacity: number }
	}
	duration?: number
}

const BlurIn = ({
	word,
	className: customClassName,
	variant,
	duration = 3,
}: BlurInProps) => {
	const defaultVariants = {
		hidden: { filter: "blur(10px)", opacity: 0 },
		visible: { filter: "blur(0px)", opacity: 1 },
	}

	const combinedVariants = variant || defaultVariants

	// Define the default class names
	const defaultClassName =
		"font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"

	// Combine customClassName and defaultClassName using cn utility function
	const classNames = cn(customClassName || defaultClassName)

	return (
		<motion.h1
			initial="hidden"
			animate="visible"
			transition={{ duration }}
			variants={combinedVariants}
			className={classNames}
		>
			{word}
		</motion.h1>
	)
}

export default BlurIn
