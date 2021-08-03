import React from 'react';
import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const day = dayjs(active.date);

    const handleSave = () =>{
        dispatch(startSaveNote(active));
    }

    const handlePictureUpload= () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>{day.format('D MMMM YYYY')}</span>
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
                ></input>
            <div>
                <button className="btn"
                        onClick={handlePictureUpload}>
                    <i class="fas fa-camera"></i>
                    Subir imagen
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}>
                    <i class="far fa-save"></i>
                    Guardar
                </button>
            </div>
        </div>
    )
}
