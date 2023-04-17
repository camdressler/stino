import Hero from "@/components/hero";
import Project from "@/components/project"

export default function Home() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Hero />
            <Project />
        </div>
    );
}
