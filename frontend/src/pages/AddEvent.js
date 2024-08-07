// import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function AddEventPage() {
  return (
    <>
      <EventForm method="POST" />
    </>
  );
}

export default AddEventPage;
