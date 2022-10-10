import React, {useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import Popup from '../components/ui/Popup'
//import classes from './AllMeetups.module.css'
import './AllMeetups.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'



export interface IState {
    meetupsy: {
        id: number
        image: string
        title: string
        address: string
        description: string
    }[]
    }


const AllMeetups = () => {

    const [meetups, setMeetups] = useState<IState['meetupsy']>([
        {
            id: 123,
            image: 'https://i.imgur.com/i4WpOUM.jpg',
            title: 'Car Meetup',
            address: 'Baker Street 14',
            description: 'EUDM Meetup'
        },
        {
            id: 1233,
            image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg',
            title: 'Cooking Show',
            address: 'Downtown 14',
            description: 'Pizza Cooking Show'
        }
    ])

    useEffect(() => {
        const data = window.localStorage.getItem('MEETUP_LIST');
        if (data !== null) setMeetups(JSON.parse(data))
    },[])

    useEffect(() => {
        window.localStorage.setItem('MEETUP_LIST', JSON.stringify(meetups))
    }, [meetups])

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <section>
            <h1 className='oke'>All Current Meetups</h1>
            <MeetupList meetups={meetups} />
            <button className='open' onClick={() => setButtonPopup(true)}><FontAwesomeIcon icon={faCalendarPlus} /></button>
            <Popup trigger={buttonPopup}  setTrigger={setButtonPopup}>
                <NewMeetupForm meetups={meetups} setMeetups={setMeetups} />
            </Popup>
        </section>
    )
}

export default AllMeetups