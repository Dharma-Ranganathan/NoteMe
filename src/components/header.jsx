import '../styles/Header.css';
import { FaGithub } from "react-icons/fa";

const Header = () => {

  return (
    <div className="header">
      <div className="logo">
        <h3>Note Me</h3>
      </div>
      <a className="github" href='https://github.com/Dharma-Ranganathan'>
          <i className='git-icon'>
          <FaGithub />
          </i>
      </a>
    </div>
  )
}

export default Header
