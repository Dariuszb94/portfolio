import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const ErrorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.primary};
  text-align: center;
  padding: 20px;
`;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('3D Background Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <div>
            <h2>Loading beautiful background...</h2>
            <p>Fallback mode active for optimal performance</p>
          </div>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
