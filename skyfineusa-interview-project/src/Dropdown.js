import { useState } from "react"
import FontAwesome from 'react-fontawesome';
import './Dropdown.css'



const Dropdown = (props) => {

    const [isListOpen, setIsListOpen] = useState(false)
    const [headerTitle, setHeaderTitle] = useState(props.title)
    
    const { list } = props

    const selectItem = (item) => {
        const { resetThenSet } = props
        const { title, id, key } = item

        setHeaderTitle(`Sorted by ${title}`)
        setIsListOpen(false)

        return resetThenSet(id, key)
    }



    return (
        <div>
            <div className="dd-wrapper">
                <button
                    type="button"
                    className="dd-header"
                    onClick={() => setIsListOpen(!isListOpen)}
                >
                    <div className="dd-header-title">{headerTitle}</div>
                    {isListOpen
                    ? <FontAwesome name="angle-up" size="2x" />
                    : <FontAwesome name="angle-down" size="2x" />
                    }
                </button>
                {isListOpen && (
                    <div
                        role="list"
                        className="dd-list"
                    >
                        <ul className="dd-list">
                        {list.map((item) => (
                            <li>
                                <button
                                    type="button"
                                    className="dd-list-item"
                                    key={item.id}
                                    onClick={() => selectItem(item)}
                                >
                                    {item.title}
                                    {' '}
                                    {item.selected && <FontAwesome name="check" />}
                                </button>
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>       
    ) 
}

export default Dropdown