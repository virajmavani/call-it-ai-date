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
        firstName: "Drew",
        lastName: "Beland",
        bio: "<!FILL>",
        picture: "https://www.virajmavani.com/static/assets/img/landing/me.jp"
    },
    {
        firstName: "Lokananda",
        lastName: "Beland",
        bio: "<!FILL>",
        picture: "https://www.virajmavani.com/static/assets/img/landing/me.jp"
    },
    {
        firstName: "Safia",
        lastName: "Rahmat",
        bio: "<!FILL>",
        picture: "https://www.virajmavani.com/static/assets/img/landing/me.jp"
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
        <div className="flex items-center p-24 w-screen">
            <Carousel className="flex items-center max-w-96 w-full">
                <CarouselContent className="flex items-center max-w-96 w-full">
                    {profiles.map(profile => <CarouselItem><ProfileCard firstName={profile.firstName} lastName={profile.lastName} bio={profile.bio} picture={profile.picture}/></CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ProfileCarousel;
