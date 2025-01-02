import { ReactNode } from "react";

export interface InvoiceData {
  
  // Company Details
  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  panNumber: string;
  gstNumber: string;
  
  // Bank Details
  bankName: string;
  bankAddress: string;
  accountNumber: string;
  ifscCode: string;
  
  // Trainer Details
  trainerName: string;
  trainerEmail: string;
  trainerPhone: string;
  
  // Client Details
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;
  poNumber: string;  // Added PO Number
  
  // Billing Details
  invoiceNumber: string;
  description: string;
  billingType: 'hourly' | 'daily' | 'monthly';
  rate: number;
  units: number;
  startDate: string;
  endDate: string;
}