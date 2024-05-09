// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavourite} = props
  const {title, id, date, isStarred} = appointmentDetails

  const date = new Date()

  const year = date.getFullYear()
  const month = date.getMonth()
  const date12 = date.getDate()

  const newDate = format(new Date(year, month, date12), 'dd MMMM yyyy, EEEE')

  const isSelected = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const isFavourite = () => {
    toggleIsFavourite(id)
  }

  return (
    <li className="list-item">
      <div className="container">
        <p className="title">{title}</p>
        <p className="date">Date: {newDate}</p>
      </div>
      <button onClick={isFavourite} testid="star" type="button">
        <img src={isSelected} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
