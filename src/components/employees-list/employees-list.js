import EployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <EployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployeesList;