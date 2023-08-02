import { FiCheck, FiX } from "react-icons/fi"


export default function MainPage() {
  return (
    <div className="bg-gradient-to-l from-lime-600 to-green-500">
        <div className="px-[4%] py-5 mb-4">
            <h1 className="text-4xl font-bold">Rukhasy</h1>
        </div>
        <div className="md:px-[8%] px-2 py-10">
            <div className="flex text-white">
                <div className="md:w-[35%] flex items-center justify-center md:px-6">
                    <h2 className="md:text-4xl font-bold">Price Table</h2>
                </div>
                <div className="flex-1 bg-gray-300 md:px-6 md:py-4 py-2 text-center rounded-tl-xl">
                    <h2 className="md:text-2xl">Trail</h2>
                    <h3 className="md:text-3xl font-bold mt-2">Free</h3>
                </div>
                <div className="flex-1 bg-red-500 md:px-6 md:py-4 py-2 text-center">
                    <h3 className="md:text-2xl">Start</h3>
                    <div className="flex justify-center mt-2">
                        <span className="md:text-3xl font-bold">$2</span>
                        <span className="text-base">99</span>
                    </div>
                </div>
                <div className="flex-1 bg-green-500 md:px-6 md:py-4 py-2 text-center">
                    <h3 className="md:text-2xl">Smart</h3>
                    <div className="flex mt-2 justify-center">
                        <span className="md:text-3xl font-bold">$2</span>
                        <span className="text-base">99</span>
                    </div>
                </div>
                <div className="flex-1 bg-yellow-500 md:px-6 md:py-4 py-2 text-center rounded-tr-xl">
                    <h3 className="md:text-2xl">Value</h3>
                    <div className="flex mt-2 justify-center">
                        <span className="md:text-3xl font-bold">$2</span>
                        <span className="text-base">99</span>
                    </div>
                </div>
            </div>
            <div className="bg-white/90 rounded-l-xl md:overflow-hidden shadow-xl">
                {data.map((plant, index) => (
                    <div className={`flex ${index % 2 === 0 ? 'bg-gray-200':''} border-b`} key={index}>
                        <div className="md:w-[35%] px-6 py-4">
                            <p>{plant.text}</p>
                        </div>
                        <div className="flex-1 flex justify-center p-4">
                            {plant.trailPlant ? <FiCheck className="text-green-600 text-2xl" /> : <FiX className="text-red-500 text-xl" />}
                        </div>
                        <div className="flex-1 flex justify-center p-4">
                            {plant.startPlant ? <FiCheck className="text-green-600 text-2xl" /> : <FiX className="text-red-500 text-xl" />}
                        </div>
                        <div className="flex-1 flex justify-center p-4">
                            {plant.smartPlant ? <FiCheck className="text-green-600 text-2xl" /> : <FiX className="text-red-500 text-xl" />}
                        </div>
                        <div className="flex-1 flex justify-center p-4">
                            {plant.valuePlant ? <FiCheck className="text-green-600 text-2xl" /> : <FiX className="text-red-500 text-xl" />}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex mt-5">
                <div className="md:w-[35%] flex items-center px-6">
                    
                </div>
                <div className="flex-1 text-center">
                    <button className="bg-gray-300 px-6 py-3 rounded-2xl">Buy now</button>
                </div>
                <div className="flex-1 text-center">
                    <button className="bg-red-500 px-6 py-3 rounded-2xl">Buy now</button>
                </div>
                <div className="flex-1 text-center">
                    <button className="bg-green-500 px-6 py-3 rounded-2xl">Buy now</button>
                </div>
                <div className="flex-1 text-center">
                    <button className="bg-yellow-500 px-6 py-3 rounded-2xl">Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}


const data = [
    {
        text:'This is some text for testing purpose',
        trailPlant:true,
        startPlant:true,
        smartPlant:true,
        valuePlant:true,
    },
    {
        text:'This is some text',
        trailPlant:false,
        startPlant:true,
        smartPlant:true,
        valuePlant:true,
    },
    {
        text:'This is some text',
        trailPlant:false,
        startPlant:true,
        smartPlant:true,
        valuePlant:true,
    },
    {
        text:'This is some text',
        trailPlant:false,
        startPlant:false,
        smartPlant:true,
        valuePlant:true,
    },
    {
        text:'This is some text',
        trailPlant:false,
        startPlant:false,
        smartPlant:false,
        valuePlant:true,
    },
    {
        text:'This is some text',
        trailPlant:false,
        startPlant:false,
        smartPlant:false,
        valuePlant:true,
    },
]