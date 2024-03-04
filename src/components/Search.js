import React from "react";
export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              placeholder="Search"
              type="Search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />

            <button
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
              className="btn search_btn"
            >
              Search Movies
            </button>
          </div>
          <div className="my-2">
            <label>
              <input
                className="with-gap mr-4 ml-2"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === "all"}
              />
              <span className="ml-4">All</span>
            </label>
            <label>
              <input
                className="with-gap "
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span className="ml-4">Movies only</span>
            </label>
            <label>
              <input
                className="with-gap mr-4 ml-2"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span className="ml-4">Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
