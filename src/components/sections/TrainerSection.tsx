import React from 'react';
import { GraduationCap } from 'lucide-react';
import { InvoiceData } from '../../types/invoice';

interface TrainerSectionProps {
  data: InvoiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TrainerSection({ data, onChange }: TrainerSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <GraduationCap className="w-5 h-5" />
        Trainer Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="trainerName"
          placeholder="Trainer Name"
          className="input-field"
          value={data.trainerName}
          onChange={onChange}
        />
        <input
          type="email"
          name="trainerEmail"
          placeholder="Trainer Email"
          className="input-field"
          value={data.trainerEmail}
          onChange={onChange}
        />
        <input
          type="tel"
          name="trainerPhone"
          placeholder="Trainer Phone"
          className="input-field"
          value={data.trainerPhone}
          onChange={onChange}
        />
      </div>
    </div>
  );
}