interface HomeProps{
    navbar:String;
    children:React.ReactNode
}
const HomeSection=({navbar ,children}:HomeProps)=>{
    return(
        <section>
            <nav className="">
                {navbar}
                {children}
            </nav>
        </section>
    );
};
export default HomeSection;