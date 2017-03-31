import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends React.Component {
  render()  {
    return (
      <div className="col-md-4 col-md-offset-4 text-center">
        <Link to="/table"><h3>'Перейти к таскам'</h3></Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispachToProps(dispach) {
  return {
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Home);


