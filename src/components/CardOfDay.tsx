const CardOfDay = () => {
    return (
        <div className="w-[480px] h-[480px] rounded-2xl shadow-custom ">
            <div className="w-full aspect-4/3 bg-slate-500 rounded-t-2xl"></div>
            <div className="w-full">
                <div className="flex flex-row items-center justify-between p-6">
                    <div className="flex flex-row items-center">
                        <div className="w-16 h-16 rounded-full bg-slate-500"></div>
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
    );
};

export default CardOfDay;
