import { FC } from "react";
import logo from './logo.svg';

interface HeaderProps {
  name: string
}
const Header:FC<HeaderProps> = ({name}) => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
)};

export default Header;