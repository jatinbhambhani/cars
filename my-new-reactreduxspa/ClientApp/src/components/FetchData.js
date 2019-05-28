import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store/WeatherForecasts";
import groupArrayThenSort from 'group-array-then-sort'


class FetchData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //  datalist: []
    }
  }
  componentDidMount() {
    alert("(I) Please rightclick > inspect >console to see the output of task 2. (II) Visit https://localhost:5001/api/CarsAPI for task 3  ");
    fetch('https://cors-anywhere.herokuapp.com/https://5wayschallenge.azurewebsites.net/api/cars', {

      headers: new Headers({
        'secret': '767C28D1-7BFE-44E9-904D-F87A61DE972D'
      })
    }).then(response => response.json())
      .then(data => {



        for (var i in data) {
          if (data[i].name === null || data[i].name === undefined) {
            data[i].name = ""

          }
        }

        for (var j in data) {
          for (var l in data[j].cars) {
            if (data[j].cars[l].colour === null || data[j].cars[l].colour === undefined) {
              data[j].cars[l].colour = ""
            }

          }
        }





        var groupBy = require('json-groupby');
        var brandlist = groupBy(data, ['cars.brand'], ['name']);

        // this.setState({ datalist: brandlist });
        for (var k in brandlist) { //getting into first brand j = 0 i.e MG
          console.log(k + " Brand is owned by:");
          for (var m in brandlist[k]) {
            console.log(brandlist[k][m]);

          }
        }
        //     for (var j in brandlist) { //getting into first brand j = 0 i.e MG
        //       for (var l in brandlist[j]) //
        // while(brandlist[j][l]<brandlist[j].len)
        //         if (brandlist[j][l].cars.colour > brandlist[j][l + 1].cars) {
        //           var tmp = brandlist[j][l].cars.colour;
        //           brandlist[j][l].cars.colour = brandlist[j][l + 1].cars.colour;
        //           brandlist[j][l + 1].cars.colour = tmp;
        //         }
        //       //  delete (brandlist[j][l].cars);
        //     }





        // console.log(brandlist);


        // //
        // let sortedObj
        // try {
        //   sortedObj = groupArrayThenSort(data, 'brand', 'name', 'desc');
        //   console.log(sortedObj);
        //   //Promise.resolve(1);

        // } catch (e) {
        //   console.error(e);
        // }
        // //

      })
      .catch(error => console.error(error));


  }
  componentWillMount() {


    // This method runs when the component is first added to the page
    const startDateIndex =
      parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex =
      parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  render() {
    return (
      <div>

        <h1>Weather forecast</h1>

        {/* <ScreenOne /> */}
        <p>
          This component demonstrates fetching data from the server and working
          with URL parameters.
        </p>
        {renderForecastsTable(this.props)}
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderForecastsTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {props.forecasts.map(forecast => (
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return (
    <p className="clearfix text-center">
      <Link
        className="btn btn-default pull-left"
        to={`/fetchdata/${prevStartDateIndex}`}
      >
        Previous
      </Link>
      <Link
        className="btn btn-default pull-right"
        to={`/fetchdata/${nextStartDateIndex}`}
      >
        Next
      </Link>
      {props.isLoading ? <span>Loading...</span> : []}
    </p>
  );
}

export default connect(
  state => state.weatherForecasts,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
