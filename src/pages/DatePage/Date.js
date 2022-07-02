import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import './Date.css'

const Date = () => {
  // let time = new Date()
  const [fromdate, setfromDate] = useState('')
  const [fromtime, setfromTime] = useState('')
  const [todate, settoDate] = useState('')
  const [totime, settoTime] = useState('')
  const [duration, setduration] = useState('')

  // let date1 = new Date('06/30/2022')
  // let date2 = new Date('07/30/2022')
  // let Difference_In_Time = date1.getTime() - date2.getTime()
  // let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
  // console.log(Difference_In_Days)
  // setduration(Difference_In_Days)

  function gettime(duration) {
    var days = Math.floor(duration / 1000 / 60 / 60 / 24),
      hours = Math.floor((duration / 1000 / 60 / 60) % 24),
      minutes = Math.floor((duration / 1000 / 60) % 60)

    let result = days + ' days ' + hours + ' hours ' + minutes + ' minutes '
    console.log(result)
    setduration(result)
  }

  return (
    <div className="dateandtime">
      <div className="form">
        <label>Duration</label>
        <input
          type="text"
          name="duration"
          placeholder=" Enter Duration"
          value={duration}
        />
      </div>

      <div className="cont">
        <span>From Date</span>
        <div className="date">
          <p>Date picker</p>
          <DatePicker
            onChange={(e) => setfromDate(e.target.value)}
            value={fromdate}
            locale
          />
        </div>

        <div className="time">
          <div>
            <p>Time picker</p>
            <TimePicker
              onChange={(e) => setfromTime(e.target.value)}
              value={fromtime}
            />
          </div>
        </div>
      </div>

      <div className="cont">
        <span>To Date</span>
        <div className="date">
          <p>Date picker</p>
          <DatePicker
            onChange={(e) => settoDate(e.target.value)}
            value={todate}
          />
        </div>
        <div className="time">
          <div>
            <p>Time picker</p>
            <TimePicker
              onChange={(e) => settoTime(e.target.value)}
              value={totime}
            />
          </div>
        </div>
      </div>
      <button onClick={() => gettime(new Date(todate) - new Date(fromdate))}>
        Click
      </button>
    </div>
  )
}

export default Date
