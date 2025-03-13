import { ShoppingCartSimple, List } from '@phosphor-icons/react';
import Button from '../ui/Button';
const Header = () => {
    const handleClick = () => {
        console.log('Button clicked');
    }
    return (
        <header className='flex justify-between items-center py-4 md:px-20 px-3 z-50 w-full'>
            <a href='' className='font-medium text-[#fff] md:text-3xl text-2xl'>Yummy<span className='text-[#CF1113]'>.</span></a>

            <nav className="hidden md:flex md:gap-12">
                {["Home", "Menu", "About Us", "Contact"].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-[#CF1113] before:top-full before:origin-left before:scale-x-0 before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:scale-x-100"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className='hidden md:flex items-center gap-24 cursor-pointer'>
                <div className='flex items-center gap-1'>
                    <ShoppingCartSimple size={24} color='#fff' />
                    <div className='flex flex-col'>
                        <span className='bg-[#CF1113] rounded-full text-[12px] text-center w-8 h-4 text-white'>0</span>
                        <span className='text-[#fff]'>Cart</span>
                    </div>
                </div>
                <Button onclick={handleClick} text='Login' style='cursor-pointer bg-[#CF1113] px-8 py-2 rounded-full text-white font-medium' />
            </div>

            <div className='md:hidden'>
                <List fontSize={24} color='#fff' onClick={handleClick}/>
            </div>
        </header>
    );
}

export default Header;