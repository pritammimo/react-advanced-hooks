import { Link } from "react-router-dom"
const Mainpage = () => {
  return (
    <div>
    Example of hooks:
    <div>
    <Link to="/deferredhooks">usedeferred</Link>
    <Link to="/transitionhooks" style={{paddingLeft:"5px"}}>usetransition</Link>
    <Link to="/imperativehandlehooks" style={{paddingLeft:"5px"}}>useimperativehandle</Link>
    </div>
    </div>
  )
}

export default Mainpage