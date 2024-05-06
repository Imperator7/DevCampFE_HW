import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { LOGIN, LOGOUT } from "../store/actiontypes"

function NavbarRight() {
    const username = useSelector((state) => state.user.username)
    const userImg = useSelector((state) => state.user.userImg)
    const isLoggedIn = username !== ''

    const dispatch = useDispatch()
    const login = async () => {
        const user = (await axios.get('https://randomuser.me/api')).data.results[0]
        const username = user.login.username
        const userImg = user.picture.thumbnail
        
        const actionObject = {
            type: LOGIN,
            payload: { username, userImg }
        }

        dispatch(actionObject)
    }

    const logout = () => {
        const actionObject = {
            type: LOGOUT
        }
        dispatch(actionObject)
    }
    return (
        <div style={{display:'flex', justifyContent:'flex-end', height:'100%', alignItems:'center'}}>
            {
                isLoggedIn ? 
                <>
                    <span onClick={logout} style={{marginRight:'20px'}}>{username}</span>
                    <span onClick={logout} style={{marginRight:'20px', backgroundImage: `url(${userImg})`, height: '30px', width: '30px', borderRadius: '50%', backgroundPosition:'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></span>
                </>
                :
                <span onClick={login} style={{marginRight:'20px'}}>{'please click to login'}</span>
            }
            
        </div>
    )
}

export default NavbarRight