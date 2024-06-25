"use client"

import { cn } from "../../lib/utils"
import createGlobe, { COBEOptions } from "cobe"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSpring } from "react-spring"
import { ReactComponent as EarthSVG } from "../heroEarth"

const GLOBE_CONFIG: COBEOptions = {
	width: 527,
	height: 527,
	onRender: () => {},
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 0,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	markers: [
		{ location: [14.5995, 120.9842], size: 0.03 },
		{ location: [19.076, 72.8777], size: 0.1 },
		{ location: [23.8103, 90.4125], size: 0.05 },
		{ location: [30.0444, 31.2357], size: 0.07 },
		{ location: [39.9042, 116.4074], size: 0.08 },
		{ location: [-23.5505, -46.6333], size: 0.1 },
		{ location: [19.4326, -99.1332], size: 0.1 },
		{ location: [40.7128, -74.006], size: 0.1 },
		{ location: [34.6937, 135.5022], size: 0.05 },
		{ location: [41.0082, 28.9784], size: 0.06 },
	],
}

export default function Globe({
	className,
	config = GLOBE_CONFIG,
}: {
	className?: string
	config?: COBEOptions
}) {
	let phi = 0
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const pointerInteracting = useRef(null)
	const pointerInteractionMovement = useRef(0)
	const [{ r }, api] = useSpring(() => ({
		r: 0,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}))

	const [dimensions, setDimensions] = useState({ width: 527, height: 527 })

	const updatePointerInteraction = (value: any) => {
		pointerInteracting.current = value
		canvasRef.current!.style.cursor = value ? "grabbing" : "grab"
	}

	const updateMovement = (clientX: any) => {
		if (pointerInteracting.current !== null) {
			const delta = clientX - pointerInteracting.current
			pointerInteractionMovement.current = delta
			api.start({ r: delta / 200 })
		}
	}

	const onRender = useCallback(
		(state: Record<string, any>) => {
			if (!pointerInteracting.current) phi += 0.005
			state.phi = phi + r.get()
			state.width = dimensions.width
			state.height = dimensions.height
		},
		[pointerInteracting, phi, r, dimensions]
	)

	const onResize = () => {
		if (canvasRef.current) {
			const { width, height } = canvasRef.current.getBoundingClientRect()
			setDimensions({ width, height })
		}
	}

	useEffect(() => {
		window.addEventListener("resize", onResize)
		onResize()

		const globe = createGlobe(canvasRef.current!, {
			...config,
			width: dimensions.width,
			height: dimensions.height,
			onRender,
		})

		setTimeout(() => (canvasRef.current!.style.opacity = "1"))
		return () => {
			globe.destroy()
			window.removeEventListener("resize", onResize)
		}
	}, [dimensions])

	return (
		<div
			className={cn(
				"relative z-20 w-full max-w-[85%] md:max-w-[75%] lg:max-w-[100%] mr-[10px] mt-0 bg-red-500", // Added bg-red-500 for visibility
				className
			)}
		>
			<EarthSVG className="absolute inset-0 w-full h-full fill-blue-500" />

			<canvas
				className={cn(
					"absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size] bg-green-500" // Added bg-green-500 for visibility
				)}
				ref={canvasRef}
				onPointerDown={(e) =>
					updatePointerInteraction(
						e.clientX - pointerInteractionMovement.current
					)
				}
				onPointerUp={() => updatePointerInteraction(null)}
				onPointerOut={() => updatePointerInteraction(null)}
				onMouseMove={(e) => updateMovement(e.clientX)}
				onTouchMove={(e) =>
					e.touches[0] && updateMovement(e.touches[0].clientX)
				}
			/>
		</div>
	)
}
