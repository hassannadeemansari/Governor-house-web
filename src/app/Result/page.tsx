export default function Result(){
    return(
        <div className="h-[83vh] bg-black flex justify-center flex-col items-center">
            <h1 className="text-blue-600 text-4xl text-center">Grand Entrance Exam Result</h1><br/>
            <div className="h-[51vh] w-[46%] bg-orange-600 ">
                <fieldset className="p-[20px]">
                    <label className="text-xl font-sans">Registration Number*</label><br/>
                    <textarea className="w-[95%]" name="registration" id="registration" placeholder="Registration Number"></textarea>
                </fieldset>
                <fieldset className="p-[20px]">
                    <label className="text-xl font-sans">CNIC or B-Form Number *</label><br/>
                    <textarea className="w-[95%]" name="CNIC" id="CNIC" placeholder="CNIC or B-Form Number"></textarea>
                </fieldset>
                <div className="h-[100px] flex justify-center items-center">
                <button className="w-[25%] h-[55px] text-white bg-blue-700 text-xl hover:bg-orange-900 hover:text-black">Get Result</button>
                </div>

            </div>
        </div>
    );
} 