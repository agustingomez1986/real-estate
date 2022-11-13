import { useContext } from "react";
import { HeaderContext } from "../../context/header.context";

import ArrowDown from '../../assets/arrow-down.png'

import './header-arrow-icon.styles.scss';

const HeaderArrowIcon = () => {
  const { isHeaderOpen, setIsHeaderOpen } = useContext(HeaderContext);
  const toggleIsHeaderOpen = () => setIsHeaderOpen(!isHeaderOpen);

  return (
    <div className="header-arrow-icon" onClick={toggleIsHeaderOpen}>
      <img className="arrow-down-icon" src={ArrowDown} alt="arrow-down" />
      {/* &#9660 */}
    </div>
  )
}

export default HeaderArrowIcon;