import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function hero() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-8xl font-extrabold text-s-tan">Stino</h1>
            <h4 className="text-xl font-extrabold text-s-tan">Systems LLC</h4>
            <div className="flex space-x-4 mt-4 text-s-tan">
                <p>Contracting</p>
                <p>Product Development</p>
                <p>Consulting</p>
            </div>
            <Link className="mt-4 text-s-tan font-semibold flex items-center" href="/projects">
                <h4 className="">See Projects</h4>
                <ChevronRight className="text-s-tan w-5 h-5 ml-1" />
            </Link>
            <h2 className="text-lg text-s-tan mt-8">contact [at] this website</h2>
        </div>
    );
}
