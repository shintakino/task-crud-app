'use client';
import { Social } from "./social";
import {
    Card ,
    CardContent,
    CardFooter,
    CardHeader
} from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) =>{
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}>

                </Header>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social></Social>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label = {backButtonLabel}
                href={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
};