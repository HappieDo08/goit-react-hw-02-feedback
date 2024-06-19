import PropTypes from 'prop-types';
import style from '../Notification/Notification.module.css';

export const Notification = ({ message }) => (
    <p className={style.notification__text}>
    {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}