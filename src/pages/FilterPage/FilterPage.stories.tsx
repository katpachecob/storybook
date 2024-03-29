import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Filter from './FilterPage';
import { ISelectProps } from '../../interface/ISelectProps';
import { FakeData } from '../../utils/data';

const filterMeta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter
};

type Story = StoryObj<typeof Filter>
const ModalComponent = (args: ISelectProps) => {

  return (

    <div className="flex flex-col space-y-4 mt-8">
      <Filter {...args} />
    </div>

  )
}

export const FilterElement = ModalComponent.bind({});

FilterElement.args = {
  filter_title: "Filter data by",
  modal_title: "Filter data by",
  data: [
    ...FakeData
  ],
};


export default filterMeta