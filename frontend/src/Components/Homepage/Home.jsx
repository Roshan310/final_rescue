import React from "react";

function Home() {
  return (
    <div className="w-1/2 text-justify mx-auto h-full mt-6"> 
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugiat doloremque in eaque laudantium cum assumenda dolore, sint nesciunt! Distinctio perferendis omnis voluptate explicabo est aspernatur esse molestias ex maiores! 
         eius molestiae eum aspernatur iusto placeat natus sint consectetur quibusdam. Suscipit sequi sint commodi cupiditate voluptatem veritatis, iusto illum ab perspiciatis, ipsam quas qui sed earum aut cumque?<a href="#">Show more...</a></p>
         </article>
        <br></br>
         <div className="w-full text-center">
         <button className="bg-red-500 hover:bg-blue-500 text-[40px] text-rose-50 font-extrabold px-8 rounded">
            Emergency
        </button> 
        </div>
        <br></br>
      <article>
      <p className="relative block outline outline-offset-2 outline-blue-500 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non molestiae magnam, consequatur neque dignissimos ipsum voluptatem odio veritatis pariatur velit veniam illum iure nobis adipisci sint atque, eos sequi!
      Aaspernatur pariatur mollitia adipisci aliquid deserunt reiciendis officia illum sapiente beatae repellat. Delectus sunt iusto temporibus dicta hic impedit harum quia accusamus aut facilis. Placeat quos recusandae eius iste.</p>
      </article>
    </div>
  );
}

export default Home;
