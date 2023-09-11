import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
    items: string[];
    title: string;
    select: (selectedValue: string) => void;
}

const DropDown = ({ items, title, select }: Props) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        select(selectedValue);
    };

    const rounded = { borderRadius: '10px' };


    return (
        <select
            className="custom-select custom-select-lg bg-light" style={rounded}
            defaultValue={'DEFAULT'}
            onChange={handleSelectChange}
        >
            <option key={title} value='DEFAULT' disabled>   {title}            </option>
            <option key={'any'} value='' >any</option>

            {items.map((item, index) => (
                <option value={item} key={index} >
                    {item}
                </option>
            ))}
        </select>
    );
};

export default DropDown;
