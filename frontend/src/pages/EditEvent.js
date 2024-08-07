import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-details");
  const event = data.event;
  // console.log(event);
  return (
    <>
      <EventForm event={event} method="PATCH" />
    </>
  );
}

export default EditEventPage;
