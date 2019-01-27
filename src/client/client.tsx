import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  name: string;
}

const Client: React.FunctionComponent<IProps> = ({ name }) => (
  <div>{`Hello, ${name}!`}</div>
);

ReactDOM.render(
  <Client name='Matthew'/>,
  document.getElementById('app')
);