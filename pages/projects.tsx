import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Card from "@/components/card";
import { ProjectType } from "@/types/Project";

const projectCards: ProjectType[] = [];

export default function projects() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-start items-center">
                <Link className="mt-4 ml-4 text-s-tan font-semibold flex items-center" href="/">
                    <ChevronLeft className="text-s-tan w-5 h-5 ml-1" />
                    <h4 className="">Home</h4>
                </Link>
            </div>
            <div className="h-screen grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 mx-24">
                {projectCards.map((c, i) => (
                    <Card key={i} card={c} />
                ))}
            </div>
        </div>
    );
}
