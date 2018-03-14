import React from "react";
import FourOhFour from "../FourOhFour";


import Form from "../Forms/Form";



// the add article component
const Edit = ({ fields, onSubmit, id }) => !fields ? <FourOhFour /> : (
    <div>
        <h2>Edit Article</h2>

        <Form id={ id } onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);

export default Edit;
