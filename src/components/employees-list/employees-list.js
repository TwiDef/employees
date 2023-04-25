import EployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EployeesList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <EployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployeesList;