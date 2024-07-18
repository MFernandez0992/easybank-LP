import iconApi from '../assets/images/icon-api.svg';
import iconBudgeting from '../assets/images/icon-budgeting.svg';
import iconOnboarding from '../assets/images/icon-onboarding.svg';
import iconOnline from '../assets/images/icon-online.svg';

const About = () => {

    const cards = {
        card1: {
            title: 'Online Banking',
            description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
            img: iconOnline
        },
        card2: {
            title: 'Simple Budgeting',
            description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
            img: iconBudgeting
        },
        card3: {
            title: 'Fast Onboarding',
            description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
            img: iconOnboarding
        },
        card4: {
            title: 'Open API',
            description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
            img: iconApi
        }
    }
    
    const Card = ({ title, description, img }) => (
        <div className="flex flex-col gap-4 mt-8 md:mt-20">
            <img src={img} alt={title} className='w-24 md:w-16 m-auto md:m-0' />
            <h2 className='text-2xl md:text-lg text-DarkBlue'>{title}</h2>
            <p className='text-base px-5 md:px-0'>{description}</p>
        </div>
    );

    return (
    <section id='about' className='font-public-sans bg-LightGrayishBlue'>
        <div className='mt-56 md:mt-0 md:px-32 py-16 md:py-24 2xl:w-[1440px] m-auto text-center md:text-left'>
            <h2 className='heading2 mb-4'>Why choose Easybank?</h2>
            <p className='text-base mt-4'>We leverage Open Banking to turn your bank account into your financial hub.<br />Control 
            your finances like never before.</p>
    

            <div className="flex flex-col md:flex-row gap-4">
                {Object.entries(cards).map(([key, card]) => (
                    <Card key={key} title={card.title} description={card.description} img={card.img} />
                ))}
            </div>
        </div>


    </section>
  )
}

export default About