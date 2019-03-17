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
      if(this.props.loading) return <Loading />;
      return (
        <>
          {this.props.error && <h1>UHH OH ERROR</h1>}
          <Component {...this.props} />;
        </>
      );
    }
  }

  return WithFetch;
};
