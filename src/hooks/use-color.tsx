import { useEffect, useState } from "react";

const useColor = (name: string) => {
    const [color, setColor] = useState<string>('')

    setColor(name)

    return color
}

export default useColor