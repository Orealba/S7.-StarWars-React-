import logo from '../assets/images/logo.webp';
import '../Components/styles/Header.css';

export const Header = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className="header-logo"
      />
    </>
  );
};
