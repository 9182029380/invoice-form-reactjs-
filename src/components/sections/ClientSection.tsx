import React from 'react';
import { Users } from 'lucide-react';
import { InvoiceData } from '../../types/invoice';

interface ClientSectionProps {
  data: InvoiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ClientSection({ data, onChange }: ClientSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Users className="w-5 h-5" />
        Client Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          className="input-field"
          value={data.clientName}
          onChange={onChange}
        />
        <input
          type="text"
          name="clientAddress"
          placeholder="Client Address"
          className="input-field"
          value={data.clientAddress}
          onChange={onChange}
        />
        <input
          type="email"
          name="clientEmail"
          placeholder="Client Email"
          className="input-field"
          value={data.clientEmail}
          onChange={onChange}
        />
        <input
          type="tel"
          name="clientPhone"
          placeholder="Client Phone"
          className="input-field"
          value={data.clientPhone}
          onChange={onChange}
        />
        <input
          type="text"
          name="poNumber"
          placeholder="PO Number"
          className="input-field"
          value={data.poNumber}
          onChange={onChange}
        />
      </div>
    </div>
  );
}