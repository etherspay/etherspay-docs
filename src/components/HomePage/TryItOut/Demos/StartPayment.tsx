import { Prism } from "@mantine/prism";
import React from "react";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

export default function StartPayment() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
