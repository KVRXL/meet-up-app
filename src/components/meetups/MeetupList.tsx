import { useState } from 'react'
import classes from './MeetupList.module.css'
import { IState as Props } from '../../pages/AllMeetups'
import Card from '../ui/Card'

interface IProps {
    meetups: Props['meetupsy']
}

const MeetupList: React.FC<IProps> = ({meetups}) => {   
    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true)
    }
    const renderList = ():JSX.Element[] => {
        return meetups.map((meetup) => {
            return(
            <Card key={meetup.id}>
            <li className={classes.list}>
                <div className={classes.image}>
                <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={classes.listheader}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>  
                <div className={classes.actions}>
                    <button onClick={toggler}>{toggle ? <span>To Favorite</span>:<span>Not Favorite</span>}</button>
                </div>
            </li>
            </Card>
            )
        })
    }

    return (
        <ul className={classes.render}>
            {renderList()}
        </ul>
    )
}

export default MeetupList;