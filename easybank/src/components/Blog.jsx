import imageRestaurant from '../assets/images/image-restaurant.jpg';
import imageMoney from '../assets/images/image-currency.jpg';
import imageConfetti from '../assets/images/image-confetti.jpg';
import imagePlane from '../assets/images/image-plane.jpg';

const Blog = () => {

    const articles = {
        article1: {
            author: 'By Claire Robinson',
            title: 'Receive money in any currency with no fees',
            description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
            img: imageMoney
        },
        article2: {
            author: 'By Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
            img: imageRestaurant
        },
        article3: {
            author: 'By Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
            img: imagePlane
        },
        article4: {
            author: 'By Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
            img: imageConfetti
        }
    }   
    
    const Card = ({ author, title, description, img }) => (
        <div className="flex flex-col rounded-b-md gap-2 mt-2 md:mt-10 pb-6 bg-white w-full">
            <img src={ img } alt={ title } className='rounded-t-md h-52  md:h-36 2xl:h-48' />
            <div className='px-4 flex flex-col gap-2'>
                <span className='text-GrayishBlue text-xs'>{ author }</span>
                <a href='#' className='text-base leading-5'>{ title }</a>
                <a href='#' className='text-sm text-GrayishBlue'>{ description }</a>
            </div>
        </div>
    );

    return (
    <section className='font-public-sans bg-VeryLightGray'>
        <div className='pt-24 pb-16 md:px-32 2xl:w-[1440px] m-auto'>
            <h2 className='heading2'>Latest Articles</h2>

            <div className="flex flex-col px-8 md:px-0 md:flex-row gap-4 2xl:gap-8">
                {Object.entries( articles ).map( ( [ key, article ] ) => (
                    <Card key={ key } author={ article.author } title={ article.title } description={ article.description } img={ article.img } />
                ))}
            </div>

        </div>


    </section>
  )
}

export default Blog