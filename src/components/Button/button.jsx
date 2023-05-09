import classNames from 'classnames'

import styles from './button.module.css';

export const Button = ({caption, type, ...props}) => {
    const className = classNames(styles.button, type === 'secondary' ? styles['button-secondary'] : styles['button-primary'])
    return (
        <button className={className} type="button" {...props}>
            {caption}
        </button>
    )
}
