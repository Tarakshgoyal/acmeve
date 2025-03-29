const About = () => {
  return (
    <main className="bg-black">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
                  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    What it is about?
                  </h1>
                  <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            
                    {/* Core component */}
                    
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
            
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 text-center max-w-lg mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus libero nisi debitis vero nihil ab, commodi, quisquam, corporis rerum veniam cupiditate animi doloribus illo adipisci odio vitae exercitationem architecto recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea voluptate quia quas fugiat animi aut! Hic sit nostrum doloribus sint mollitia iste autem beatae vero, impedit animi magni vitae aliquam.
            </p>
        </div>
    </main>
  )
}

export default About