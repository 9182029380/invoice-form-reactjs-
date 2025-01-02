import React from 'react';
import { Calculator } from 'lucide-react';
import { InvoiceData } from '../../types/invoice';

interface BillingType {
  hourly: string;
  daily: string;
  monthly: string;
}

const BILLING_TYPES: BillingType = {
  hourly: 'Hourly',
  daily: 'Daily',
  monthly: 'Monthly',
};

interface BillingSectionProps {
  data: InvoiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function BillingSection({ data, onChange }: BillingSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Calculator className="w-5 h-5" />
        Billing Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="invoiceNumber"
          placeholder="Invoice Number"
          className="input-field"
          value={data.invoiceNumber || ''}
          onChange={onChange}
        />
        <select
          name="billingType"
          className="input-field"
          value={data.billingType}
          onChange={onChange}
        >
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input-field"
          value={data.description || ''}
          onChange={onChange}
        />
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          className="input-field"
          value={data.rate || ''}
          onChange={(e) =>
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.value ? String(Number(e.target.value)) : '0',
                name: e.target.name,
              },
            })
          }
        />
        <input
          type="number"
          name="units"
          placeholder="Units"
          className="input-field"
          value={data.units}
          onChange={onChange}
        />
        <input
          type="date"
          name="startDate"
          className="input-field"
          value={data.startDate}
          onChange={onChange}
        />
        <input
          type="date"
          name="endDate"
          className="input-field"
          value={data.endDate}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
