import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");
  const events = data.event;
  return <EventItem event={events} />;
}

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventID;
  // console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "could not fetch data" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
