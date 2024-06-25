import React, { CSSProperties } from "react"

export interface ShimmerButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	shimmerColor?: string
	shimmerSize?: string
	shimmerDuration?: string
	className?: string
	children?: React.ReactNode
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
	(
		{
			shimmerColor = "#ffffff",
			shimmerSize = "0.05em",
			shimmerDuration = "3s",
			className,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				style={
					{
						"--spread": "90deg",
						"--shimmer-color": shimmerColor,
						"--speed": shimmerDuration,
						"--cut": shimmerSize,
					} as CSSProperties
				}
				className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap ${className}`}
				ref={ref}
				{...props}
			>
				{/* spark container */}
				<div className="absolute inset-0 overflow-hidden [container-type:size]">
					{/* spark */}
					<div className="absolute inset-0 h-[100cqh] animate-slide">
						{/* spark before */}
						<div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
					</div>
				</div>
				{/* backdrop */}
				<div className="absolute inset-[var(--cut)] bg-[#212121] rounded-[30px]" />
				{/* Highlight */}
				<div className="absolute inset-[var(--cut)] rounded-[30px] shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f] transition-all duration-300 ease-in-out pointer-events-none" />
				{/* Text */}
				<span className="relative z-10">{children}</span>
			</button>
		)
	}
)

ShimmerButton.displayName = "ShimmerButton"
export default ShimmerButton
