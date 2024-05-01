import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Timelineb = () => {
  return (
    <div className="flex justify-center items-center mt-36 gap-10">
      {/* timeline */}
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon />
              <Typography color="blue-gray">Timeline Title Here.</Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gray" className="font-normal">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty-five years to get these plants, twenty-five years of blood, sweat, and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon />
              <Typography color="blue-gray">Timeline Title Here.</Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gray" className="font-normal">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty-five years to get these plants, twenty-five years of blood, sweat, and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon />
              <Typography color="blue-gray">Timeline Title Here.</Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gray" className="font-normal">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty-five years to get these plants, twenty-five years of blood, sweat, and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      {/* img */}
      <div>
      <img
      className="h-96 w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
      </div>
    </div>
  );
}

export default Timelineb;
