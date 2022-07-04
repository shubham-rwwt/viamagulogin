import React, { useState } from 'react'
import './Date.css'

const Datedate = () => {
  const [duration, setduration] = useState('')
  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)

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
    // console.log(result)
    setduration(result)
  }

  return (
    <div className="dateandtime">
      <div className="dateandtimediv">
        <div className="datetimepicker">
          <div className="cont">
            <p>From Date:</p>
            <div className="date">
              <input
                value={date1}
                type="datetime-local"
                onChange={(e) => setDate1(e.target.value)}
              />
            </div>
          </div>

          <div className="cont">
            <p>To Date:</p>
            <div className="date">
              <input
                value={date2}
                type="datetime-local"
                onChange={(e) => setDate2(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={() => gettime(new Date(date2) - new Date(date1))}>
            Get Duration
          </button>
        </div>
        <div className="duration">
          <label htmlFor="">Duration:</label>
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Datedate
