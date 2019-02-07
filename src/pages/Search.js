import React, { Component } from "react";
import axios from "axios"


class Search extends Component {

    state = {
        search: "",
        result: [],

    };
    search = (title) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
            .then((res) => {
                this.setState({
                    result: res.data.items,
                    search: "",

                })
                console.log(this.state.result)
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSearch = event => {
        event.preventDefault();
        this.search(this.state.search)
    };

    render() {
        return (
            <>
                <div className="container">
                    <h3>Book Search</h3>
                    <form className="form mt-3" onSubmit={this.submitProduct}>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search by Title"
                            id="search"
                        />
                        <button style={{ float: "right" }} onClick={this.handleFormSearch} className="btn btn-dark mt-3">Search</button>
                        <br /> <br />
                    </form>
                </div>
                 <br/>
                 <br/>
                 <br/>
                {this.state.result.map(book =>
                    <div className="container result" key={book.volumeInfo.infoLink} style={{ visibility: book.volumeInfo.title ? "visible" : "hidden" }} >
                        <ul style={{ listStyle: "none" }}>
                            <li >
                                <button style={{ float: "right" }} onClick={() => this.saveBook(book)} className="btn btn-dark mt-3">Save</button>
                                <button style={{ float: "right", marginRight: "10px" }} className="btn btn-dark mt-3"><a target="_ blank" href={book.volumeInfo.infoLink}>View</a></button>
                            </li>
                        </ul>
                        <hr/>
                        <h5>Title : {book.volumeInfo.title}</h5>
                        <p>Written By : {book.volumeInfo.authors.join(" , ")}</p>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                            <div className="col-md-10">
                                <p>{book.volumeInfo.description}</p>
                            </div>
                        </div>
                    </div>
                )
                }
            </>
        );
    }

}

export default Search;




