import { useSelector } from "react-redux"

const Notification = () => {

    const notification = useSelector((state) => state.notification.message)
    const error = useSelector((state) => state.notification.errorNotification)

    if(!notification) return null

    const style = {
        border: 'solid',
        color: 'blue',
        padding: 10,
        borderWidth: 1
    }

    if(error) style.color = 'red'

    return(
        <div style={style}>
            <p>{notification.message}</p>
        </div>
    )
}

export default Notification