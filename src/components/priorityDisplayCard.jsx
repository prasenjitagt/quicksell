import React from 'react'
import '../css/priorityCard.css'
import MyImage from '../assets/images/1.jpg'
import TodoIcon from '../assets/icons/To-do.svg'



const PriorityDiplayCard = ({ ticketId, ticketTitle, ticketTagFeatureRequest, priorityIcon }) => {


    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };
    return (
        <div className='container'>
            <section className='top-section'>
                <p>{ticketId}</p>

                <img src={MyImage} alt="image" />

            </section>


            <p className='middle-section' >{truncateTitle(ticketTitle, 70)}</p>


            <section className='bottom-section'>
                <div>

                    <img src={TodoIcon} alt="icon" />

                    <p>
                        {ticketTagFeatureRequest}
                    </p>


                </div>
            </section>

        </div>
    )
}

export default PriorityDiplayCard