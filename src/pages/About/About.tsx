import './About.css';


const About = () => {

    const preppyImages = [
        {
            img: '/imgs/preppy_0.png',
            alt: 'preppy'
        },
        {
            img: '/imgs/preppy_1.png',
            alt: 'soccer ball and preppy bracelet'
        },
        {
            img: '/imgs/preppy_2.png',
            alt: 'cute dogs'
        },  
    ]

    return (
        <div className='about-container'>
            <div className='about-content'>
                <img alt="preppy banner logo" className='img-banner' src='/imgs/riri_banner.png' />
                <div className='about-text'>
                Hey everyone! I'm Riley, but you can call me Riri! I'm super excited to share a bit about myself and my passion for making bracelets on my website, ririsjewelry.com!

First off, let me tell you a little about me. I'm 11 years old and I live in sunny California. I'm totally obsessed with soccer and cheerleading – they're my favorite things to do after school! Oh, and did I mention I have two adorable dogs named Bambi and Nala? They're like my furry best friends!

Now, let's talk about my bracelets. I just love creating them! It's like each one tells a little story, you know? I get inspired by all kinds of things – from the colors of the sunset to the patterns on my soccer ball. But most of all, I love making preppy bracelets that add a pop of fun to any outfit!

So, why do I love making bracelets so much? Well, besides the fact that it's super fun, I also want to spread a message of kindness and positivity. Each bracelet I make is like a little reminder to be kind to others and to spread love wherever you go. Plus, I want to do my part to help protect our planet!

That's why a portion of the proceeds from every bracelet sold on ririsjewelry.com goes to helping sea turtles. These amazing creatures are facing so many challenges, from plastic pollution to habitat loss. I want to do everything I can to help protect them and their ocean home.

So, whether you're looking for a cute new accessory or just want to spread some kindness, I hope you'll check out my bracelets and join me in making a difference, one bracelet at a time! Thanks for stopping by!

XOXO,
Riri
                </div>
                <div className='about-images'>
                    {preppyImages.map((image, index) => {
                        return (
                            <img alt={image.alt} key={index} src={image.img} className='preppy-img' />
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;