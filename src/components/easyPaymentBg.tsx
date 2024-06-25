import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, SVGMotionProps } from "framer-motion"

type EasyPaymentBgProps = Omit<
	SVGMotionProps<SVGSVGElement>,
	"xmlns" | "width" | "height" | "fill"
>

const EasyPaymentBg: React.FC<EasyPaymentBgProps> = (props) => {
	const ref = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref as React.RefObject<HTMLElement>,
		offset: ["start end", "end end"],
	})

	const pathLength1 = useTransform(scrollYProgress, [0, 1], [0, 1])
	const pathLength2 = useTransform(scrollYProgress, [0, 1], [0, 1])
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
	const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

	return (
		<motion.svg
			ref={ref as unknown as React.RefObject<SVGSVGElement>}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			style={{
				opacity,
				scale,
				width: "100%",
				height: "100%",
			}}
			{...props}
		>
			<motion.path
				stroke="url(#a)"
				strokeLinecap="round"
				strokeWidth={9}
				d="M871.768 934.5c68 11 210.472 16.246 333.952-138.28 154.35-193.158 69.99-454.774 429.03-543.062 277.85-68.325 160.43 201.761 139.72 339.085-20.71 137.323 123.91 210.208 321.96 97.028 207.85-105.532-7.56-256.013-29.96-414.548-16.1-113.908 72.36-259.558 156.66-270.102"
				style={{ pathLength: pathLength1 }}
			/>
			<motion.path
				stroke="url(#b)"
				strokeLinecap="round"
				strokeWidth={9}
				d="M-925 487.839c30.176 41.427 136.143 105.186 318.6 28.802 228.072-95.481 279.502-365.508 636.9-270.807 276.587 73.288 44.026 253.983-40 364.555C-93.526 720.961 13 829.5 240 871.5"
				style={{ pathLength: pathLength2 }}
			/>
			<defs>
				<linearGradient
					id="a"
					x1={1242.62}
					x2={1847.56}
					y1={477.846}
					y2={795.744}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#9E16DE" />
					<stop offset={0.339} stopColor="#F5DE0A" />
					<stop offset={0.688} stopColor="#24EA28" />
					<stop offset={1} stopColor="#D72D22" />
				</linearGradient>
				<linearGradient
					id="b"
					x1={-421.342}
					x2={-42.952}
					y1={254.959}
					y2={824.014}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#9E16DE" />
					<stop offset={0.339} stopColor="#F5DE0A" />
					<stop offset={0.688} stopColor="#24EA28" />
					<stop offset={1} stopColor="#D72D22" />
				</linearGradient>
			</defs>
		</motion.svg>
	)
}

export default EasyPaymentBg
