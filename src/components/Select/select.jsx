export const Select = ({options, ...props}) => {
    return (
        <select {...props}>
            {options.map(option => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
