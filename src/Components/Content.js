import React from 'react'

var newYear = new Date('January 1, 2023')

const getTimeDelta = ()=>{
    var now = new Date();
        
        
    var diff = newYear.getTime() - now.getTime()
    var daysLeft = diff/(1000 * 3600 * 24)
    var absDaysLeft = Math.floor(daysLeft)
    
    var hoursLeft = (daysLeft - absDaysLeft) * 24
    var absHoursLeft = Math.floor(hoursLeft)

    var minsLeft = (hoursLeft - absHoursLeft) * 60
    var absMinsLeft = Math.floor(minsLeft)

    var secondsLeft = (minsLeft - absMinsLeft) * 60
    var absSecondsLeft = (Math.floor(secondsLeft))

    return {
        absDaysLeft,
        absHoursLeft,
        absMinsLeft,
        absSecondsLeft
    }
}

function Content(){
        const [countdown, setCountdown] = React.useState()
        const [loading, setLoading] = React.useState(true)
    
        React.useEffect(()=>{
            const interval = setInterval(()=>{
                const timeDelta = getTimeDelta()
                setCountdown(timeDelta)
                setLoading(false)
            },1000)
            
            return ()=> clearInterval(interval)


        })

        if(loading){
            return <h1>Loading....</h1>
        }
    
      

    return(
        <div id="content">
            
            <p>Countdown to the New Year</p>
            <h1>2023</h1>
            <div className="timer">
                <div className='item'>
                    <div className="time days">{countdown.absDaysLeft > 9 ? countdown.absDaysLeft : `0${countdown.absDaysLeft}`}</div>
                    <span>{countdown.absDaysLeft > 1 ? "Days" : "Day"}</span>
                </div>
                <div className='item'>
                    <div className="time hours">{countdown.absHoursLeft > 9 ? countdown.absHoursLeft : `0${countdown.absHoursLeft}`}</div>
                    <span>{countdown.absHoursLeft > 1 ? "Hours" : "Hour"}</span>
                </div>
                <div className='item'>
                    <div className="time minutes">{countdown.absMinsLeft > 9 ? countdown.absMinsLeft : `0${countdown.absMinsLeft}`}</div>
                    <span>{countdown.absMinsLeft > 1 ? "Minutes" : "Minute"}</span>
                </div>
                <div className='item'>
                    <div className="time seconds">{countdown.absSecondsLeft > 9 ? countdown.absSecondsLeft : `0${countdown.absSecondsLeft}`}</div>
                    <span>{countdown.absSecondsLeft > 1 ? "Seconds" : "Second"}</span>
                </div>
            </div>
        </div>
    )
}

export default Content