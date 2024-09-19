import React, { useEffect, useState } from 'react';
import '../css/bodyUser.css';
import axios from 'axios';
import ThreeDotIcon from '../assets/icons/3 dot menu.svg';
import addIcon from '../assets/icons/add.svg';
import priority0Icon from '../assets/icons/No-priority.svg';
import priority1Icon from '../assets/icons/Img - Low Priority.svg';
import priority2Icon from '../assets/icons/Img - Medium Priority.svg';
import priority3Icon from '../assets/icons/Img - High Priority.svg';
import priority4Icon from '../assets/icons/SVG - Urgent Priority grey.svg';
import PriorityDiplayCard from './priorityDisplayCard';


const BodyOfDataPriority = () => {
    const link = "https://api.quicksell.co/v1/internal/frontend-assignment";
    const [data, setData] = useState({ tickets: [], users: [] });

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(link);
                const serverData = await res.data;
                setData(serverData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 0: return priority0Icon;
            case 1: return priority1Icon;
            case 2: return priority2Icon;
            case 3: return priority3Icon;
            case 4: return priority4Icon;
            default: return null; // or a default icon if needed
        }
    };


    const priorityList = [
        { priorityName: 'No Priority', priorityId: 0 },
        { priorityName: 'Urgent', priorityId: 4 },
        { priorityName: 'High', priorityId: 3 },
        { priorityName: 'Medium', priorityId: 2 },
        { priorityName: 'Low', priorityId: 1 },
    ]
    return (
        <div className='body-data'>
            {priorityList.map(priority => (
                <div className='status-data' key={priority.priorityId}>
                    <div className='status-name'>
                        <div className='status-div'>
                            <img src={getPriorityIcon(priority.priorityId)} className='my-image' alt="user" />
                            <p>{priority.priorityName}</p>
                        </div>

                        <div className='status-div'>
                            <img src={addIcon} alt="add icon" />
                            <img src={ThreeDotIcon} alt="menu icon" />
                        </div>
                    </div>

                    <div>
                        {data.tickets
                            .filter(ticket => ticket.priority === priority.priorityId)
                            .map(ticket => (
                                <PriorityDiplayCard
                                    key={ticket.id}
                                    ticketId={ticket.id}
                                    ticketTagFeatureRequest={ticket.tag[0]}
                                    ticketTitle={ticket.title}
                                    priorityIcon={getPriorityIcon(ticket.priority)}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BodyOfDataPriority;
