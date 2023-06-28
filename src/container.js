import App from "./App";
import "./styles/main.css";
import React, { Component } from 'react';
 
function Menu() {
    return (
        <div class="menu">
            <div class="buttons-flex">
                <div class="button bg-red"></div>
                <div class="button bg-yellow"></div>
                <div class="button bg-green"></div>
            </div>
            <div class="title">
                <h1>
                    <i class="fa fa-folder fa-lg">
                        <style> { "\
                            .fa-folder {\
                                color: #6094ee;\
                            }\
                        "}</style>
                    </i> 
                    &nbsp;user@your-name-Home-Page
                </h1>
            </div>
            <div class="buttons-flex2">
                &#8997;&#8984;1
            </div>
        </div>
    );
  }

class Container extends Component {
    constructor() {
        super();
        this.state = {Index: 1};
        let value = localStorage.getItem('index');
        this.state.Index = (value == null) ? 1 : value;
      }
 
    goPage(index) {
        this.setState((state) => {
            localStorage.setItem('index', index);
            return {Index: index}
        });
    }


    render() {
        return (
            <div class="container">
                <Menu />
                <div class="nav">
                    <button className={Number(this.state.Index) === Number(1) ? 'active': null}  onClick={() => this.goPage(1)}>
                        <span>~/Home</span>
                        <span class="left-command">
                            &#8984;1
                        </span>
                    </button>
                    <button className={Number(this.state.Index) === Number(2) ? 'active': null} onClick={() => this.goPage(2)}>
                        <span>~/Project</span>
                        {/* if your are an engineer, just replcae to "Project"  */}
                        <span class="left-command">
                            &#8984;2
                        </span>
                    </button> 
                    <button className={Number(this.state.Index) === Number(3) ? 'active': null} onClick={() => this.goPage(3)}>
                        <span>~/Publication</span>
                        {/* if your are an engineer, just replcae to "Project"  */}
                        <span class="left-command">
                            &#8984;3
                        </span>
                    </button> 
                    <button className={Number(this.state.Index) === Number(4) ? 'active': null} onClick={() => this.goPage(4)}>
                        <span>~/Experience</span>
                        <span class="left-command">
                            &#8984;4
                        </span>
                    </button>
                    <button className={Number(this.state.Index) === Number(5) ? 'active': null} onClick={() => this.goPage(5)}>
                        <span>~/Award</span>
                        <span class="left-command">
                            &#8984;5
                        </span>
                    </button>
                </div>
                <App index={this.state.Index}/>
            </div>
        );
    }
}


export default Container;