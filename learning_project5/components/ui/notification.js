import ReactDOM from 'react-dom';


function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = ' bg-zinc-700 text-white';

  if (status === 'success') {
    statusClasses = " bg-green-500 text-black"
  }

  if (status === 'error') {
    statusClasses = " bg-red-500 text-black";
  }

  const cssClasses = `${" w-[550px] rounded-sm flex justify-around items-center py-2 fixed bottom-2"} ${statusClasses}`;

  return(
    <div className={cssClasses}>
      <h2 className='  font-bold text-2xl'>{title}</h2>
      <p className=' text-xl'>{message}</p>
    </div>
  );
}

export default Notification;