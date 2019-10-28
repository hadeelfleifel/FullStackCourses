import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Filter extends Component {
  state = {
    tutorial: []
  };

  componentDidMount() {
    this.Filter();
  }

  Filter = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`http://localhost:9000/filter/${params.title}`)
      .then(({ data: tutorial }) => {
        console.log("tutorial", tutorial);
        this.setState({ tutorial });
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: "25%" }}>
          {this.state.tutorial.map(tutorial => {
            return (
              <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
                <h3 className="favth-panel-heading">{tutorial.Title}</h3>
                <hr className="bg-primary" />
                <h5>
                  Tutorial Link : <a>{tutorial.Link}</a>
                </h5>
                <div className="favth-panel-body row">
                  <span className="col">
                    Type of Tutorial : {tutorial.TypeOfTutorial}
                  </span>
                  <span className="col">
                    Type of Pay : {tutorial.TyoeOfPay}
                  </span>
                  <t />
                  <span className="col">
                    Skill Level : {tutorial.SkillLevel}
                  </span>
                  <t />
                </div>
                <label className="badge badge-pill badge-warning">
                  {tutorial.Tag}
                </label>
                <button
                  type="button"
                  className="btn-primary float-right"
                  onClick={this.changeFav}
                >
                  {this.state.btnVale}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
