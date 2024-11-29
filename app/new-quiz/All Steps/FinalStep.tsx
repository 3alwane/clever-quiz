"use client";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function FinalStep() {
  return (
    <Card
      className="shadow-none border-none py-6 flex flex-col gap-2 w-full 
    items-center mt-24 mb-9"
    >
      <div className="flex justify-around w-full">
        {/* Left Column */}
        <div className="flex gap-11 flex-col p-4">
          <FieldDisplay label="Quiz Title" value="The name of the quiz" />
          <FieldDisplay label="Quiz Topic" value="JavaScript Quiz" />
        </div>

        {/* Right Column */}
        <div className="flex gap-11 flex-col p-4">
          <FieldDisplay label="Number Of Questions" value="14" />
          <FieldDisplay label="Quiz Difficulty" value="Medium" />
        </div>
      </div>
    </Card>
  );
}

// Reusable FieldDisplay component
function FieldDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col w-full max-w-sm gap-1.5">
      <Label className="text-slate-600">{label}</Label>
      <div className="flex items-center gap-2">
        <p>{value}</p>
      </div>
    </div>
  );
}
