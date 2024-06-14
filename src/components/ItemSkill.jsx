import React from 'react'

export default function ItemSkill(props) {
    return (
        <div className="skills__item">
            <ul>
                <li className="skills__img"><i className={props.logo}></i></li>
                <li className="skills__name">{props.name}</li>
            </ul>
        </div>
    )
}
