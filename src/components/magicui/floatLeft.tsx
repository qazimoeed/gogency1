import React, { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface FloatLeftProps {
	className?: string
	children?: React.ReactNode
}

const FloatLeft: React.FC<FloatLeftProps> = ({ className, children }) => {
	const controls = useAnimation()
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					controls.start({ opacity: 1, x: 0 })
				} else {
					controls.start({ opacity: 0, x: -100 })
				}
			},
			{ threshold: 0.1 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [controls])

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, x: -100 }}
			animate={controls}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	)
}

export default FloatLeft
