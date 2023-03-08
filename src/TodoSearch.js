import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    {/*useState permite manejar los estados. Utiliza la función que hará los cambios y el value*/ }
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-content">
            <input
                type="search"
                placeholder="Search Task"
                className="search"
                value={searchValue}
                onChange={onSearchValue} />
        </div>

    );
}

export { TodoSearch };