import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th className="clickable" key={column.path || column.key}>
                {column.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
