import React, { useState } from 'react'

const Menu = () => {
    let Links =[
        {name:"Inicio", link:"/"},
        {name:"Servicios", link:"/"},
        {name:"¡Agenda tu cita!", link:"/"},
        {name:"¿Quienes Somos?", link:"/"},
    ];
    let [open,setOpen]=useState(false);
    return (
        <header className="w-full bg-white opacity-90">
        <div className="top-0 items-center w-full">
          <nav
            className="w-full shadow md:p-2.5 md:flex md:items-center md:justify-between"
          >
            <div className="nav-links flex justify-between items-center">
              <span className="text-2xl cursor-pointer font-[Poppins]">
                <img className="size-24 md:size-16 inline" src="/images/logo.jpg" />
                <span
                  className="text-xl font-semibold md:opacity-100 font-['Onest_Variable']"
                  >BarberShop</span
                >
              </span>
              <div  onClick={()=>setOpen(!open)}  className="text-3xl cursor-pointer mx-2 md:hidden">
              <ion-icon name={open ? 'close':'menu'}></ion-icon>
              </div>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {
                    Links.map((Link)=> (
                        <li key={Link.name}>
                            <a href={Link.link} className="text-black font-semibold mx-4 my-6 md:my-0 hover:text-sky-500 duration-500">{Link.name}</a>
                        </li>
                    ))
                }
            </ul>
          </nav>
        </div>
      </header>
      
    )
}
1
export default Menu 