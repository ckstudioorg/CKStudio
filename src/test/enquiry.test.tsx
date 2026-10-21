import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from '../components/contact/EnquiryForm';
import { enquiry } from '../content/contact';

const EnquiryForm = () => <MemoryRouter><Form /></MemoryRouter>;
const fill = (label: RegExp, value: string) => fireEvent.change(screen.getByLabelText(label), { target: { value } });

describe('project enquiry form', () => {
    const realKey = enquiry.accessKey;
    afterEach(() => { enquiry.accessKey = realKey; vi.unstubAllGlobals(); });

    it('asks for a name and phone number before sending', () => {
        render(<EnquiryForm />);
        fireEvent.click(screen.getByRole('button', { name: enquiry.send }));
        expect(screen.getByText(enquiry.errors.name)).toBeInTheDocument();
        expect(screen.getByText(enquiry.errors.phone)).toBeInTheDocument();
    });

    it('sends the enquiry and thanks the visitor', async () => {
        enquiry.accessKey = 'test-key';
        const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
        vi.stubGlobal('fetch', fetchMock);
        render(<EnquiryForm />);
        fill(/your name/i, 'Ravi Kumar');
        fill(/phone/i, '+91 98765 43210');
        fireEvent.click(screen.getByLabelText('Commercials'));
        fireEvent.click(screen.getByRole('button', { name: enquiry.send }));
        await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Ravi'));
        const body = JSON.parse(fetchMock.mock.calls[0][1].body);
        expect(body).toMatchObject({ access_key: 'test-key', Name: 'Ravi Kumar', Services: 'Commercials' });
    });

    it('shows a friendly message if sending fails', async () => {
        enquiry.accessKey = 'test-key';
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
        render(<EnquiryForm />);
        fill(/your name/i, 'Ravi');
        fill(/phone/i, '9876543210');
        fireEvent.click(screen.getByRole('button', { name: enquiry.send }));
        expect(await screen.findByRole('alert')).toHaveTextContent(/couldn't be sent/);
    });
});
