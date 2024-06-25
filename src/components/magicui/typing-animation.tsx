"use client"

import { cn } from "../../lib/utils"
import React, { useEffect, useState } from "react"

interface TypingAnimationProps {
	text: string
	duration?: number
	className?: string
	priority?: number
}

interface TypingAnimationQueue {
	text: string
	duration: number
	className?: string
	priority: number
	resolve: () => void
}

const typingQueue: TypingAnimationQueue[] = []
let isTyping = false

const processQueue = async () => {
	if (isTyping || typingQueue.length === 0) return

	isTyping = true
	const { text, duration, className, resolve } = typingQueue.shift()!

	let i = 0
	let displayedText = ""

	const typingEffect = setInterval(() => {
		if (i < text.length) {
			displayedText += text.charAt(i)
			i++
		} else {
			clearInterval(typingEffect)
			resolve()
			isTyping = false
			processQueue()
		}
	}, duration)

	await new Promise<void>((resolve) => {
		const interval = setInterval(() => {
			if (!isTyping) {
				clearInterval(interval)
				resolve()
			}
		}, 10)
	})
}

export default function TypingAnimation({
	text,
	duration = 200,
	className,
	priority = 1,
}: TypingAnimationProps) {
	const [displayedText, setDisplayedText] = useState<string>("")

	useEffect(() => {
		const startTyping = () => {
			return new Promise<void>((resolve) => {
				typingQueue.push({ text, duration, className, priority, resolve })
				typingQueue.sort((a, b) => a.priority - b.priority)
				processQueue()
			})
		}

		startTyping().then(() => {
			setDisplayedText(text)
		})
	}, [text, duration, className, priority])

	return (
		<h1 className={cn(className)}>
			{displayedText}
		</h1>
	)
}
