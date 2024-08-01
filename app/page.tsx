import HomeSection from "./components/Atoms/HomeSection";
import Link from "next/link";
export default function Home() {

  return (
    <main>      
      <HomeSection navbar="">
        <div className="font-serif">
        <div className="flex justify-evenly gap-16">
        <nav className="flex gap-80 my-8 ">
          
          <div>
          <Link  href={''}><img src="/images/logo.png " alt="" className="w-30 h-10 object-cover"/></Link>
          </div>
          <div className="flex justify-evenly gap-16">
     <a className="text-current font-normal ">HOME</a>
     <a className="text-current font-normal ">RESTURANT</a>
     <a className="text-current font-normal ">SERVICES</a>
     <a className="text-current font-normal ">CART</a>
    
     </div>
     <div>
   <a className="text-current font-normal ">Sign Up</a>
     </div>
      </nav>
        </div>
        <div className="flex mt-20 place-content-center font-serif">
          <div>
        <p className="text-6xl font-extrabold ">ENJOY DELICIOUS FOOD </p>
        <p className="text-6xl font-extrabold ">IN <span className=" cla text-amber-500 text-6xl font-extrabold">HEALTHY LIFE</span></p>
          <p>where we bring you the best and most
           delicious recipes from around the world</p>
          <button className="bg-amber-500 w-52 h-12 text-white font-bold rounded-xl mt-20" >GET STARTED </button>
          </div>
          <img src="/images/chicken.png" className="w-[500px] rounded-full" alt=""/>
        </div>
         <div className="text-center">
          <p className="italic font-bold my-8 ">Online Stores</p>
          <p className="text-5xl font-bold font-serif">Popular Foods</p>
         </div>
        <div className="flex gap-40 justify-center mt-20 ">
     <div className="text-center">
        <img src="/images/fish.jpeg" className=" rounded-full w-[250px] h-[250px] object-cover " alt=""/>
        <p><b>Fruit Dish</b></p>
        <i>Dinko Food</i>
        <img src="/images/rate.jpg" className=" w-[100px] h-[80px] object-cover mx-20" alt=""/>
        <button className="bg-amber-500 w-52 h-12 text-white rounded-3xl">Add Cart   $689</button>

        </div>
        <div className="text-center">
        <img src="/images/S.jpeg" className=" rounded-full w-[250px] h-[250px] object-cover" alt=""/>
        <p><b>Fruit Dish</b></p>
        <i>Dinko Food</i>
        <img src="/images/rate.jpg" className=" w-[100px] h-[80px] object-cover mx-20" alt=""/>
        <button className="bg-amber-500 w-52 h-12 text-white rounded-3xl">Add Cart   $789</button>

        </div>  <div className="text-center">
        <img src="/images/image(2).jpg" className=" rounded-full w-[250px] h-[250px] object-cover" alt=""/>
        <p><b>Fruit Dish</b></p>
        <i>Dinko Food</i>
        <img src="/images/rate.jpg" className=" w-[100px] h-[80px] object-cover mx-20" alt=""/>
        <button className="bg-amber-500 w-52 h-12 text-white rounded-3xl">Add Cart   $789</button>

        </div> 
         <div className="text-center">
        <img src="/images/seafood.png" className=" rounded-full w-[250px] h-[250px] object-cover" alt=""/>
        <p><b>Sea Food</b></p>
        <i>Dinko Food</i>
        <img src="/images/rate.jpg" className=" w-[100px] h-[80px] object-cover mx-20" alt=""/>
        <button className="bg-amber-500 w-52 h-12 text-white rounded-3xl">Add Cart   $589</button>

        </div>
          
        </div>
        <div className="flex mt-16 place-content-center gap-[500px]  mx-8">
          <div className="my-8">
          <button className="bg-amber-500 w-10 h-8 text-white">-50%</button>
          <p className="text-3xl font-bold">Our Special Offer</p>
          <p>Best cooks and best delivery guys all at your </p>
          <p>service.Hot tasty food will reach you in 60 minutes</p>
          <button className="bg-amber-500 w-52 h-12 text-white font-bold rounded-xl">See All Menu</button>
          </div>
          <div>
          <img src="/images/pizza.avif" className=" rounded-full w-[250px] h-[250px] object-cover" alt=""/>
          </div>
        </div>
        <div>
        <p className="text-slate-700 text-center font-bold my-8">Quality Food
        Get The best Offers
         </p>
        <p className="text-slate-700 text-center my-8"> The food at your doorstep.Why starve when you have us.Your hunger
        partner.Straight out of the oven to your doorstep.
         </p>
        </div>
        <div className="flex justify-evenly">
        <div className="flex gap-20">
      <div className="">
      <p className="font-bold ">Any day offers</p>
      <p className="text-slate-700">New phonomenon</p>
      <p className="text-slate-700">Burger taste</p>
      <p className="text-amber-500 underline decoration-slate-00 decoration-4 ">$ 12.90</p>

      </div>
      <div><img src="/images/burger.png" className="w-[200px] h-[200px] rounded-full object-cover  bg-amber-500"/></div>
        </div>
        <div className="flex gap-3">
      <div className="">
      <p className="font-bold ">Other Flavours</p>
      <p className="text-slate-700">Save room We</p>
      <p className="text-slate-700">Burger taste</p>
      <p className="text-amber-500  underline decoration-slate-00 decoration-4">$ 12.90</p>
      </div>
      <div><img src="/images/image(2).jpg" className="w-[200px] h-[200px] rounded-full object-cover"/></div>
        </div> <div className="flex gap-6">
      <div className="">
      <p className="font-bold ">Any day offers</p>
      <p className="text-slate-700">New phonomenon</p>
      <p className="text-slate-700">Burger taste</p>
      <p className="text-amber-500  underline decoration-slate-00 decoration-4">$ 12.90</p>
      </div>
      <div><img src="/images/location.png" className="w-[200px] h-[200px] rounded-full object-cover "/></div>
        </div>
      </div>
      <div className="font-serif text-5xl font-bold text-center my-8"><p>Our Services</p></div>

      <div className="flex justify-evenly my-24">
<div className="flex place-content-center gap-20">
  <div><img src="/images/eat.webp" className="w-[100px] h-[100px] object-cover"/>
  <p  className="text-center font-bold">55+ Resturants</p></div>

  <div><img src="/images/rate.png" className="w-[120px] h-[120px] object-cover"/>
  <p className="text-center font-bold">Good Quality</p>
  </div>
  <div><img src="/images/dish.webp" className="w-[150px] h-[150px] object-cover"/>
  <p className="text-center font-bold">Discount System</p>
  </div>
 <div><img src="/images/border.jpg" className="w-[160px] h-[160px] object-cover"/>
 <p className="text-center font-bold">Fast Delivery</p>
 </div>

</div>
      </div>

      <div className="items-center justify-evenly">
        <p className="text-center font-bold ">Testimonial</p>
      <p className="text-center font-serif text-5xl font-bold ">What Our Clients Say</p>
      <p className="text-center">Food House has been fabulous.Their staff is timely ,</p>
      <p className="text-center">professional ,courteous and attentive- and their location is the best Thank you FoodHouse</p>
      </div>
      <div className=" flex justify-evenly my-16">
      <img src="/images/first.avif" className="w-[150px] h-[150px] object-cover rounded-full" alt=""/>
      <img src="/images/second.webp" className="w-[150px] h-[150px] object-cover rounded-full" alt=""/>
      <img src="/images/third.webp" className="w-[150px] h-[150px] object-cover rounded-full bg-amber-500 p-4" alt=""/>
      <img src="/images/fourth.webp" className="w-[150px] h-[150px] object-cover rounded-full" alt=""/>
      <img src="/images/fifth.webp" className="w-[150px] h-[150px] object-cover rounded-full" alt=""/>

      <img src="" className=""/>
     
      </div>

      <div className="flex justify-evenly my-8">
        <div className=""><img src="/images/phone.png"/></div>
        <div className="my-60">
          <b className="font-serif text-amber-500">Download Our app</b>
          <p className="font-bold font-serif  text-4xl">Its all here All in one app.
          </p>
          <p className="">resturants, nearby grocery and convinience </p>
          <p className="">and more</p>
          <div>
            <div className="flex justify-evenly">
              <div>
              <img src="/images/app-store.png" className="object-cover w-[150px] h-[100px] my-12"/>
              </div>
              <div>
              <img src="/images/play.png" className="object-cover w-[160px] h-[200px] "/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly my-8">
       <div className="font-serif">
         <p className="font-serif cla text-4xl font-extrabold">Subcribe Our Newsletter</p>
        <p>Subcribe to our newsletter to get our </p>
        <p>news</p>
        </div>
        <div className="">
          <input placeholder="Your email address.."/>
        </div>
        <div className="">
          <button className="bg-amber-500 w-60 h-12 text-white">Subscribe</button>
        </div>
      </div>
      <div className="">
     
      <div className="flex justify-evenly bg-black text-white h-60 font-serif text-xl py-8">
      <div>
        <p>FoodHouse</p>
        <p>Best cooks and best delivery guys all</p>
        <p>at your sevice.Hot tasty food will</p>
        <p>reach you in 60 minutes.</p>
        <div className="flex gap-8">
        <div>          <img src="/images/facebook.png" className="w-[20px] h-[20px]"/>
        </div>
        <div>
        <img src="/images/twitter.png" className="w-[20px] h-[20px]"/> 
        </div>
        <div>
        <img src="/images/linkedin.png" className="w-[20px] h-[20px] bg-white"/>

        </div>


        </div>
      </div> 
      <div>
        <p className="font-bold">Company</p>
        <ul>Career</ul>
        <ul>About Us</ul>
        <ul>Blog</ul>
        <ul>Press Info</ul>
        <ul>Features</ul>
        </div> 
        <div>
          <p className="font-bold">Fudo</p>
          <ul>why Fudo</ul>
          <ul>How it Works</ul>
          <ul>Why Choose Us</ul>
          <ul>Client Stories</ul>
          <ul>Gallery</ul>
        </div>
        <div>
          <p className="font-bold">Menu</p>
          <ul>Breakfast</ul>
          <ul>Lunch</ul>
          <ul>Dinner</ul>
          <ul>Fast Foods</ul>
          <ul>Drinks</ul>
        </div>
      </div>
        <div className="flex justify-evenly bg-amber-500 text-white "><p>Copyright 2021 Beskin all right Resreved </p>
        <div className="flex justify-evenly gap-8 "> 
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        </div>
        </div>
      </div>


      </div>
      </HomeSection>
    </main>
  );
}
