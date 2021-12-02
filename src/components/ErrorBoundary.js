import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {hasError: false}
  }
  // This function makes a class into an Error Boundary
  // Can't be added to functional components and there is no equivalent
  // Will be triggered when a child component throws an error
  componentDidCatch(error) {
    this.setState({hasError: true})
  }
  
  // Wrap this component around components which can generate errors
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;