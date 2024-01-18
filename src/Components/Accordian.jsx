import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Menu from "./Menu";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon({data,title,val}) {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div>
      <Accordion open={open === val} icon={<Icon id={val} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(val)}>{title}</AccordionHeader>
        <AccordionBody>
           {data.map((index) => (
          <Menu key={index?.card?.info?.id} resMenu={index} />
        ))}
        </AccordionBody>
      </Accordion>
    </div>
  );
}