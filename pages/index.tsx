export default function Home() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-8xl font-extrabold text-s-tan">Stino</h1>
                <h4 className="text-lg md:text-xl font-extrabold text-s-tan">Systems LLC</h4>
                <div className="flex space-x-4 mt-4 text-s-tan">
                    <p>Software Development & Consulting</p>
                </div>
                <div className="bg-s-tan w-[200px] h-[1px] my-4" />
                <h2 className="text-lg text-s-tan">Email: stinosystems [at] gmail.com</h2>
            </div>
        </div>
    );
}
