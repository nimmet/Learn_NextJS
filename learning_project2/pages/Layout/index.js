import { BiLocationPlus,BiRightArrowAlt,BiCalendar } from "react-icons/bi";


const Layout = () => {
    const DUMMY_EVENTS = [
        {
          id: 'e1',
          title: 'Programming for everyone',
          description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
          location: 'Somestreet 25, 12345 San Somewhereo',
          date: '2021-05-12',
          image: 'images/coding-event.jpg',
          isFeatured: false,
        },
        {
          id: 'e2',
          title: 'Networking for introverts',
          description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
          location: 'New Wall Street 5, 98765 New Work',
          date: '2021-05-30',
          image: 'images/introvert-event.jpg',
          isFeatured: true,
        },
        {
          id: 'e3',
          title: 'Networking for extroverts',
          description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
          location: 'My Street 12, 10115 Broke City',
          date: '2022-04-10',
          image: 'images/extrovert-event.jpg',
          isFeatured: true,
        },
      ];

  return (
    <div>
        <div className=" flex flex-col justify-center items-center my-10  ">
            {
                DUMMY_EVENTS.filter(events=>events.isFeatured ===true).map((ev)=>{
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