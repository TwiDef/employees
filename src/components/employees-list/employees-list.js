import EployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EployeesListItem />
            <EployeesListItem />
            <EployeesListItem />
        </ul>
    )
}

export default EployeesList;