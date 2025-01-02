import React, { useState } from 'react';
import { InvoiceData } from '../types/invoice';
import { generateInvoiceNumber } from '../utils/generateInvoiceNumber';
import InvoicePreview from './InvoicePreview';
import CompanySection from './sections/CompanySection';
import TrainerSection from './sections/TrainerSection';
import ClientSection from './sections/ClientSection';
import BankSection from './sections/BankSection';
import BillingSection from './sections/BillingSection';

const initialInvoiceData: InvoiceData = {
  companyName: '',
  companyAddress: '',
  companyEmail: '',
  companyPhone: '',
  panNumber: '',
  gstNumber: '',
  bankName: '',
  bankAddress: '',
  accountNumber: '',
  ifscCode: '',
  trainerName: '',
  trainerEmail: '',
  trainerPhone: '',
  clientName: '',
  clientAddress: '',
  clientEmail: '',
  clientPhone: '',
  poNumber: '',
  invoiceNumber: generateInvoiceNumber(),
  billingType: 'hourly',
  rate: 0,
  units: 0,
  startDate: '',
  endDate: '',
  description: ''
};

export default function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(initialInvoiceData);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    window.print();
  };

  if (showPreview) {
    return (
      <InvoicePreview
        data={invoiceData}
        onBack={() => setShowPreview(false)}
        onDownload={handleDownload}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Training Invoice Generator
        </h2>

        <CompanySection data={invoiceData} onChange={handleInputChange} />
        <TrainerSection data={invoiceData} onChange={handleInputChange} />
        <ClientSection data={invoiceData} onChange={handleInputChange} />
        <BankSection data={invoiceData} onChange={handleInputChange} />
        <BillingSection data={invoiceData} onChange={handleInputChange} />

        <button
          onClick={() => setShowPreview(true)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Preview Invoice
        </button>
      </div>
    </div>
  );
}