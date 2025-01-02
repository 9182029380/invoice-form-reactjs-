import React from 'react';
import { Building2 } from 'lucide-react';
import { InvoiceData } from '../../types/invoice';

interface CompanySectionProps {
  data: InvoiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CompanySection({ data, onChange }: CompanySectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Building2 className="w-5 h-5" />
        Company Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="input-field"
          value={data.companyName}
          onChange={onChange}
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          className="input-field"
          value={data.companyAddress}
          onChange={onChange}
        />
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email"
          className="input-field"
          value={data.companyEmail}
          onChange={onChange}
        />
        <input
          type="tel"
          name="companyPhone"
          placeholder="Company Phone"
          className="input-field"
          value={data.companyPhone}
          onChange={onChange}
        />
        <input
          type="text"
          name="panNumber"
          placeholder="PAN Number"
          className="input-field"
          value={data.panNumber}
          onChange={onChange}
        />
        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          className="input-field"
          value={data.gstNumber}
          onChange={onChange}
        />
      </div>
    </div>
  );
}