import React, { useMemo } from 'react';
import classnames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Card from '../Card/Card';
import * as styles from './Code.module.css';

const theme = {
  plain: {
    color: '#000',
    backgroundColor: '#f5f6f8',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#25C18D',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#E33A82',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#343a40',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#46b4cd',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#FD5E1F',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#E33A82',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#ffc94d',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#126DFB',
      },
    },
  ],
};

export const Code = ({ children, className: outerClassName }) => {
  const [language] = outerClassName
    ? outerClassName.replace(/language-/, '').split(' ')
    : ['text'];

  const description = useMemo(() => {
    switch (language) {
      case 'html':
      case 'bash':
      case 'json':
      case 'css':
        return language.toUpperCase();
      default:
        return language;
    }
  }, [language]);

  return (
    <Card className={classnames(styles.root)}>
      <h6 className={classnames('olt-Card-description')}>{description}</h6>
      <code className={classnames(styles.code)}>
        <Highlight
          {...defaultProps}
          code={children.trim()}
          theme={theme}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style} className={classnames(styles.pre, className)}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </code>
    </Card>
  );
};

export default Code;
