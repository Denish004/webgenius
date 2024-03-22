import WelcomeLottie from "../Lotties/welcome";
import pic from "../Assets/welcompic-removebg-preview.png"

export default function Welcome() {
    const currentDate = new Date();

    // Array of month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Array of day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Extract the day, month, and year
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth(); // Month index (0-based)
    const month = months[monthIndex]; // Get month name from array
    const year = currentDate.getFullYear();

    return (
        <div>
            <section style={{ borderRadius: 10,marginLeft:25, marginRight: 20, marginTop: 10, backgroundImage: 'linear-gradient(to left, rgb(181 153 238), #6a5acd)' }}>
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <p className="text-white">{days[currentDate.getDay()]}, {month} {day}, {year}</p>
                        <h1 className="max-w-2xl text-gray-100 mb-4 text-xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" style={{paddingTop:50}}>Welcome Back John</h1>
                        <p className="max-w-2xl text-gray-200 mb-6  font-medium  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Always stay update with the current being on this platform regularly.</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" style={{ paddingLeft: 30 }}>
                        {/* <img src={pic} alt="" /> */}
                        <WelcomeLottie/>
                    </div>
                </div>
            </section>
        </div>
    )
}
