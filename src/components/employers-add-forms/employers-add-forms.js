import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового работничка сраного</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в BYN?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить скатину</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;