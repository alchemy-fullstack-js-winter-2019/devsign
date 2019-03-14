import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      fetch: PropTypes.func.isRequired
    };

    static defaultProps = {
      loading: false
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      if(this.props.loading) return <Loading />;
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};
