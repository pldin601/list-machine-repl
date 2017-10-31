import * as React from 'react';
import * as _ from 'lodash';

interface ILogItem {
  type: 'input' | 'output' | 'error',
  content: string,
}

// interface IConsole {
//   log: ILogItem[],
//   onLine: (content: string) => boolean,
// }

interface IConsoleState {
  input: string,
  cursorPosition: number,
  log: ILogItem[],
}

export default class Console extends React.Component<{}, IConsoleState> {
  private consoleRef: HTMLDivElement;

  constructor(props: {}) {
    super(props);

    this.state = {
      input: '',
      cursorPosition: 0,
      log: [],
    };

    this.renderLogItem = this.renderLogItem.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  public onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    console.log(event.key);
    switch (event.key) {
      case 'ArrowLeft':
        return this.onArrowLeftKeyPressed();
      case 'ArrowRight':
        return this.onArrowRightKeyPressed();
    }
  }

  public onArrowLeftKeyPressed() {
    this.setState({
      cursorPosition: Math.max(0, this.state.cursorPosition - 1),
    })
  }

  public onArrowRightKeyPressed() {
    this.setState({
      cursorPosition: Math.min(this.state.input.length, this.state.cursorPosition + 1),
    })
  }

  public onKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    const beforeCursor = this.state.input.slice(0, this.state.cursorPosition);
    const afterCursor = this.state.input.slice(this.state.cursorPosition);
    this.setState({
      input: `${beforeCursor}${event.key}${afterCursor}`,
      cursorPosition: this.state.cursorPosition + 1,
    })
  }

  public componentDidMount() {
    this.focus();
  }

  public focus() {
    this.consoleRef.focus();
  }

  public renderLogItem(item: ILogItem, key: any) {
    return <span key={key}>{item.content}</span>;
  }

  public renderLog() {
    return (
      <div className="log">
        {this.state.log.map(this.renderLogItem)}
      </div>
    );
  }

  public renderPrompt() {
    const currentInput = this.state.input;
    const inputBeforeCursor = currentInput.slice(0, this.state.cursorPosition);
    const inputAtCursor = currentInput[this.state.cursorPosition] || ' ';
    const inputAfterCursor = currentInput.slice(this.state.cursorPosition + 1);

    return (
      <div className="prompt">
        <span>{inputBeforeCursor}</span>
        <span className="cursor">{inputAtCursor}</span>
        <span>{inputAfterCursor}</span>
      </div>
    );
  }

  public render() {
    return (
      <div
        ref={ref => this.consoleRef = ref}
        className="console"
        tabIndex={0}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
      >
        {this.renderLog()}
        {this.renderPrompt()}
      </div>
    );
  }
};
