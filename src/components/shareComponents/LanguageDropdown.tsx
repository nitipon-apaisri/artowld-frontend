const LanguageDropdown = () => {
    return (
        <div className="dropdown w-32">
            <ul className=" text-s text-black divide-y divide-gray-100" aria-labelledby="dropdownDefaultButton">
                <li>
                    <b>EN</b>
                </li>
                <li>
                    <b>TH</b>
                </li>
            </ul>
        </div>
    );
};

export default LanguageDropdown;
