import logo from './png/logo-no-background.png'
import './css/MainPage.css'

function MainPage() {
    return (
        <body>
        <div className='mainPageLogoPart'>
            <img src={logo}/>
        </div>
        <div className='mainPageTextPart'>Welcome, to main page of our company!
            The Company "Whouser" is leading IT consulting company in Russia.
            We are a group of IT specialists, having more than 10 years of experience in the field of information technologies.
            Our company has its own production facilities and we are working with high quality products.
            We specialize in IT solutions for any kind of business and are always ready to help you with any of your IT problems.
            Our company is a part of the international group of consulting companies "A.T.K. Consulting".
            Let us help you to solve the most complex IT problems
        </div>
        </body>);
}

export default MainPage