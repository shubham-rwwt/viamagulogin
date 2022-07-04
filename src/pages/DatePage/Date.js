import React, { useState } from 'react'
import './Date.css'

const Date = () => {
  // let time = new Date()
  const [fromdate, setfromDate] = useState('')
  const [fromtime, setfromTime] = useState('')
  const [todate, settoDate] = useState('')
  const [totime, settoTime] = useState('')
  const [duration, setduration] = useState('')

  const getdate = () => {
    var days = Math.floor(
      (new Date(todate) - new Date(fromdate)) / 1000 / 60 / 60 / 24,
    )
    var hours = Math.floor(
      ((new Date(todate) - new Date(fromdate)) / 1000 / 60 / 60) % 24,
    )
    var minutes = Math.floor(
      ((new Date(todate) - new Date(fromdate)) / 1000 / 60) % 60,
    )

    let result = days + ' days ' + hours + ' hours ' + minutes + ' minutes '

    setduration(result)
  }

  // function gettime(duration) {
  //   var days = Math.floor(duration / 1000 / 60 / 60 / 24)
  //   var hours = Math.floor((duration / 1000 / 60 / 60) % 24)
  //   var minutes = Math.floor((duration / 1000 / 60) % 60)

  //   let result = days + ' days ' + hours + ' hours ' + minutes + ' minutes '
  //   console.log(result)
  //   let a = 34
  //   setduration(a)
  // }

  return (
    <div className="dateandtime">
      <div className="pickerbody">
        <div className="dur">
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            onChange={(e) => setduration(e.target.value)}
            value={duration}
          />
        </div>

        <div className="pickers">
          <div className="cont">
            <span>From Date</span>
            <div className="date">
              <p>Date picker</p>
              <input
                type="date"
                value={fromdate}
                onChange={(e) => setfromDate(e.target.value)}
              />
            </div>

            <div className="time">
              <div>
                <p>Time picker</p>
                <input
                  type="time"
                  value={fromtime}
                  onChange={(e) => setfromTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="cont">
            <span>To Date</span>
            <div className="date">
              <p>Date picker</p>
              <input
                type="date"
                value={todate}
                onChange={(e) => settoDate(e.target.value)}
              />
            </div>
            <div className="time">
              <div>
                <p>Time picker</p>
                <input
                  type="time"
                  value={totime}
                  onChange={(e) => settoTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={getdate}>Click</button>
      </div>
    </div>
  )
}

export default Date
