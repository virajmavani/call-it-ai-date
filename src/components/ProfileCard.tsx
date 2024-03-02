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
        <div className="flex justify-center max-w-96">
            <Card>
                <CardHeader>
                    <CardTitle>{props.firstName} {props.lastName}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={props.picture} />
                        <AvatarFallback>{props.firstName.charAt(0)}{props.lastName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardDescription>{props.bio}</CardDescription>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProfileCard;
