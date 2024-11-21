"use client";

import { Button, ProgressBar } from "@carbon/react";

export default function Chat01() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Button>Chat 01</Button>
      <Button>Chat 02</Button>
      <Button>Chat 03</Button>
      <ProgressBar label="Progress" />
    </div>
  );
}
