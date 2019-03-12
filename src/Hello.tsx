import * as React from "react";

import './Hello.css';

export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
}

export interface HelloState {
    level: number;
}

export default class Hello extends React.Component<HelloProps, HelloState> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {level: props.enthusiasmLevel || 1};
  }

  render() {
     const {name, enthusiasmLevel} = this.props;

     if (this.state.level <= 1) {
       throw new Error("error");
     }

     return <h1>Hello from {name} and {enthusiasmLevel}</h1>
  }
}
