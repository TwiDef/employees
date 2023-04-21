import EployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EployeesList = ({ data }) => {

    const elements = data.map(item => {
        return (

            <EployeesListItem {...item} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployeesList;