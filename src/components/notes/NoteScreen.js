import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="A great power"
                    className="notes__title-input"/>
                
                <textarea 
                    placeholder="What happened today"
                    className="notes__textarea"/>

                <div className="notes__image">
                    <img src="https://images2.alphacoders.com/752/thumb-1920-75210.jpg" alt="referencia"/>
                </div>
            </div>
        </div>
    )
}
