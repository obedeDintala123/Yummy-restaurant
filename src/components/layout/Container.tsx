import Slider from '../ui/Slider';
import Button from '../ui/Button';
import Header from './Header';
import background from '../../assets/img/bg-section.jpg';
import Card from '../ui/Card';
import iconCart from '../../assets/img/cart.svg';
import imageCard1 from '../../assets/img/Card1.jpg';
import imageCard2 from '../../assets/img/Card2.jpg';
import imageCard3 from '../../assets/img/Card3.jpg';
import imageCard4 from '../../assets/img/Card4.jpg';

const Container = () => {

    return (
        <>

            {/* Landing-Page */}
            
            <article className='relative w-full min-h-screen flex flex-col bg-cover md:bg-center z-50' style={{ backgroundImage: `url(${background})` }}>

                <Header />

                <div className='md:mt-0 mt-10 flex md:flex-row flex-col justify-between items-center md:px-20 px-5'>
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                    <section className="flex flex-col gap-10 md:w-1/3 md:items-start items-center w-[90%] z-50">
                        <span className="md:text-7xl text-3xl text-[#fff] md:leading-24 leading-12 font-normal md:text-start text-center">Enjoy Your Healthy Delicious Food</span>

                        <div className='flex gap-10'>
                            <Button style='text-sm  md:text-base bg-[#CF1113] py-3 md:px-6 px-4 text-white rounded-full cursor-pointer' text='View Menu' />
                            <Button style='text-sm md:text-base bg-white py-3 md:px-6 px-4 text-[#363539] rounded-full font-medium cursor-pointer' text='Book a Table' />
                        </div>
                    </section>

                    <section className='w-full md:w-[45%]'>
                        <Slider />
                    </section>
                </div>
            </article>

            {/* Menu - Discover Our Flavors */}

            <article className='w-full md:px-20 px-3 mt-10'>
                <h1 className='md:text-4xl text-3xl text-[#38363F]'>Discover Our Flavors</h1>

                <section className='md:mt-15 mt-10 grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3'>
                    <Card imageSrc={imageCard1} imageAlt='Food' category='Entries' description='Pasta in a rich tomato sauce with fresh parsley.'  title='Basil Pasta' price={10} buttonTitle='cart' iconImage={iconCart} iconImageAlt='cart'/>

                    <Card imageSrc={imageCard2} imageAlt='Food' category='Desserts' description='Soft chocolate cake with fresh strawberries and cream.'  title='Strawberry Cake' price={5} buttonTitle='cart' iconImage={iconCart} iconImageAlt='cart'/>

                    <Card imageSrc={imageCard3} imageAlt='Food' category='Main Dishes' description='Grilled fish with herbs and roasted vegetables.'  title='Seafood Plate' price={20} buttonTitle='cart' iconImage={iconCart} iconImageAlt='cart'/>

                    <Card imageSrc={imageCard4} imageAlt='Food' category='Drinks' description='Grilled fish with herbs and roasted vegetables.'  title='Red Wine' price={20} buttonTitle='cart' iconImage={iconCart} iconImageAlt='cart'/>
                </section>
            </article>
        </>
    );
}

export default Container;