import Logo from '../../assets/svg/Logo';
import LoginForm from './LoginForm';

function Menu(){
    return(
        <div className='bg-gray-800 w-2/5 p-3' >
        <Logo width={48} />
        <LoginForm />
        </div>
    )
}

export default Menu