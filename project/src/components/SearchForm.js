import React from "react";
import "../css/search.css"

class SearchForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let foodName = this.food.value;
        let path = `search/${foodName}`;
        this.props.history.push(path)
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <div className="search_submit">
                    <input type="text" class="inputMobile" aria-label="search" placeholder="Хайх" />
                    <button className="search_button" aria-label="submit search"><img src="/icons/search.svg" /></button>
                </div>
                <div className="search_input">
                    <input
                        className="inputWeb"
                        type="text"
                        placeholder="Хайх"
                    />
                </div>
            </form>



        )




    }
}

export default SearchForm;