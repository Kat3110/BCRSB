import * as React from 'react';
import './style.css'
import {ReactComponent as Pinned} from '../../assets/pinned.svg'
import {useState} from "react";
import CapitalLetter from "../capital-letter";


function RadioProjects(props) {

    const [pinned, setPinned] = useState(props.pinned)

    function changePinned(e) {
        e.preventDefault()
        setPinned(!pinned)
    }

    return (
        <label className="radio-projects">
            <input type="radio" defaultChecked={props.check} name="radio"/>
            <div className='radio-projects__card'>
                <img className='radio-projects__card_img' src={props.img}/>
                <div className='radio-projects__card_box'>
                    <h3 className='radio-projects__typo'>{props.title}</h3>
                    <div className='radio-projects__name'>
                        <CapitalLetter
                            letter={props.name[0]}
                            bgColor={props.color}
                        />
                        {props.name}
                    </div>
                </div>
                <Pinned
                    onClick={(e)=> changePinned(e)}
                    className={"radio-projects__pinned" + (pinned ? ' pinned' : '')}  />
            </div>
            <span className="radio-projects__checkmark"></span>
        </label>
    );
}

export default RadioProjects;