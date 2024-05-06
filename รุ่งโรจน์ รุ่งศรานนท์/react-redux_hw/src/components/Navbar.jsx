import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"

function Navbar() {
    return ( 
    <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{height: '35px', display: 'flex', justifyContent: 'space-between', }}>
        <NavbarLeft />
        <NavbarRight />
    </div>)
}

export default Navbar