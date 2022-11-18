import React, { useEffect, useRef, useState } from "react";
import data from "../../public/Data/data";
import { BiLocationPlus, BiRightArrowAlt, BiCalendar } from "react-icons/bi";

const AllEvents = () => {
  const [yearVal, setYearVal] = useState(null);
  const [monthVal, setMonthVal] = useState(null);

  const YearOption = [2020, 2021, 2022, 2023];
  const MonthOption = [
    {"01": "Jan"},
    {"02": "Feb"},
    {"03": "Mar"},
    {"04": "Apr"},
    {"05": "May"},
    {"06": "Jun"},
    {"07": "Jul"},
    {"08": "Aug"},
    {"09": "Sep"},
    {"10": "Oct"},
    {"11": "Nov"},
    {"12": "Dec"},
  ];

  const ar = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const findEvents = ()=>{
    let val = data.filter(
            (da) =>
              da.date.split("-")[0] === yearVal && Number(da.date.split("-")[1]) === ar.findIndex((d)=>d === monthVal)+1
              )
    let val1 = val.filter((da)=>
   Number(da.date.split("-")[1]) === ar.findIndex((d)=>d === monthVal)+1 )

              console.log(val);
  }

  findEvents()

  const findMonth = (val)=>{
    return Object.values(MonthOption).filter((k,v)=> v===val)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(yearVal);
    console.log(monthVal);
    console.log("2020-03-25".split("-"));
    console.log(findMonth(monthVal));
  };

  const yearChangeHandler = (event) => {
    setYearVal(event.target.value);
  };

  const monthChangeHandler = (event) => {
    setMonthVal(event.target.value);
    
  };

  return (
    <div>
      <div className=" flex flex-col justify-center items-center my-10  ">
        <div className="w-[500px] bg-slate-200 rounded-md mb-12 ">
          <form
            action=""
            className=" flex justify-around items-center my-2"
            onSubmit={handleSubmit}
          >
            <label htmlFor="year" className=" font-[700]">
              Year
            </label>

            <select
              name="year"
              id="year"
              onChange={yearChangeHandler}
              className="w-28 text-center rounded-md "
            >
              {YearOption.map((year, i) => {
                return <option key={i}>{year}</option>;
              })}
            </select>

            <label htmlFor="month" className=" font-[700]">
              Month
            </label>
            <select
              name="month"
              id="month"
              className="w-28 text-center rounded-md"
              onChange={monthChangeHandler}
            >
              {MonthOption.map((month, i) => {
                return <option key={i}>{Object.values(month)}</option>;
              })}
            </select>

            <button
              className="bg-emerald-600 rounded-md px-3 py-1 text-white"
              onClick={handleSubmit}
              type="button"
            >
              Find Events
            </button>
          </form>
        </div>
        {
            data.filter(
            (da) =>
              da.date.split("-")[0] === yearVal && Number(da.date.split("-")[1]) === ar.findIndex((d)=>d === monthVal)+1
              ).map((ev) => {
            const {
              id,
              title,
              description,
              location,
              isFeatured,
              image,
              date,
            } = ev;
            return (
              <div
                key={id}
                className=" flex gap-x-4 my-2 bg-slate-200 w-[480px] rounded-md"
              >
                <div>
                  <img
                    src={image}
                    width="150px"
                    alt={id}
                    className=" rounded-l-md h-48"
                  />
                </div>
                <div>
                  <h1 className=" font-bold text-xl mt-2">{title}</h1>

                  <div className="flex  items-center gap-2 my-2">
                    <BiCalendar />
                    <h1 className="font-[700] text-zinc-600">{date}</h1>
                  </div>
                  <div className=" flex items-center gap-2 italic">
                    <BiLocationPlus className="" size={20} />
                    <h1 className="w-40">{location}</h1>
                  </div>

                  <div className=" flex justify-end text-white">
                    <button className=" bg-emerald-600 rounded-md px-3 py-1 font-[600] my-2 ml-40">
                      Explore Event <BiRightArrowAlt className=" inline" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllEvents;
