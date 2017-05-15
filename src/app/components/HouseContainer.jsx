import React from 'react';
import { connect } from 'react-redux'
import {
  Route,
  Link
} from 'react-router-dom'
import House from 'app/components/House';
import HogwartsLogo from 'assets/hogwarts-logo.jpg';
import { fetchStudents } from 'app/actions/StudentActions';


const Tab = ({tabKey, tabName, isActive, additionalClasses}) => (
  <div className={`HouseContainer-tab ${isActive ? 'is-selected' : ''} ${additionalClasses}`}>
    <Link to={`/app/${tabKey}`} className="HouseContainer-tabLink">{tabName}</Link>
  </div>
);

const TabBar = function(houseNames, currentHouse) {
  let bar = houseNames.map(house =>
    <Tab key={house.toLowerCase()}
         tabKey={house.toLowerCase()}
         tabName={house}
         isActive={currentHouse === house.toLowerCase()}
         additionalClasses={`HouseContainer-tab--${house.toLowerCase()}`}/>
  );

  bar.push(<Tab key='default' tabKey='default' tabName='default' isActive={currentHouse === 'default'} /> );
  return bar;
};

const studentList = ({students}) => (
  students.map(s => <li key={s}>{s}</li>)
);

export class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.refreshStudentList();
  }

  render() {
    return (
      <div className="HouseContainer">
        <div className="HouseContainer-header">
          <h1 className="HouseContainer-heading">
            Hogwarts:
            <br/>
            School of Witchcraft and Wizadry
          </h1>
          <img src={HogwartsLogo} alt="Hogwarts" className="HouseContainer-logo"/>
        </div>
        <div className="HouseContainer-tabbar">
          {TabBar(this.props.houseNames, this.props.location.pathname.replace("/app/", ""))}
        </div>
        <div className="HouseContainer-viewContainer">
          <Route path={`${this.props.match.url}/:houseName`} component={House}/>
        </div>
        <div className="HouseContainer-studentList">
          Student List:
          <ul>
            {studentList(this.props)}
          </ul>
          <button ref="fetchStudents" onClick={this.props.refreshStudentList}>Fetch Student List with API Call</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    refreshStudentList: (e) => dispatch(fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseContainer)
