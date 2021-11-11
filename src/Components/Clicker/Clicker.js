import React, {useState} from 'react'
import '../Clicker/Clicker.scss'

export const Clicker = () => {

    const [clicks, setClicks] = useState(0)

    const sumarClicks = () => {

        const stock = 10

        if (clicks !== stock)

        setClicks(prevState => prevState + 1)
    }

    const restarClicks = () => {
        if (clicks)       
        setClicks(prevState => prevState - 1)
    }
    return (
        <div>
            <button className="sumar" onClick={() => sumarClicks()}>+</button>
            <button className="resta" onClick={restarClicks}>-</button>
            <p className="clicks">{clicks}</p>
        </div>
    )
}
