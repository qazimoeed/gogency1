// "use client"

// import { cn } from "../../lib/utils"
// import { AnimatePresence, motion } from "framer-motion"
// import React, { useMemo } from "react"

// interface TextProps {
// 	word: string
// 	className?: string
// 	duration?: number
// 	delay?: number
// }

// interface WavyTextProps {
// 	texts: TextProps[]
// 	variant?: {
// 		hidden: { y: number }
// 		visible: { y: number }
// 	}
// 	as?: "div" | "li"
// 	listClassName?: string
// }

// const WavyText = ({
// 	texts,
// 	variant,
// 	as = "div",
// 	listClassName,
// }: WavyTextProps) => {
// 	const defaultVariants = {
// 		hidden: { y: 10 },
// 		visible: { y: -10 },
// 	}
// 	const combinedVariants = variant || defaultVariants

// 	// Get default values from the first text object or set defaults
// 	const defaultDuration = texts[0]?.duration ?? 1
// 	const defaultDelay = texts[0]?.delay ?? 0.5
// 	const defaultClassName = texts[0]?.className || ""

// 	const Container = as === "li" ? "li" : "div"

// 	return (
// 		<Container
// 			className={cn(
// 				as === "li"
// 					? listClassName
// 					: "flex flex-col justify-center items-center space-y-4"
// 			)}
// 		>
// 			{texts.map((textProps, index) => {
// 				const { word, className, duration, delay } = textProps
// 				const characters = useMemo(() => word.split(""), [word])
// 				return (
// 					<div
// 						key={index}
// 						className={cn(
// 							"flex overflow-hidden",
// 							as === "li" ? "justify-start" : "justify-center space-x-2 p-3"
// 						)}
// 					>
// 						<AnimatePresence>
// 							{characters.map((char, i) => (
// 								<motion.span
// 									key={i}
// 									initial="hidden"
// 									animate="visible"
// 									exit="hidden"
// 									variants={combinedVariants}
// 									transition={{
// 										yoyo: Infinity,
// 										duration: duration ?? defaultDuration,
// 										delay: i * (delay ?? defaultDelay),
// 									}}
// 									className={cn(
// 										className ?? defaultClassName,
// 										"inline-block",
// 										as !== "li" &&
// 											"font-display text-center text-4xl font-bold tracking-[-0.15em] md:text-7xl"
// 									)}
// 								>
// 									{char}
// 								</motion.span>
// 							))}
// 						</AnimatePresence>
// 					</div>
// 				)
// 			})}
// 		</Container>
// 	)
// }

// export default WavyText
