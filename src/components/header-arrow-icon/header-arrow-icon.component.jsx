import { useContext } from "react";
import { DropdownContext } from "../../context/dropdown.context";

import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'

import './header-arrow-icon.styles.scss';

const HeaderArrowIcon = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(DropdownContext);
  const toggleIsDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen);

  var arrowDirection = ArrowDown;
  if (isDropdownOpen) {
    arrowDirection = ArrowUp;
  } else {
    arrowDirection = ArrowDown;
  }

  return (
    <div className="header-arrow-container" onClick={toggleIsDropdownOpen}>
      <a href="#top"><img className="header-arrow-icon" src={arrowDirection} alt="arrow-down" /></a>
    </div>
  )
}

export default HeaderArrowIcon;