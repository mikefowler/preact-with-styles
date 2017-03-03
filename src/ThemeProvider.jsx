import { h, Component } from 'preact';

export default class ThemeProvider extends Component {
  getChildContext() {
    return {
      themeName: this.props.name,
    };
  }

  render() {
    return this.props.children;
  }
}
