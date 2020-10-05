import React from 'react';
import './Filter.css';



export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <label>Print Type</label>
        <select onChange={e=>this.props.setPrintType(e.target.value)}>
          <option value={0}>all</option>
          <option value="BOOK">books</option>
          <option value="MAGAZINE">magazines</option>
        </select>
        <label>Book Type</label>
        <select>
          <option value="no-filter">no filter</option>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="full">full</option>
          <option value="paid-ebooks">paid-ebooks</option>
          <option value="partial">partial</option>
        </select>
      </div>
    )
  }
}