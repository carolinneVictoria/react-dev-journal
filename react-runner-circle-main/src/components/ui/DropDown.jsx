import { useState } from "react";

function DropDown({ options =[], value, onChange, placeholder = "Selecione uma opção", className = '' }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option.value);
        setIsOpen(false);
    }

    const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`}>
        <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg px-3 shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
            <div className="flex items-center justify-between">
                <span >
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </button>
        {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        )}

        {isOpen && (
            <div
                className="fixed inset-0 z-0"
                onClick={() => setIsOpen(false)}
            />
        )}
    </div>
  );
}

export default DropDown;