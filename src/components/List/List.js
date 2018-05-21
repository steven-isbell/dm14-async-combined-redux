import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Card from '../Card/Card';
import { getPeople } from '../../ducks/userReducer';

class List extends Component {
  componentDidMount() {
    this.props.getPeople();
  }
  render() {
    return (
      <div style={{ padding: '10px' }}>
        {this.props.isLoading && (
          <div>
            <img src="https://24.media.tumblr.com/f678ce38eb896bc1d4aaa911958af087/tumblr_n2eccv6Dev1rgpzseo1_1280.gif" />
          </div>
        )}
        {this.props.people.map((person, i) => (
          <Card key={person.name + i} person={person} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
  ...state.cart
});

export default connect(mapStateToProps, { getPeople })(List);
