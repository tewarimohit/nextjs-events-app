import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetup = () => {
  const meetupFormData = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={meetupFormData} />;
};

export default NewMeetup;
