import React from 'react';

// Names Bootstrap caontainer fluid if it is
export default function Container({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// Names Bootstrap row fluid if it is
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(' ')
        .map(size => 'col-' + size)
        .join(' ')}
    >
      {children}
    </div>
  );
}
