import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            type="button" 
            className="btn btn-light">
                Все сотрудники
            </button>
            <button 
            type="button" 
            className="btn btn-outline-light">
                На повышение
            </button>
            <button 
            type="button" 
            className="btn btn-outline-light">
                ЗП больше 1000 BYN
            </button>

        </div>
    )
}

export default AppFilter;