// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const newArray = []
class Appointments extends Component {
  state = {
    appointmentList: newArray,
    title: '',
    newDate: '',
    isActive: false,
    totalList: '',
  }

  toggleIsFavourite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isStarred: !eachContact.isStarred}
        }
        return eachContact
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  addContact = event => {
    event.preventDefault()
    const {title, newDate} = this.state
    const newContact = {
      id: uuidv4(),
      title,
      newDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newContact],
      title: '',
      newDate: '',
    }))
  }

  changeTime = event => {
    this.setState({newDate: event.target.value})
  }

  toggleIsFavourite1 = id => {
    const {appointmentList} = this.state
    const resultList = appointmentList.filter(eachItem => eachItem.id !== id)
    this.setState({appointmentList: resultList})
  }

  getStarredItems = () => {
    const {appointmentList, totalList} = this.state

    const result1 = appointmentList.map(eachItem => eachItem)
    const result2 = appointmentList.filter(
      eachItem => eachItem.isStarred === true,
    )
    this.setState({appointmentList: result2, totalList: result1})
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  getTotalItems = () => {
    const {totalList, appointmentList} = this.state
    const result = totalList.map(eachItem => eachItem)
    this.setState({appointmentList: result})
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {appointmentList, title, newDate, isActive} = this.state

    return (
      <div className="bg-container">
        <div className="appointment-card">
          <div className="container">
            <div className="card">
              <h1 className="heading">Add Appointment</h1>
              <form className="form" onSubmit={this.addContact}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  value={newDate}
                  onChange={this.changeTime}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments"
            />
            <hr />

            <div className="card-2">
              <div className="text-head">
                <h2>Appointments</h2>
                {isActive ? (
                  <button
                    className="starred-button"
                    onClick={this.getTotalItems}
                  >
                    Starred
                  </button>
                ) : (
                  <button
                    className="starred-button"
                    onClick={this.getStarredItems}
                  >
                    Starred
                  </button>
                )}
              </div>
            </div>

            <ul>
              {appointmentList.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  appointmentDetails={eachItem}
                  toggleIsFavourite={this.toggleIsFavourite}
                  toggleIsFavourite1={this.toggleIsFavourite1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
