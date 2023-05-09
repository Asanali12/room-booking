export const Comment = ({value, placeholder, ...props}) => {

    return (
        <textarea placeholder={placeholder} value={value} {...props}/>
    )
}
