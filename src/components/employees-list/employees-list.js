import EployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EployeesList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <EployeesListItem key={id} {...itemProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployeesList;