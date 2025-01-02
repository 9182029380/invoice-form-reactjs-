import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { InvoiceData } from '../types/invoice';
import { numberToWords } from '../utils/numberToWords';

interface InvoicePreviewProps {
  data: InvoiceData;
  onBack: () => void;
  onDownload: () => void;
}

export default function InvoicePreview({ data, onBack, onDownload }: InvoicePreviewProps) {
  const calculateTotal = () => {
    const rate = Number(data.rate) || 0;
    const units = Number(data.units) || 0;
    return rate * units;
  };
  const total = calculateTotal();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={onDownload}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Download className="w-4 h-4" /> Download
        </button>
      </div>

      <div id="invoice-preview" className="bg-white p-8 rounded-lg shadow-lg">
        <div className="border-b pb-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Training Invoice</h1>
          <p className="text-gray-600">Invoice #: {data.invoiceNumber}</p>
          <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">From:</h3>
            <p>{data.companyName}</p>
            <p>{data.companyAddress}</p>
            <p>{data.companyEmail}</p>
            <p>{data.companyPhone}</p>
            <p className="mt-2">PAN: {data.panNumber}</p>
            <p>GST: {data.gstNumber}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">To:</h3>
            <p>{data.clientName}</p>
            <p>{data.clientAddress}</p>
            <p>{data.clientEmail}</p>
            <p>{data.clientPhone}</p>
            {data.poNumber && <p className="mt-2">PO Number: {data.poNumber}</p>}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2">Trainer Details:</h3>
          <p>{data.trainerName}</p>
          <p>{data.trainerEmail}</p>
          <p>{data.trainerPhone}</p>
        </div>

        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Description</th>
                <th className="text-right py-2">Rate</th>
                <th className="text-right py-2">Units</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">
                  {data.description} ({data.billingType})
                  <br />
                  <span className="text-sm text-gray-600">
                    Period: {data.startDate} to {data.endDate}
                  </span>
                </td>
                <td className="text-right py-2">₹{(Number(data.rate) || 0).toFixed(2)}</td>
                <td className="text-right py-2">{data.units}</td>
                <td className="text-right py-2">₹{total.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td colSpan={3} className="py-2">Total</td>
                <td className="text-right py-2">₹{total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mb-8">
          <p className="font-semibold">Amount in words:</p>
          <p className="capitalize">{numberToWords(total)}</p>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2">Bank Details:</h3>
          <p>Bank Name: {data.bankName}</p>
          <p>Bank Address: {data.bankAddress}</p>
          <p>Account Number: {data.accountNumber}</p>
          <p>IFSC Code: {data.ifscCode}</p>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex justify-end">
            <div className="text-center">
              <div className="mb-16">
                _____________________
              </div>
              <p className="font-semibold">Authorized Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
