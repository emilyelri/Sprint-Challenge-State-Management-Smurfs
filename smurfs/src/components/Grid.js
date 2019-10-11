import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from './Smurf';

function Grid (props) {

    console.log("Grid props:", props);
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
        console.log("");
    }

    return (
        <>
        <button onClick={fetchSmurfs}>Get Smurfs</button>
        {props.isFetching && <p className="fetching">Fetching...</p>}
        {props.data && 
        <div className="grid">
            {props.data.map(smurf => (
                <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>
            ))}
        </div>
        }
        </>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  });
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(Grid);