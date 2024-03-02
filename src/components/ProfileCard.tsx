"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export interface Profile {
    firstName: string;
    lastName: string;
    bio: string;
    picture: string;
}

const ProfileCard = (props: Profile) => {
    return (
        <Card className="flex flex-col items-center justify-center max-w-96">
            <CardHeader>
                <CardTitle>{props.firstName} {props.lastName}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center max-w-96">
                <Avatar className="h-36 w-36">
                    <AvatarImage src={props.picture} />
                    <AvatarFallback>{props.firstName.charAt(0)}{props.lastName.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardDescription>{props.bio}</CardDescription>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
