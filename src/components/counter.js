import React from 'react'
import { connect } from "react-redux";
import * as actions from "../action";
import {bindActionCreators} from "redux";





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
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => {

    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


    return {
        inc,
        dec,
        rnd: () => {
            const rndValue = Math.floor(Math.random()*10);
            rnd(rndValue)
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
