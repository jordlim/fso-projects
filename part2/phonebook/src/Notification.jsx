const Notification = ({ message }) => {
    const successStyle = {
        color: 'green',
        fontSize: 20,
        background: 'lightgrey',
        border: 'solid',
        borderColor: 'green',
        borderRadius: 4,
        width: 256,
        padding: 8,
    }

    if (message === null) {
      return null
    }
  
    return (
      <div style={successStyle}>
        {message}
      </div>
    )
}

export default Notification