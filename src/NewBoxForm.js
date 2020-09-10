import React, { useState } from "react";

/** Form for creating a new box.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: "", height: "", color: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    console.log(name, value)
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Color:</label>
      <input
      type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Insert Box!</button>
    </form>
  );
};

export default NewBoxForm;
