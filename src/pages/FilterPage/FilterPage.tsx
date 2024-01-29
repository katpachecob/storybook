import Accordion from "../../components/Accordion/Accordion";
import React, { useState } from 'react'
import GeneralLayout from "../../layout/GeneralLayout";
import Modal from "../../components/Modal/Modal";
import FilterIcon from "../../assets/FilterIcon";
import { useDisclosure } from "../../hooks/useDiscloure";
import { FakeData } from "../../utils/data";
import ResetIcon from "../../assets/ResetIcon";
import { handleFilterSelect } from "../../services/filterService/handleFilter";

const Filter = ({data = FakeData, filter_title='Filter data by', modal_title='Filter'}) => {
    const { toggle, isOpen } = useDisclosure(false)
    const [filterSelected, setFilterSelected] = useState([])

    const handleFilter = async(element) => {
        const updatedData = await handleFilterSelect(element, filterSelected)
        setFilterSelected(updatedData);
    };

    const handleDelete = (element) => {
        const data = filterSelected.filter((item) => !(item.title === element.title && item.value === element.value && item.index === element.index ))
        setFilterSelected(data)
    }

    return (
        <GeneralLayout>
            <div >
                <Modal title={modal_title} onClick={(element) => handleDelete(element)} filters={filterSelected} icon={<FilterIcon fill={isOpen ? '#fff' : '#1967FF'} />} isOpen={isOpen} onClose={toggle} >
                    <div className="bg-neutral_gray w-[100%]  p-5 my-2 rounded-lg backdrop-blur-md">
                        <div className="flex flex-row mb-4 justify-between items-center">
                            <p className='text-white  text-lg'>{filter_title}</p>
                            <button className="flex items-center gap-2 my-auto" onClick={() => setFilterSelected([])}>
                                <ResetIcon />
                                <p className='text-primary text-normal text-sm'>Reset</p>
                            </button>
                        </div>
                        {
                            data.map(({ title, multi, options }, index) =>
                                <Accordion selectData={filterSelected} index={index} key={index} title={title} multi={multi} options={options} onChange={(element) => handleFilter({ ...element, title, multi, index })} />
                            )
                        }
                    </div>
                </Modal>
            </div>
        </GeneralLayout>
    )
}

export default Filter
