import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      fetch: PropTypes.func.isRequired,
      error: PropTypes.object
    };

    static defaultProps = {
      loading: false
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      if(this.props.error) return <h1>ERROR COULD NOT FIND TWEETS</h1>;
      if(this.props.loading) return <Loading />;
      
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};
