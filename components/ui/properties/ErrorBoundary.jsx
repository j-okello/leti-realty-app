"use client";
import React from "react";

class PropertyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Property Error:", error, errorInfo);
    // You could also log errors to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-4">
            We're having trouble loading the properties. Please try again.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Correctly export the class component
export default PropertyErrorBoundary;
