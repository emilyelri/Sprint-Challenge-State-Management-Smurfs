import React from "react";
import Form from './Form';
import Grid from './Grid';

export default function App (props) {
  return (
    <div className="app">
      <div className="left">
        <h1>SMURF VILLAGE</h1>
        <Form />
      </div>
      <div className="right">
        <Grid />
      </div>
    </div>
  );
}