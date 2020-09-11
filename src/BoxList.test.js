import React from 'react';
import { render, queryAllByTestId, fireEvent, getByText } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", function() {
    render(<BoxList />);
  });

  it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can add a new Box", function() {
    const { getByLabelText, getByText, getByTestId } = render(<BoxList />);
  
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Color:");
    const submitBtn = getByText("Insert Box!")
  
    // fill out the form
    fireEvent.change(widthInput, { target: { value: "50px" }});
    fireEvent.change(heightInput, { target: { value: "50px" }});
    fireEvent.change(colorInput, {target: {value: "#FFF"}});
    fireEvent.click(submitBtn);
  
    // box exists!
    const box = getByTestId("box");
    expect(box).toBeInTheDocument();
  
  });
  
  it("can delete a new Box", function() {
    const { getByLabelText, getByText, getByTestId } = render(<BoxList />);
  
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Color:");
    const submitBtn = getByText("Insert Box!")
  
    // fill out the form
    fireEvent.change(widthInput, { target: { value: "50px" }});
    fireEvent.change(heightInput, { target: { value: "50px" }});
    fireEvent.change(colorInput, {target: {value: "#FFF"}});
    fireEvent.click(submitBtn);
  
    // box exists!
    const box = getByTestId("box");
    expect(box).toBeInTheDocument();

    const deleteBtn = getByText("X");
    fireEvent.click(deleteBtn);
    expect(box).not.toBeInTheDocument();
  
  });