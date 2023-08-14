// import img from "../assets/images/test.jpg";
const CardOfDay = () => {
    return (
        <div className="w-[480px] h-[480px] rounded-2xl shadow-custom">
            <div className="w-full aspect-square bg-slate-500 rounded-2xl">
                <div className="w-11/12   bg-white rounded-2xl absolute left-2/4 -mr-[50%] -translate-x-1/2 bottom-6">
                    <div className="flex flex-row items-center justify-between p-6">
                        <div className="flex flex-row items-center">
                            <div className="w-12 h-12 rounded-full bg-slate-500"></div>
                            <div className="ml-4">
                                <h5 className="font-bold tracking-wide antialiased">Lorem</h5>
                                <p className="text-xs text-primary font-medium tracking-wider">Username</p>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="font-bold tracking-wide antialiased">Price</h5>
                            <p className="text-xs text-primary font-medium tracking-wider">999 THB</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`w-full aspect-square rounded-2xl bg-[url(../src/assets/images/test.jpg)] bg-center bg-no-repeat bg-cover`}></div> */}
        </div>
    );
};

export default CardOfDay;
