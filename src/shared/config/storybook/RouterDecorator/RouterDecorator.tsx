import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (Story: Story) => (
    <MemoryRouter>
        <Story />
    </MemoryRouter>
);
