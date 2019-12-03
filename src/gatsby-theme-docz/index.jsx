import React from 'react';
import { theme, ComponentsProvider } from 'docz';
import baseComponents from 'gatsby-theme-docz/src/components';
import { ThemeProvider } from 'theme-ui';

import Blockquote from './components/Blockquote/Blockquote';
import InlineCode from './components/InlineCode/InlineCode';
import Layout from './components/Layout/Layout';
import Link from './components/Link/Link';
import Paragraph from './components/Paragraph/Paragraph';
import Heading from './components/Heading/Heading';
import Pre from './components/Pre/Pre';

import Code from './components/Code/Code';
import Table from './components/Table/Table';
import Tbody from './components/Table/Tbody';
import Td from './components/Table/Td';
import Th from './components/Table/Th';
import Thead from './components/Table/Thead';
import Tr from './components/Table/Tr';

const componentsMap = {
  ...baseComponents,
  layout: Layout,
  h1: (props) => <Heading size={1} {...props} />,
  h2: (props) => <Heading size={2} {...props} />,
  h3: (props) => <Heading size={3} {...props} />,
  h4: (props) => <Heading size={4} {...props} />,
  h5: (props) => <Heading size={5} {...props} />,
  p: Paragraph,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  a: Link,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  tbody: Tbody,
  thead: Thead,
};

const Theme = ({ children }) => (
  <ThemeProvider>
    <ComponentsProvider components={componentsMap}>
      {children}
    </ComponentsProvider>
  </ThemeProvider>
);

export default theme({})(Theme);
