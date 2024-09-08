import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleChatbox from '../components/SimpleChatbox';
import axios from 'axios';

jest.mock('axios');

describe('SimpleChatbox Component', () => {
    test('fetches data from API on button click', async () => {
        // Mock the response from axios
        const mockResponse = { data: { text: 'Hello world' }};
        axios.get.mockResolvedValue(mockResponse);

        // Render the component
        const { getByText } = render(<SimpleChatbox />);
        
        // Simulate button click for fetching data
        fireEvent.click(getByText(/fetch/i));

        // Wait for axios.get to be called with the correct URL
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:5000');
        });
    });

    test('matches the snapshot', () => {
        // Render the component and create a snapshot
        const { asFragment } = render(<SimpleChatbox />);
        expect(asFragment()).toMatchSnapshot();
    });
});
