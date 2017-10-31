import * as cn from 'classnames';
import * as React from 'react';

interface ILogItem {
  type: 'input' | 'output' | 'error',
  content: string,
}

interface IConsoleProps {
  onEval: (content: string) => any,
}

interface IConsoleState {
  input: string,
  cursorPosition: number,
  log: ILogItem[],
}

export default class Console extends React.Component<IConsoleProps, IConsoleState> {
  private consoleRef: HTMLDivElement;

  constructor(props: IConsoleProps) {
    super(props);

    this.state = {
      input: '',
      cursorPosition: 0,
      log: [],
    };

    this.renderLogItem = this.renderLogItem.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onPaste = this.onPaste.bind(this);
  }

  public setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  public onKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    event.preventDefault();

    switch (event.key) {
      case 'Enter':
        return this.onEnterPressed();

      default:
        return this.writeAtCursor(event.key);
    }
  }

  public onPaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const data = event.clipboardData.getData('Text');
    return this.writeAtCursor(data);
  }

  public onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case 'ArrowLeft':
        return this.onArrowLeftKeyPressed();
      case 'ArrowRight':
        return this.onArrowRightKeyPressed();
      case 'End':
        return this.onEndKeyPressed();
      case 'Home':
        return this.onHomePressed();
      case 'Backspace':
        return this.onBackspacePressed();
      case 'Delete':
        return this.onDeletePressed();
    }
  }

  public onArrowLeftKeyPressed() {
    return this.setStateAsync({
      cursorPosition: Math.max(0, this.state.cursorPosition - 1),
    })
  }

  public onArrowRightKeyPressed() {
    return this.setStateAsync({
      cursorPosition: Math.min(
        this.state.input.length,
        this.state.cursorPosition + 1,
      ),
    })
  }

  public onEndKeyPressed() {
    return this.setStateAsync({
      cursorPosition: this.state.input.length,
    })
  }

  public onHomePressed() {
    return this.setStateAsync({
      cursorPosition: 0,
    })
  }

  public onBackspacePressed() {
    const beforeCursor = this.state.input.slice(0, this.state.cursorPosition);
    const afterCursor = this.state.input.slice(this.state.cursorPosition);

    return this.setStateAsync({
      input: `${beforeCursor.slice(0, -1)}${afterCursor}`,
      cursorPosition: Math.max(0, this.state.cursorPosition - 1),
    })
  }

  public onDeletePressed() {
    const beforeCursor = this.state.input.slice(0, this.state.cursorPosition);
    const afterCursor = this.state.input.slice(this.state.cursorPosition);

    return this.setStateAsync({
      input: `${beforeCursor}${afterCursor.slice(1)}`,
    })
  }

  public async onEnterPressed() {
    const input = this.state.input;
    await this.writeLine('input', input);

    try {
      await this.writeLine('output', String(this.eval(input)));
    } catch (e) {
      await this.writeLine('error', String(e));
    }

    await this.cleanInput();
  }

  public eval(content: string) {
    return this.props.onEval(content);
  }

  public writeLine(type: ILogItem['type'], content: ILogItem['content']) {
    return this.setStateAsync({
      log: [...this.state.log, { type, content }],
    });
  }

  public cleanInput() {
    return this.setStateAsync({
      input: '',
      cursorPosition: 0,
    })
  }

  public writeAtCursor(content: string) {
    const input = this.state.input;
    const beforeCursor = input.slice(0, this.state.cursorPosition);
    const afterCursor = input.slice(this.state.cursorPosition);

    return this.setStateAsync({
      input: `${beforeCursor}${content}${afterCursor}`,
      cursorPosition: this.state.cursorPosition + content.length,
    })
  }

  public componentDidMount() {
    this.focus();
  }

  public focus() {
    this.consoleRef.focus();
  }

  public renderLogItem(item: ILogItem, key: any) {
    return <span key={key} className={cn('row', item.type)}>{`${item.content}\n`}</span>;
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
        onPaste={this.onPaste}
      >
        {this.renderLog()}
        {this.renderPrompt()}
      </div>
    );
  }
};
