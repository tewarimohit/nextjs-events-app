import MeetupDetail from "@/components/meetups/MeetupDetail";

const index = (props) => {
  return <MeetupDetail {...props.meetupDetails} />;
};

export async function getStaticPaths() {
  // all possible id values
  return {
    fallback: false, // if false the id for all possible values are generated otherwise server will try to generate by itself
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;
  return {
    props: {
      meetupDetails: {
        id,
        title: "A meetup",
        address: "Anywhere",
        content: "info",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b4/Brian_Hayes_meeting_Indian_Prime_Minister_Narendra_Modi.jpg",
      },
    },
  };
}

export default index;
