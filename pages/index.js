import MeetupList from "@/components/meetups/MeetupList";
import React, { useEffect, useState } from "react";
const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "JS confrence",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Lord_Mountbatten_meets_Nehru%2C_Jinnah_and_other_Leaders_to_plan_Partition_of_India.jpg",
    address: "Pearl Harbour, 2nd cross, 1903",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "React confrence",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Brian_Hayes_meeting_Indian_Prime_Minister_Narendra_Modi.jpg",
    address: "Gujarat Harbour, 2nd cross, 1903",
    description: "This is a meetup 2",
  },
];
const HomePage = (props) => {
  // const [meetups, setMeetups] = useState([]);

  // useEffect(() => {
  //   // fetching
  //   setMeetups(DUMMY_MEETUP);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // runs on server useful for more freq change with auth
  // fetch data api
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
}

// export async function getStaticProps() { // will run on system
//   // fetch data here
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//     revalidate: 10, // data change frequency in secs(updates every mentioned secs in server)
//   };
// }

export default HomePage;
