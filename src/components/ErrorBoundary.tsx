import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px 20px", fontFamily: "sans-serif", textAlign: "center", maxWidth: "600px", margin: "60px auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>Something went wrong</h2>
          <p style={{ color: "#888", marginBottom: "20px" }}>{this.state.error?.message ?? "An unexpected error occurred."}</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: "10px 24px", backgroundColor: "#4F46E5", color: "#fff", border: "none", borderRadius: "10px", fontWeight: 700, cursor: "pointer" }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
