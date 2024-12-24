<template>
  <div>
    <div class="containerr overflow-hidden min-h-screen bg-[#000319] text-white">
    <div class="container px-2 pt-12 overflow-hidden ">
      <nav
        class="md:w-[451px] w-full h-[55px] mx-auto md:h-16 text-white shadow-md md:mb-[123px] mb-[60px] border-[1px] border-white/20 rounded-xl bg-primary bg-gradient-to-bl from-[#6971A229] to[#272A3C5E]"
      >
        <ul class="w-full h-full flex justify-around items-center">
          <li>
            <nuxt-link
              to="/"
              class="font-medium text-third text-sm md:text-base leading-4 md:leading-[15px]"
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="font-medium text-third text-sm md:text-base leading-4 md:leading-[15px]"
              >Projects</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="font-medium text-third text-sm md:text-base leading-4 md:leading-[15px]"
              >Testimonials</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="font-medium text-third text-sm md:text-base leading-4 md:leading-[15px]"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <!-- hero  -->
      <div
        class="md:w-[938px] w-full mx-auto text-center md:space-y-8 mb-[64px] md:mb-[156px] space-y-4 flex flex-col items-center"
      >
        <h5
          class="text-sm md:text-base text-[#E4ECFF] font-normal"
          style="letter-spacing: 5px"
        >
          Dynamic Web Magic with Next.js
        </h5>
        <h1 class="w-full font-bold md:text-7xl text-5xl">
          Transforming Concepts into Seamless
          <span class="text-sceondry"> User Experiences</span>
        </h1>
        <h5
          class="text-base font-normal md:text-2xl"
          style="letter-spacing: 2px"
        >
          Hi! I’m Mahmoud Ramadan, a Nuxt.js Developer based in Egypt.
        </h5>
        <button
          class="md:w-[207px] w-full h-[66px] text-lg bg-primary font-medium rounded-xl justify-center flex items-center gap-5 bg-gradient-to-bl from-[#6971A229] to[#272A3C5E] border-[1px]"
        >
          See my work
          <Icon name="tabler:arrow-up-right" width="36px" height="36px" />
        </button>
      </div>
      <!--   section  one -->
      <section class="py-12 md:px-24 px-4  md:mb-32 mb-16">
        <!-- row one -->

        <div   v-motion
  :initial="{ opacity: 0, x: -100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0" class="grid md:grid-cols-8 grid-cols-1 gap-12 md:h-[541px]">
          <div
            class="md:col-span-4 col-span-1 z-10 md:h-full h-[312px] md:px-10 md:py-14 p-4 rounded-3xl overflow-hidden relative"
          >
            <img
              class="w-full h-full absolute -z-10 left-0 top-0"
              src="/images/labtop.svg"
              alt=""
            />

            <div class="h-full flex flex-col justify-between">
              <img class="w-[150px]" src="./public/images/Button.svg" alt="" />

              <div class="flex items-start justify-between">
                <div
                  class="w-[393px] h-[114px] font-bold text-xl leading-6 md:text-3xl md:leading-9"
                >
                  <h1>
                    I prioritize client collaboration, fostering open
                    communication
                  </h1>
                </div>
                <img src="./public/images/Button2.svg" alt="" />
              </div>
            </div>
          </div>
          <div
            class="md:col-span-4 col-span-1 flex rounded-3xl flex-col justify-center gap-8 md:h-full"
          >
            <div
              class="w-full md:h-1/2 h-[195px] rounded-3xl relative overflow-hidden z-10 shadow-2xl md:px-9 bg-primary md:pt-5 pt-3 px-4 border-[1px] border-gray-400/30 duration-100 ease-linear transition-all hover:shadow-blue-300/35"
            >
              <h1 class="font-bold md:text-3xl text-xl">
                I’m very flexible with time zone communications
              </h1>
              <img
                class="w-full h-full absolute right-2 -bottom-1 -z-10"
                src="./public/images/Pagination (1).svg"
                alt=""
              />
            </div>
            <div
              class="w-full md:h-1/2 h-[195px] md:px-[19px] flex items-center duration-100 ease-linear transition-all hover:shadow-blue-300/35 justify-between shadow-xl rounded-3xl border-[1px] overflow-hidden border-gray-400/30"
            >
              <div class="md:w-[219px] w-full md:h-9 text-center text-white">
                <h3 class="text-[10px] md:text-sm">
                  I constantly try to improve
                </h3>
                <h2 class="font-bold md:text-3xl text-lg">My tech stack</h2>
              </div>
              <img
                class="md:w-[290px] w-[225px]"
                src="./public/images/Group.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- row two -->

        <div
        v-motion
  :initial="{ opacity: 0, x: 100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0"
          class="grid md:grid-cols-8 grid-cols-1 gap-12 md:h-[541px]  h-full  md:mt-9 mt-5"
        >
          <div
            class="h-full flex flex-col justify-between gap-5 rounded-3xl overflow-hidden md:col-span-3  col-span-1 "
          >
            <div
              class="w-full md:h-1/2 rounded-3xl border-[1px] border-gray-400/30 flex flex-col justify-between duration-100 ease-linear  shadow-2xl transition-all hover:shadow-blue-300/35 cursor-pointer md:pt-[29px] md:px-7 px-3"
            >
              <div class="w-full md:h-[58px]">
                <h3 class="md:text-2xl font-bold leading-7">
                  Tech enthusiast with a passion for development.
                </h3>
              </div>
              <img
                class="w-2/3 h-full flex self-end"
                src="./public/images/section input.svg"
                alt=""
              />
            </div>




            <div
              class="w-full    h-full  rounded-3xl relative border-[1px] border-gray-400/30 bg-primary duration-100 ease-linear 
               shadow-2xl transition-all hover:shadow-blue-300/35 cursor-pointer"
            >

              <div
                class="w-full h-full absolute left-0 top-0 text-center flex items-center justify-center"
              >
                <div class="w-[300px] md:h-[159px] space-y-4">
                  <h2 class="text-xl font-bold">
                    Do you want to start a project together?
                  </h2>
                  <button
                    class="rounded-md md:w-[197px] md:h-[41px] bg-primary text-base text-white"
                  >
                    Copy my email address
                  </button>
                </div>
              </div>

              <img
                class="w-1/2 h-full rounded-md"
                src="./public/images/backgroundblobservicepng.svg"
                alt=""
              />

            </div>




          </div>




          <div
            class="h-full rounded-3xl md:col-span-5 border-[1px] border-gray-400/30 col-span-1 flex items-center  overflow-hidden justify-between  duration-100 ease-linear transition-all hover:shadow-blue-300/35  shadow-xl  "
          >
            <div class="   w-1/2    shadow-2xl  shadow-white  rounded-sm  space-y-4  p-3  md:px-8 h-full bg-primary/60 flex justify-center flex-col items-start ">
              <small class=" text-base    font-semibold  ">The Inside Scoop</small>
              <h1 class=" text-3xl font-bold">
                The Inside Scoop Currently building a JS Animation library
              </h1>
            </div>
            <img class="  w-1/2   h-full" src="./public/images/code.svg" alt="" />
          </div>


        </div>
      </section>

      <!--  section two -->
        <div class=" text-center">
          <h1 class=" text-4xl font-bold md:text-5xl  mb-7 md:mt-9  text-white">A small selection of <span class="  text-sceondry ">recent projects</span> </h1>

          <!-- cards -->

          <div      class="w-full grid  md:grid-cols-4  gap-10    grid-cols-1 md:mb-36 mb-14 ">
            
            <div    v-motion
  :initial="{ opacity: 0, x: -100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0" class="   bg-primary  rounded-3xl space-y-4 col-span-2 md:h-[619px]  py-5 px-4 md:px-6 md:py-9 flex flex-col md:justify-between  gap-2 ">
              <div class="   w-full flex  justify-center  items-center h-2/4 setimg pt-9 overflow-hidden rounded-3xl "  >
                <img src="./public/images/cardone.svg" alt="">
              </div>
              <div class="  text-start h-1/4  px-4 md:px-6   space-y-4  ">
                <h1 class=" md:text-4xl text-xl font-bold text-white">3D Solar System Planets to Explore</h1>
                <p class=" md:text-lg  text-sm font-thin ">Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.</p>
               
                <div  class=" flex  justify-between items-center">
                  <!-- icons -->
                  <div class=" flex items-center gap-5">
                    <Icon name="devicon:react" width="36px" height="36px" />
                    <Icon name="devicon:tailwindcss" width="36px" height="36px" />
                    <Icon name="skill-icons:typescript" width="36px" height="36px" />
                    <Icon name="logos:material-ui" width="41.52px" height="36px" />
                    <Icon name="logos:web-dev-icon" width="42.28px" height="36px" />

                  </div>
                   <button class="  flex items-center  gap-3  text-sm text-sceondry font-thin">Check Live Site <Icon name="charm:arrow-up-right" width="36px" height="36px"  /></button>
                </div>
              </div>


            </div>
            <div       v-motion
  :initial="{ opacity: 0, x: 100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0" class="   bg-primary  rounded-3xl space-y-4 col-span-2 md:h-[619px]  py-5 px-4 md:px-6 md:py-9 flex flex-col md:justify-between  gap-2 ">
              <div class="   w-full flex  justify-center  items-center h-2/4 setimg pt-9 overflow-hidden rounded-3xl "  >
                <img src="./public/images/cartwo.svg" alt="">
              </div>
              <div class="  text-start h-1/4  px-4 md:px-6   space-y-4  ">
                <h1 class=" md:text-4xl text-xl font-bold text-white">3D Solar System Planets to Explore</h1>
                <p class=" md:text-lg  text-sm font-thin ">Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.</p>
               
                <div  class=" flex  justify-between items-center">
                  <!-- icons -->
                  <div class=" flex items-center gap-5">
                    <Icon name="devicon:react" width="36px" height="36px" />
                    <Icon name="devicon:tailwindcss" width="36px" height="36px" />
                    <Icon name="skill-icons:typescript" width="36px" height="36px" />
                    <Icon name="logos:material-ui" width="41.52px" height="36px" />
                    <Icon name="logos:web-dev-icon" width="42.28px" height="36px" />

                  </div>
                   <button class="  flex items-center  gap-3  text-sm text-sceondry font-thin">Check Live Site <Icon name="charm:arrow-up-right" width="36px" height="36px"  /></button>
                </div>
              </div>


            </div>
            <div    v-motion
  :initial="{ opacity: 0, x: -100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0" class="   bg-primary  rounded-3xl space-y-4 col-span-2 md:h-[619px]  py-5 px-4 md:px-6 md:py-9 flex flex-col md:justify-between  gap-2 ">
              <div class="   w-full flex  justify-center  items-center h-2/4 setimg pt-9 overflow-hidden rounded-3xl "  >
                <img src="./public/images/cartthree.svg" alt="">
              </div>
              <div class="  text-start h-1/4  px-4 md:px-6   space-y-4  ">
                <h1 class=" md:text-4xl text-xl font-bold text-white">3D Solar System Planets to Explore</h1>
                <p class=" md:text-lg  text-sm font-thin ">Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.</p>
               
                <div  class=" flex  justify-between items-center">
                  <!-- icons -->
                  <div class=" flex items-center gap-5">
                    <Icon name="devicon:react" width="36px" height="36px" />
                    <Icon name="devicon:tailwindcss" width="36px" height="36px" />
                    <Icon name="skill-icons:typescript" width="36px" height="36px" />
                    <Icon name="logos:material-ui" width="41.52px" height="36px" />
                    <Icon name="logos:web-dev-icon" width="42.28px" height="36px" />

                  </div>
                   <button class="  flex items-center  gap-3  text-sm text-sceondry font-thin">Check Live Site <Icon name="charm:arrow-up-right" width="36px" height="36px"  /></button>
                </div>
              </div>


            </div>
            <div  v-motion
  :initial="{ opacity: 0, x: 100 }"
  :visible-once="{ opacity: 1, x: 0, transition: { duration: 2000, type: 'ease' } }"
  :delay="0" class="   bg-primary  rounded-3xl space-y-4 col-span-2 md:h-[619px]  py-5 px-4 md:px-6 md:py-9 flex flex-col md:justify-between  gap-2 ">
              <div class="   w-full flex  justify-center  items-center h-2/4 setimg pt-9 overflow-hidden rounded-3xl "  >
                <img src="./public/images/cardfour.svg" alt="">
              </div>
              <div class="  text-start h-1/4  px-4 md:px-6   space-y-4  ">
                <h1 class=" md:text-4xl text-xl font-bold text-white">3D Solar System Planets to Explore</h1>
                <p class=" md:text-lg  text-sm font-thin ">Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.</p>
               
                <div  class=" flex  justify-between items-center">
                  <!-- icons -->
                  <div class=" flex items-center gap-5">
                    <Icon name="devicon:react" width="36px" height="36px" />
                    <Icon name="devicon:tailwindcss" width="36px" height="36px" />
                    <Icon name="skill-icons:typescript" width="36px" height="36px" />
                    <Icon name="logos:material-ui" width="41.52px" height="36px" />
                    <Icon name="logos:web-dev-icon" width="42.28px" height="36px" />

                  </div>
                   <button class="  flex items-center  gap-3  text-sm text-sceondry font-thin">Check Live Site <Icon name="charm:arrow-up-right" width="36px" height="36px"  /></button>
                </div>
              </div>


            </div>

          
          </div>



        </div>


        <!-- section three -->


        
        <div  class=" mb-16" >
          <h3 class=" text-white  text-center  mb-16 text-5xl font-bold">Kind words from     <span class=" text-sceondry  "> satisfied clients</span> </h3>
          <!--  carousel -->
            <div   class="my-14 ">
              <el-carousel :interval="4000" type="card" height="400px" class="  w-full  ">
    <el-carousel-item  class=" md:w-full   h-full  rounded-md p-10  bg-primary  ">


      <p>Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
      
       <div class=" flex  items-center h-[49px] gap-5  mt-36  bg-primary ">
        <img class=" w-7 h-7 rounded-full" src="./public/images/Switch.svg" alt="">
        <div>
          <h3>Michael Johnson</h3>
             <small>Director of AlphaStream Technologies</small>
        </div>

       </div>
    </el-carousel-item>
    <el-carousel-item  class=" w-full h-full   rounded-md p-10  bg-primary  ">


      <p>Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
      
       <div class=" flex  items-center h-[49px] gap-5  mt-36  bg-primary ">
        <img class=" w-7 h-7 rounded-full" src="./public/images/Switch.svg" alt="">
        <div>
          <h3>Michael Johnson</h3>
             <small>Director of AlphaStream Technologies</small>
        </div>

       </div>
    </el-carousel-item>
    <el-carousel-item  class=" w-full h-full  rounded-md p-10  bg-primary  ">


      <p>Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
      
       <div class=" flex  items-center h-[49px] gap-5  mt-36  bg-primary ">
        <img class=" w-7 h-7 rounded-full" src="./public/images/Switch.svg" alt="">
        <div>
          <h3>Michael Johnson</h3>
             <small>Director of AlphaStream Technologies</small>
        </div>

       </div>
    </el-carousel-item>
    <el-carousel-item  class=" w-full h-full   rounded-md p-10  bg-primary  ">


      <p>Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
      
       <div class=" flex  items-center h-[49px] gap-5  mt-36  bg-primary ">
        <img class=" w-7 h-7 rounded-full" src="./public/images/Switch.svg" alt="">
        <div>
          <h3>Michael Johnson</h3>
             <small>Director of AlphaStream Technologies</small>
        </div>

       </div>
    </el-carousel-item>
    <el-carousel-item  class=" w-full h-full rounded-md p-10  bg-primary  ">


      <p>Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.</p>
      
       <div class=" flex  items-center h-[49px] gap-5  mt-36  bg-primary ">
        <img class=" w-7 h-7 rounded-full" src="./public/images/Switch.svg" alt="">
        <div>
          <h3>Michael Johnson</h3>
             <small>Director of AlphaStream Technologies</small>
        </div>

       </div>
    </el-carousel-item>


   



  </el-carousel>

            </div>

            <div class=" w-full flex  items-center  justify-between gap-1 flex-wrap  ">
              <img src="./public/sponsers/one.svg" alt="">
              <img src="./public/sponsers/two.svg" alt="">
              <img src="./public/sponsers/three.svg" alt="">
              <img src="./public/sponsers/five.svg" alt="">
            </div>
        </div>
<!--  -->
    </div>
  </div>   

  <div class=" w-full   bg-primary shadow-2xl ">
    <div class=" container mx-auto   md:px-20 px-5 py-4">

      <h1 class=" text-5xl font-bold text-white text-center ">My<span class=" text-sceondry">work experince </span></h1>


       <div class=" grid md:grid-cols-4  grid-cols-1  gap-10  mt-20 ">

        <div class=" md:col-span-2 col-span-1 md:h-[190px] h-[224px]  border-[1px] border-gray-400/30 rounded-3xl md:p-12  p-6 flex items-center gap-3 ">
          <img src="./public/images/avatar.svg" alt="">
          <div class=" text-white">
            <h2 class=" md:text-2xl font-bold text-xl   ">Frontend Engineer Intern</h2>
            <p class=" md:text-base text-sm">Assisted in the development of a web-based platform using React.js, enhancing interactivity.</p>
          </div>
        </div>
        <div class=" md:col-span-2 col-span-1 md:h-[190px] h-[224px]  border-[1px] border-gray-400/30 rounded-3xl md:p-12  p-6 flex items-center gap-3 ">
          <img src="./public/images/avatar.svg" alt="">
          <div class=" text-white">
            <h2 class=" md:text-2xl font-bold text-xl   ">Frontend Engineer Intern</h2>
            <p class=" md:text-base text-sm">Assisted in the development of a web-based platform using React.js, enhancing interactivity.</p>
          </div>
        </div>
        <div class=" md:col-span-2 col-span-1 md:h-[190px] h-[224px]  border-[1px] border-gray-400/30 rounded-3xl md:p-12  p-6 flex items-center gap-3 ">
          <img src="./public/images/avatar.svg" alt="">
          <div class=" text-white">
            <h2 class=" md:text-2xl font-bold text-xl   ">Frontend Engineer Intern</h2>
            <p class=" md:text-base text-sm">Assisted in the development of a web-based platform using React.js, enhancing interactivity.</p>
          </div>
        </div>
        <div class=" md:col-span-2 col-span-1 md:h-[190px] h-[224px]  border-[1px] border-gray-400/30 rounded-3xl md:p-12  p-6 flex items-center gap-3 ">
          <img src="./public/images/avatar.svg" alt="">
          <div class=" text-white">
            <h2 class=" md:text-2xl font-bold text-xl   ">Frontend Engineer Intern</h2>
            <p class=" md:text-base text-sm">Assisted in the development of a web-based platform using React.js, enhancing interactivity.</p>
          </div>
        </div>

       

       </div>


<!--  footer -->

       <div class=" container mx-auto md:h-[400px]   mt-7 containerr  text-white flex flex-col justify-between    space-y-2   px-3   ">
         <div class=" md:w-[760px] mx-auto flex flex-col items-center justify-center gap-8 text-center pt-6  ">
          <h2 class=" text-5xl font-bold" > Ready to take your digital presence to the next level?</h2>
          <p>Reach out to me today and let's discuss how I can help you achieve your goals.</p>

          <button
          class="md:w-[207px] w-full h-[66px] text-lg font-medium rounded-xl justify-center flex items-center gap-5 bg-gradient-to-bl from-[#6971A229] to[#272A3C5E] border-[1px]"
        >
          Contact Me
          <Icon name="tabler:arrow-up-right" width="36px" height="36px" />
        </button>
         </div>

         <div class="  flex  items-center justify-between text-white  flex-col md:flex-row gap-3    text-lg  font-thin">

<h2>Copyright ©2024 mahmoud Ramand</h2>

<div class="  space-x-4 ">
  <Icon name="fa6-brands:square-whatsapp"  class=" text-3xl" style="color: #d2d1d8" />
  <Icon name="fa6-brands:square-twitter"  class=" text-3xl" style="color: #d2d1d8" />
  <Icon name="fa6-brands:square-instagram"  class=" text-3xl" style="color: #d2d1d8" />
  <Icon name="simple-icons:linkedin" class=" text-3xl"  style="color: #d2d1d8" />
    <Icon name="fa6-brands:square-github"  class=" text-3xl" style="color: #d2d1d8" />
</div>
</div>

 

      </div>











    </div>
  </div>
  </div>
  






</template>

<style scoped>
.containerr {
  width: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-image: linear-gradient(0deg, var(--color) 1px, transparent 1px),
    /* Horizontal lines */
      linear-gradient(90deg, var(--color) 1px, transparent 1px); /* Vertical lines */
  background-size: 92px 92px; /* Grid cell size */
  background-color: #000319; /* Base background color */
}

.setimg{
   background-image: url('./public/images/cardbackground.svg');
}



</style>
