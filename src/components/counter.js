import React from 'react'
import { connect } from "react-redux";
import * as actions from "../action";






const Counter = ({ counter, inc, dec, rnd }) => {


    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={dec}>DEC</button>
            <button onClick={inc}>INC</button>
            <button onClick={rnd}>RND</button>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }

};


export default connect(mapStateToProps, actions)(Counter);
