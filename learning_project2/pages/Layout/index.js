import { BiLocationPlus,BiRightArrowAlt,BiCalendar } from "react-icons/bi";
import data from "../../public/Data/data"


const Layout = () => {


  return (
    <div>
        <div className=" flex flex-col justify-center items-center my-10  ">
            {
                data.filter(events=>events.isFeatured ===true).map((ev)=>{
                    const {id,title,description,location,isFeatured,image,date} = ev
                    return(
                        <div key={id} className=" flex gap-x-4 my-2 bg-slate-200 w-[470px] rounded-md">
                        <div><img src={image} width="150px" alt={id} className=" rounded-l-md h-48"/></div>
                        <div>
                            <h1 className=" font-bold text-xl mt-2">{title}</h1>

                            <div className="flex  items-center gap-2 my-2">
                            <BiCalendar/>
                            <h1 className="font-[700] text-zinc-600">{date}</h1>
                            </div>
                            <div className=" flex items-center gap-2 italic">
                            <BiLocationPlus className="" size={20}/>
                            <h1 className="w-40">{location}</h1>
                            </div>

                            <div className=" flex justify-end text-white">
                            <button className=" bg-emerald-600 rounded-md px-3 py-1 font-[600] my-2 -mr-12">Explore Event <BiRightArrowAlt className=" inline"/></button>
                            </div>
                        </div>
                        </div>
                    )
                })  
            }
        </div>
    </div>
  )
}

export default Layout