"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ProfileCard, { Profile } from "@/components/ProfileCard";
  
const profiles: Profile[] = [
    {
        firstName: "Dr. Drew",
        lastName: "Beland",
        bio: "Yes, I really am 6’8. I just moved here from the Rocky Mountains looking for new experiences and open-minded people. I’m a romantic. I’m passionate about weightlifting, video games and making the world a better place. I love EDM as well as metal. I’m also a huge European history nut and a Star Trek fan.\n\nOne of my goals is trying to gain new skills like expanding my dancing (learned ballroom dancing from october to feb)\n\nFun fact about me is that I used to be a dancing M&M at M&M World Times Square",
        picture: "https://media.licdn.com/dms/image/C5603AQFFvvXsosp9ww/profile-displayphoto-shrink_800_800/0/1564532704062?e=1714608000&v=beta&t=HqVJXSoj219yJTeTnKjStQsRPWJROg4nQPcPlhu_WZU"
    },
    {
        firstName: "Lokananda",
        lastName: "Dhage",
        bio: "<!FILL>",
        picture: "https://www.virajmavani.com/static/assets/img/landing/me.jp"
    },
    {
        firstName: "Safia",
        lastName: "Rahmat",
        bio: "I am a outgoing person. I like spending time with people who have good senses of humor. I have a bunch of interests ranging from things like spending time outdoors and cooking to Harry Potter, Supernatural, Dr Who, and games.\nI'm always looking for ways to better myself. I'm currently training for a 10k!\nI love camping in the Summer and spending time outside. I also love reading and can get lost in almost any book. If you have a favorite book let me know! I'm always looking for a new good book and recommendations always seem to be the best ones.\nI'm Really Good At\n- Trivia games (I was often asked to be the ringer at pub trivia night in college)\n- On a typical Friday night I am\n- Hanging out with friends or watching Netflix or playing Stardew Valley",
        picture: "https://media.licdn.com/dms/image/C5603AQGsCzhM1FCTxg/profile-displayphoto-shrink_800_800/0/1600146141592?e=1714608000&v=beta&t=h3Qcvioin9UCduZ9eBQEkY_8Am_i9qCGa1ebLG_LV3U"
    },
    {
        firstName: "Viraj",
        lastName: "Mavani",
        bio: "I am a software developer and machine learning enthusiast currently working as a backend Software Engineer at Amazon Web Services. When I am not working, you will find me playing open-world or stealth games on my console. I am open to new and exciting career opportunities.",
        picture: "https://www.virajmavani.com/static/assets/img/landing/me.jpg"
    }
]

const ProfileCarousel = () => {
    return (
        <Carousel className="flex items-center max-w-96 w-full">
            <CarouselContent className="flex items-center w-full">
                {profiles.map(profile => <CarouselItem><ProfileCard firstName={profile.firstName} lastName={profile.lastName} bio={profile.bio} picture={profile.picture}/></CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default ProfileCarousel;
