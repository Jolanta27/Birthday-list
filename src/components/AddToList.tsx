import React, {useState} from 'react';
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        notes: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
        if(!input.name || !input.age) return 

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                note: input.notes
            }
        ]);
        setInput({
            name: "",
            age: "",
            notes: ""
        })
    }
    return (
        <div className="AddToList">
            <input 
            type="text"
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
            />
            <input 
            type="type"
            placeholder="Age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"
            />
            <textarea
            placeholder="Notes"
            className="AddToList-input"
            value={input.notes}
            onChange={handleChange}
            name="notes"
            />
            <button 
            className="AddToList-btn"
            onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}
export default AddToList;