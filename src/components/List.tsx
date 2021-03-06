import React from "react"
import { gradientColor } from "./Text"

export function List(props: React.PropsWithChildren<{}>) {
	return <div className="grid gap-8 grid-cols-1">{props.children}</div>
}

export function ListItem(props: React.HTMLProps<HTMLAnchorElement>) {
	return (
		<div
			className={`rounded-lg p-1 bg-gray-200 dark:bg-gray-700 
            hover:bg-gradient-to-r ${gradientColor} transition-all duration-300 hover:scale-105 cursor-default`}
		>
			<a
				className="flex flex-col gap-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-md transition-all duration-200 ease-in-out
            "
				{...props}
			/>
		</div>
	)
}
