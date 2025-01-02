import React from 'react';
import { Landmark } from 'lucide-react';
import { InvoiceData } from '../../types/invoice';

interface BankSectionProps {
  data: InvoiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BankSection({ data, onChange }: BankSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Landmark className="w-5 h-5" />
        Bank Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="bankName"
          placeholder="Bank Name"
          className="input-field"
          value={data.bankName}
          onChange={onChange}
        />
        <input
          type="text"
          name="bankAddress"
          placeholder="Bank Address"
          className="input-field"
          value={data.bankAddress}
          onChange={onChange}
        />
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          className="input-field"
          value={data.accountNumber}
          onChange={onChange}
        />
        <input
          type="text"
          name="ifscCode"
          placeholder="IFSC Code"
          className="input-field"
          value={data.ifscCode}
          onChange={onChange}
        />
      </div>
    </div>
  );
}