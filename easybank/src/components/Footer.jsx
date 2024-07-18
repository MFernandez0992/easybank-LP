import facebook from '../assets/images/icon-facebook.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';
import LogoSVG from './LogoSvg';

const Footer = () => {
  return (
    <footer className='bg-DarkBlue md:px-32 pt-8 flex flex-col items-center h-auto font-public-sans'>
        <section className='flex flex-col md:flex-row gap-8 md:gap-0 justify-around 2xl:w-[1440px] m-auto'>
            <div className='flex flex-col gap-8 md:gap-0 m-auto md:m-0 justify-between'>
                <LogoSVG className="h-6 text-white" />
                <div className='flex gap-3'>
                    <a href='#'><img src={ facebook } /></a>
                    <a href='#'><img src={ youtube } /></a>
                    <a href='#'><img src={ twitter } /></a>
                    <a href='#'><img src={ pinterest } /></a>
                    <a href='#'><img src={ instagram } /></a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-20 text-slate-300 text-sm'>
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className='flex flex-col justify-between'>
                <button className="btnRequest !py-2 md:!py-1"><a className="text-center" href="">Request Invite</a></button>
                <p className='text-slate-400 text-sm mt-6 md:mt-2'>© Easybank. All Rights Reserved</p>
            </div>
        </section>
    
        <div className="attribution mt-8 mb-2 text-white">
        Challenge by <a className='text-slate-400' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='text-slate-400' href="https://www.linkedin.com/in/matias-fernandez1992/">Matías Fernández</a>.
        </div>
        
    </footer>
  )
}

export default Footer