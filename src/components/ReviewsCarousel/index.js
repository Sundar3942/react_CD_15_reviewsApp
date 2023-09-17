import './index.css'
import {Component} from 'react'

// Write your code here

const returnUserProfile = props => {
  const {imgUrl, username, companyName, description} = props

  return (
    <>
      <img src={imgUrl} className="profile-image" alt={username} />
      <p className="user-name">{username}</p>
      <p className="company-name">{companyName}</p>
      <p className="description">{description}</p>
    </>
  )
}

class ReviewsCarousel extends Component {
  state = {
    profileId: 1,
  }

  changeStateToLeft = () => {
    this.setState(prevState => ({profileId: prevState.profileId - 1}))
  }

  leftButtonHandler = () => {
    const {profileId} = this.state
    if (profileId !== 1) {
      this.changeStateToLeft()
    }
  }

  changeStateToRight = () => {
    this.setState(prevState => ({profileId: prevState.profileId + 1}))
  }

  rightButtonHandler = () => {
    const {profileId} = this.state
    if (profileId !== 4) {
      this.changeStateToRight()
    }
  }

  render() {
    const {reviewsList} = this.props

    const {profileId} = this.state
    const profileDetails = reviewsList.find(each => each.id === profileId)
    const returnedProfile = returnUserProfile(profileDetails)

    return (
      <div className="page">
        <div>
          <button
            data-testid="leftArrow"
            type="button"
            className="arrow-btn"
            onClick={this.leftButtonHandler}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
        </div>
        <div className="profile-container">
          <h1 className="reviews-heading">Reviews</h1>
          {returnedProfile}
        </div>
        <div>
          <button
            data-testid="rightArrow"
            type="button"
            className="arrow-btn"
            onClick={this.rightButtonHandler}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
