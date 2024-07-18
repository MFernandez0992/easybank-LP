import background from '../assets/images/image-mockups.png';

const Hero = () => {
  return (
    <section id='hero' className="bg-background-mobile md:bg-background-desktop bg-contain md:bg-60 md:bg-desktopPosition bg-no-repeat h-[450px] md:h-[600px] relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center md:px-32 font-public-sans w-full 2xl:w-[1440px] m-auto">
        <div className="flex flex-col gap-6 -mt-24 md:mb-48 text-center md:text-left md:w-6/12">
            <h1 className="text-4xl text-DarkBlue">Next generation<br />digital banking</h1>
            <p className="text-base">Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
            <button className="btnRequest"><a className="text-center" href="">Request Invite</a></button>
        </div>

        <img src={ background } alt="Mockups" className='relative -top-[138px] md:-top-48 md:left-24 z-0' />
      </div>
    </section> 
  )
}

export default Hero;
