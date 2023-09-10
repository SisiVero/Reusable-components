import React from "react"
import classnames from "classnames"

export default function Badge({ children, className, size, color, ...rest }) {
    let sizeClass = size && `button-${size}`
    let colorClass = color && `button-${color}`
    const allClasses = classnames(sizeClass, colorClass, className)

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}