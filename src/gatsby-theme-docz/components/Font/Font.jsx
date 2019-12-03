import React from 'react';
import classnames from 'classnames';

const getElement = (tag, type) => {
  if (tag) return tag;
  switch (type) {
    case 'H500':
      return 'h5';
    case 'H400':
      return 'h4';
    case 'H300':
      return 'h3';
    case 'H200':
      return 'h2';
    case 'H100':
      return 'h1';
    default:
      return 'p';
  }
};

const H = (type, params) => {
  const { tag, children, className, style, ...rest } = params;

  const Element = getElement(tag, type);

  return (
    <Element {...rest} className={classnames(`olt-u${type}`, className)}>
      {children}
    </Element>
  );
};

const H500 = (props) => H('H500', props);
const H400 = (props) => H('H400', props);
const H300 = (props) => H('H300', props);
const H200 = (props) => H('H200', props);
const H100 = (props) => H('H100', props);
const Content = (props) => H('Content', props);
const Description = (props) => H('Description', props);
const Support = (props) => H('Support', props);
const Code = (props) => H('Code', props);
export { H500, H400, H300, H200, H100, Content, Description, Support, Code };
