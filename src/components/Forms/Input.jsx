import React from "react";

// a simple Input component
export default ({ name, label, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input id={ name } onChange={ onChange } value={ value } className="form-control" />
    </div>
);
