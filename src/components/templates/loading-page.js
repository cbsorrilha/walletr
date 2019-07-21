import React from 'react';
import Centralizer from '../molecules/centralizer';
import LoadingIndicator from '../atoms/loading-indicator';

export default function LoadingPage() {
  return (
    <Centralizer height="25rem">
      <LoadingIndicator color="#0db14b" />
    </Centralizer>
  );
}
