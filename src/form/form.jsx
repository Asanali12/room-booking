import { useState } from "react";

import { Button } from "../components/Button/button";
import { Select } from "../components/Select/select";
import { Comment } from "../components/Comment/comment";
import { DatePicker } from "../components/DatePicker/date-picker";
import { TimePicker } from "../components/TimePicker/time-picker";
import { floorOptions, roomNumberOptions, towerOptions } from "./const/select-options";

import styles from './form.module.css';

export const Form = () => {
    
    const [towerValue, setTowerValue] = useState(towerOptions[0].value)
    const [floorValue, setFloorValue] = useState(floorOptions[0].value)
    const [roomNumberValue, setRoomNumberValue] = useState(roomNumberOptions[0].value)
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [comment, setComment] = useState('')
    const [showFormNotFilledMessage, setShowFormNotFilledMessage] = useState(false)
    
    const handleTowerChange = (event) => {
        setTowerValue(event.target.value)
    };
    const handleFloorChange = (event) => {
        setFloorValue(event.target.value)
    };
    const handleRoomNumberChange = (event) => {
        setRoomNumberValue(event.target.value)
    };
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value)
    }
    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value)
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value)
    };

    const refreshForm = () => {
        setTowerValue(towerOptions[0].value)
        setFloorValue(floorOptions[0].value)
        setRoomNumberValue(roomNumberOptions[0].value)
        setDate('')
        setStartTime('')
        setEndTime('')
        setComment('')
    }

    const sendBookingForm = () => {
        if (date === '' || startTime === '' || endTime === '' || comment === ''){
            setShowFormNotFilledMessage(true)
        } else {
            setShowFormNotFilledMessage(false)
            console.log(
                {
                    'tower': towerValue,
                    'floor': floorValue,
                    'room': roomNumberValue,
                    'date': date,
                    'start_time': startTime,
                    'end_time': endTime,
                    'comment': comment
                }
            )
        }
    }
    
    return (
        <div className={styles.form}>
            <h3> Форма бронирования переговорных </h3>
            <div className={styles['input-block']}>
                <label htmlFor="tower">Башня</label>
                <Select id="tower" value={towerValue} className={styles['input-item']} options={towerOptions} onChange={handleTowerChange} />
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="floor">Этаж</label>
                <Select id="floor" value={floorValue} className={styles['input-item']} options={floorOptions} onChange={handleFloorChange} />
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="room">Переговорная комната</label>
                <Select id="room" value={roomNumberValue} className={styles['input-item']} options={roomNumberOptions} onChange={handleRoomNumberChange} />
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="date">Дата</label>
                <DatePicker id="date" className={styles['input-item']} value={date} onChange={handleDateChange}/>
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="startTime">Начало</label>
                <TimePicker id="startTime" className={styles['input-item']} value={startTime} onChange={handleStartTimeChange}/>
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="endTime">Окончание</label>
                <TimePicker id="endTime" className={styles['input-item']} value={endTime} onChange={handleEndTimeChange}/>
            </div>
            <div className={styles['input-block']}>
                <label htmlFor="comment">Комментарий</label>
                <Comment id="comment" className={styles['input-item']} value={comment} onChange={handleCommentChange}/>
            </div>
            <div className={styles['button-block']}>
                {showFormNotFilledMessage &&
                (
                    <span className={styles.error}>
                        Заполните все поля формы
                    </span>
                )
                }
            </div>
            <div className={styles['button-block']}>
                <Button caption={"Очистить"} type={'secondary'} onClick={refreshForm}/>
                <Button caption={"Отправить"} onClick={sendBookingForm}/>
            </div>
        </div>
    )
}
