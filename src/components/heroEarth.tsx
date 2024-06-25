import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={527}
		height={527}
		fill="none"
		{...props}
	>
		<path fill="url(#a)" d="M0 0h527v527H0z" />
		<defs>
			<pattern
				id="a"
				width={1}
				height={1}
				patternContentUnits="objectBoundingBox"
			>
				<use xlinkHref="#b" transform="scale(.0019)" />
			</pattern>
			<image
				xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg8AAAIPC"
				// xlinkHrefcontains more codes but i cut it to not make diffulty for you.
				id="b"
				width={527}
				height={527}
			/>
		</defs>
	</svg>
)
export { SvgComponent as ReactComponent }
