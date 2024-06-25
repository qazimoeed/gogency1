// width={1440}
// height={634}
// import * as React from "react"
// import { SVGProps } from "react"
// import { motion } from "framer-motion"

// const HeroVectorSvg = (
// 	props: SVGProps<SVGSVGElement> & { style: { pathLength: any } }
// ) => (
// 	<svg
// 		viewBox="0 0 1440 634"
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}
// 	>
// 		<motion.path
// 			d="M-47 266.839C-16.8239 308.266 89.1428 372.025 271.6 295.641C499.672 200.16 551.102 -69.8671 908.5 24.834C1185.09 98.1223 952.526 278.817 868.5 389.389C784.474 499.961 876.428 633.271 1104.5 628.931C1337.5 636 1220.63 400.648 1277 250.788C1317.5 143.114 1464.98 57.7275 1544 88.8969"
// 			stroke="url(#paint0_linear_76_115)"
// 			strokeWidth={9}
// 			strokeLinecap="round"
// 			style={{ pathLength: props.style.pathLength }}
// 		/>
// 		<defs>
// 			<linearGradient
// 				id="paint0_linear_76_115"
// 				x1={456.658}
// 				y1={33.9591}
// 				x2={835.048}
// 				y2={603.014}
// 				gradientUnits="userSpaceOnUse"
// 			>
// 				<stop stopColor="#9E16DE" />
// 				<stop offset={0.338542} stopColor="#F5DE0A" />
// 				<stop offset={0.6875} stopColor="#24EA28" />
// 				<stop offset={1} stopColor="#D72D22" />
// 			</linearGradient>
// 		</defs>
// 	</svg>
// )

// export default HeroVectorSvg

import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const HeroVectorSvg = ({ className }: { className?: string }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 30, // Reduced stiffness for smoother animation
		damping: 10, // Reduced damping for smoother animation
		restDelta: 0.001,
	})

	const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])
	const pathOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])

	return (
		<div ref={ref} className={`absolute inset-0 w-full h-full ${className}`}>
			<motion.svg
				viewBox="0 0 1440 634"
				fill="none"
				width="1440"
				height="634"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
				preserveAspectRatio="xMidYMid slice"
			>
				<motion.path
					d="M-47 266.839C-16.8239 308.266 89.1428 372.025 271.6 295.641C499.672 200.16 551.102 -69.8671 908.5 24.834C1185.09 98.1223 952.526 278.817 868.5 389.389C784.474 499.961 876.428 633.271 1104.5 628.931C1337.5 636 1220.63 400.648 1277 250.788C1317.5 143.114 1464.98 57.7275 1544 88.8969"
					stroke="url(#paint0_linear_76_115)"
					strokeWidth={9}
					strokeLinecap="round"
					style={{
						pathLength: pathLength,
						opacity: pathOpacity,
					}}
				/>
				<defs>
					<linearGradient
						id="paint0_linear_76_115"
						x1={456.658}
						y1={33.9591}
						x2={835.048}
						y2={603.014}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#9E16DE" />
						<stop offset={0.338542} stopColor="#F5DE0A" />
						<stop offset={0.6875} stopColor="#24EA28" />
						<stop offset={1} stopColor="#D72D22" />
					</linearGradient>
				</defs>
			</motion.svg>
		</div>
	)
}

export default HeroVectorSvg
