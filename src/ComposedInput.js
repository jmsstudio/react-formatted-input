import React from 'react';
import classnames from 'classnames';

/**
 * Renders an input like element with a label an effects.
 *
 * @param {string} className the className property of the input
 * @param {string} label the label texto to be shown
 * @param {string} children the input element to be rendered
 */
function ComposedInput({ className, label, children }) {
  return (
    <label className={classnames('composed-input', className)}>
      {children}
      <span className="label">{label}</span>
      <span className="border" />
    </label>
  );
}

export default ComposedInput;
