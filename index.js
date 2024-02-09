const Notification = props => {
  //  Write your code here.
  const {className, image, name} = props
  return (
    <li className={className}>
      <div className='sub-card'>
        <img src={image} className='icon' />
        <h1 className='name'>{name}</h1>
      </div>
    </li>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='main-heading'>Notification</h1>
    <ul className='card-container'>
      <Notification
        className='card card-1'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        name='information Message'
      />
      <Notification
        className='card card-2'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        name='success Message'
      />
      <Notification
        className='card card-3'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        name='Warning Message'
      />
      <Notification
        className='card card-4'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        name='Error Message'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
