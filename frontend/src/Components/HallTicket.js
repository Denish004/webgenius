import HallTicketLottie from "../Lotties/hallticket";

export default function HallTicket(){
    return(

<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-violet-500 shadow-lg md:flex-row m-10 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <HallTicketLottie/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

    )
}