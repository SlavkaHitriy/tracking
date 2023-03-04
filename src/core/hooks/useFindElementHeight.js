import { useEffect, useState } from 'react'

export const useFindElementHeight = (elementRef) => {
    const [height, setHeight] = useState(0)

    const calculateHeight = () => {
        const parentEl = elementRef.current.parentElement
        const allChildren = parentEl.children
        let elementHeight = 0

        for (let i = 0; i < allChildren.length; i++) {
            if (allChildren[i] !== elementRef.current) {
                elementHeight += allChildren[i].offsetHeight
            }
        }

        setHeight(parentEl.offsetHeight - elementHeight)
    }

    useEffect(() => {
        if (elementRef.current) {
            calculateHeight()
        }
    }, [elementRef])

    return height
}
