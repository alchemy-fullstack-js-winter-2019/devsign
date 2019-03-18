import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      fetch: PropTypes.func.isRequired
    };

    static defaultProps = {
      loading: false
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      if(this.props.loading) return <h3>LOADING COMPONENT WILL GO HERE</h3>;
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};
