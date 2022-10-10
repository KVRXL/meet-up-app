import React, { useState } from 'react'
import { IState as Props } from '../../pages/AllMeetups'
import classes from './NewMeetupForm.module.css'

interface IProps {
  setMeetups: React.Dispatch<React.SetStateAction<Props["meetupsy"]>>
  meetups: Props["meetupsy"]
}



const NewMeetupForm: React.FC<IProps> = ({setMeetups, meetups}) => {

    const [input, setInput] = useState({
        id: "",
        image: "",
        title: "",
        address: "",
        description: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = ():void => {
        if(!input.title || !input.description) 
        {
        return
        }
        setMeetups([
            ...meetups,
            {
              id: parseInt(input.id),
              image: input.image,
              title: input.title,
              address: input.address,
              description: input.description
            }
        ]);

        setInput({
          id: "",
          image: "",
          title: "",
          address: "",
          description: ""
        })
    }
    
  return(
    <div className={classes.AddToList}>
    <input 
        type="text"
        onChange={handleChange}
        className={classes.AddToListInput}
        name="id"
        value={input.id}
        placeholder="ID"
      />
      <input 
        type="text"
        onChange={handleChange}
        className={classes.AddToListInput}
        name="image"
        value={input.image}
        placeholder="Image URL"
      />
      <input 
        type="text"
        onChange={handleChange}
        className={classes.AddToListInput}
        name="title"
        value={input.title}
        placeholder="Title"
      />
      <input 
        type="text"
        onChange={handleChange}
        className={classes.AddToListInput}
        name="address"
        value={input.address}
        placeholder="Address"
      />
      <textarea
        className={classes.AddToListInput}
        name="description"
        value={input.description}
        placeholder="Note"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="AddToList-btn"
      >
        Add to List
      </button>
    </div>
  )
}

export default NewMeetupForm;
