import logo from '../../assets/logo.gif'

const Logo = () => {
    return (
        <div className="flex px-2 mx-2">
            <img className='h-10 mr-1' src={logo} alt="" />
            <span className='text-3xl font-black text-[#1877f2]'>do.It</span>
        </div>
    );
};

export default Logo;