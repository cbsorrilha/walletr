import React, { Component } from 'react';
import ErrorPage from '../components/templates/error-page';

export default class PageErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("page crashed with error: ", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          message="Tivemos um problema ao carregar essa página."
          subMessage="Tente atualizar a página." />
      );
    }
    return this.props.children;
  }
}
