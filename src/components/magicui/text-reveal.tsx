// "use client"
// import { motion, useScroll, useTransform, useInView } from "framer-motion"
// import React, { FC, ReactNode, useRef, useEffect } from "react"

// interface TextItem {
// 	text: string
// 	className?: string
// }

// interface TextRevealProps {
// 	textItems: TextItem[]
// }

// export const TextReveal: FC<TextRevealProps> = ({ textItems }) => {
// 	const containerRef = useRef<HTMLDivElement | null>(null)
// 	const isInView = useInView(containerRef, { once: false, amount: 0 })
// 	const { scrollYProgress } = useScroll({
// 		target: containerRef,
// 		offset: ["start end", "end start"],
// 	})

// 	const allWords = textItems.flatMap((item) => item.text.split(" "))

// 	useEffect(() => {
// 		if (isInView && containerRef.current) {
// 			const containerRect = containerRef.current.getBoundingClientRect()
// 			containerRef.current.style.height = `${containerRect.height * 2}px`
// 		}
// 	}, [isInView])

// 	return (
// 		<div ref={containerRef} style={{ position: "relative" }}>
// 			{textItems.map((item, itemIndex) => (
// 				<p key={itemIndex} className={item.className}>
// 					{item.text.split(" ").map((word, wordIndex) => {
// 						const globalWordIndex =
// 							textItems
// 								.slice(0, itemIndex)
// 								.reduce((acc, item) => acc + item.text.split(" ").length, 0) +
// 							wordIndex
// 						const start = globalWordIndex / allWords.length
// 						const end = (globalWordIndex + 1) / allWords.length
// 						return (
// 							<Word
// 								key={`${itemIndex}-${wordIndex}`}
// 								progress={scrollYProgress}
// 								range={[start, end]}
// 								isInView={isInView}
// 							>
// 								{word}
// 							</Word>
// 						)
// 					})}
// 				</p>
// 			))}
// 		</div>
// 	)
// }

// interface WordProps {
// 	children: ReactNode
// 	progress: any
// 	range: [number, number]
// 	isInView: boolean
// }

// const Word: FC<WordProps> = ({ children, progress, range, isInView }) => {
// 	const opacity = useTransform(progress, range, [0, 1])

// 	return (
// 		<motion.span
// 			style={{
// 				opacity: isInView ? opacity : 0,
// 				display: "inline-block",
// 			}}
// 			animate={{ opacity: isInView ? 1 : 0 }}
// 			transition={{ duration: 0.3, delay: range[0] * 1.5 }}
// 		>
// 			{children}{" "}
// 		</motion.span>
// 	)
// }

// export default TextReveal
"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import React, { FC, ReactNode, useRef, useEffect, useState } from "react"

interface TextItem {
	text: string
	className?: string
}

interface TextRevealProps {
	textItems: TextItem[]
}

export const TextReveal: FC<TextRevealProps> = ({ textItems }) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const isInView = useInView(containerRef, { once: false, amount: 0.5 })
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"],
	})

	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!hasScrolled) {
				setHasScrolled(true)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [hasScrolled])

	const allWords = textItems.flatMap((item) => item.text.split(" "))

	return (
		<div ref={containerRef} style={{ position: "relative" }}>
			{textItems.map((item, itemIndex) => (
				<p key={itemIndex} className={item.className}>
					{item.text.split(" ").map((word, wordIndex) => {
						const globalWordIndex =
							textItems
								.slice(0, itemIndex)
								.reduce((acc, item) => acc + item.text.split(" ").length, 0) +
							wordIndex
						const start = globalWordIndex / allWords.length
						const end = (globalWordIndex + 1) / allWords.length
						return (
							<Word
								key={`${itemIndex}-${wordIndex}`}
								progress={scrollYProgress}
								range={[start, end]}
								isInView={isInView}
								hasScrolled={hasScrolled}
							>
								{word}
							</Word>
						)
					})}
				</p>
			))}
		</div>
	)
}

interface WordProps {
	children: ReactNode
	progress: any
	range: [number, number]
	isInView: boolean
	hasScrolled: boolean
}

const Word: FC<WordProps> = ({
	children,
	progress,
	range,
	isInView,
	hasScrolled,
}) => {
	const opacity = useTransform(progress, range, [0, 1])

	return (
		<motion.span
			style={{
				opacity: isInView && hasScrolled ? opacity : 0,
				display: "inline-block",
			}}
			animate={{ opacity: isInView && hasScrolled ? 1 : 0 }}
			transition={{ duration: 0.1, delay: range[0] * 0.5 }}
		>
			{children}{" "}
		</motion.span>
	)
}

export default TextReveal
