import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/$country/$city/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { country, city } = Route.useParams();
  return (
    <div className="space-y-3">
      <h2 className="heading">Contact us in {city}, {country}</h2>
      <p>This is the contact page for {city} in {country}.</p>
    </div>
  );
}
