import React, { useState } from 'react'
import '../css/nav.css'
import DisplayIcon from '../assets/icons/Display.svg'
import DownArrowIcon from '../assets/icons/down.svg'



const Nav = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDialog = () => {

        setIsModalOpen(prev => !prev)


    }




    return (
        <nav className='nav'>
            <div className='nav-div' onClick={openDialog}>
                <img src={DisplayIcon} alt="Display Icon" />
                <p>Display</p>
                <img src={DownArrowIcon} alt="Down Arrow Icon" />
            </div>



            {isModalOpen === true ? (<section className='modal'>
                <div className='modal-div'>
                    <p>Grouping</p>
                    <select name="filter" id="filter">
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>

                    </select>
                </div>
                <div className='modal-div'>
                    <p>Ordering</p>
                    <select name="filter" id="filter">
                        <option value="status">Priority</option>
                        <option value="user">Title</option>

                    </select>
                </div>
            </section>) : ''}





        </nav>
    )
}

export default Nav