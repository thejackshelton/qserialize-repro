import { component$ } from "@builder.io/qwik";
import { Accordion } from "@qwik-ui/headless";

export const MyAccordion = component$(() => {
  const items = [1, 2, 3];

  return (
    <Accordion.Root>
      {items.map((item) => (
        <Accordion.Item key={item}>
          <Accordion.Header>
            <Accordion.Trigger>
              <span>Trigger {item}</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>Inside Content {item}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
});
