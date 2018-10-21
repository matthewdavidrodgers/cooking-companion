import React, { SFC } from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  name: string;
}

const Client: SFC<Props> = ({ name }) => (
  <div>{`Hello, ${name}!`}</div>
);

ReactDOM.render(
  <Client name='Matthew'/>,
  document.getElementById('app')
);