import * as React from 'react';
import * as setState from 'react-state-promise'
import * as CodeMirror from 'react-codemirror';

require('codemirror/mode/commonlisp/commonlisp');

interface IConsoleProps {
  onEval: (code: string) => any,
  onTokenize: (code: string) => any,
  onParse: (code: string) => any,
  onChange: (code: string) => void,
  code: string,
}

interface IConsoleState {
  code: string,
}

const options = {
  mode: 'commonlisp',
  theme: 'material',
};

export default class Editor extends React.Component<IConsoleProps, IConsoleState> {
  constructor(props: IConsoleProps) {
    super(props);

    this.state = {
      code: this.props.code,
    };

    this.onCodeUpdate = this.onCodeUpdate.bind(this);
    this.onEvalClick = this.onEvalClick.bind(this);
    this.onTokensClick = this.onTokensClick.bind(this);
    this.onAstClick = this.onAstClick.bind(this);
  }

  public onCodeUpdate(code: string) {
    this.setState({ code });
    this.props.onChange(code);
  }

  public onEvalClick() {
    this.props.onEval(this.state.code);
  }

  public onTokensClick() {
    this.props.onTokenize(this.state.code);
  }

  public onAstClick() {
    this.props.onParse(this.state.code);
  }

  public render() {
    return (
      <div className="editor">
        <CodeMirror
          value={this.state.code}
          onChange={this.onCodeUpdate}
          options={options}
        />
        <div className="panel">
          <button className="button flat" onClick={this.onTokensClick}>Tokenize</button>
          <button className="button flat" onClick={this.onAstClick}>Parse</button>
          <button className="button flat" onClick={this.onEvalClick}>Evaluate</button>
        </div>
      </div>
    )
  }
};
