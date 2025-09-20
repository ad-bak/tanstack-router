import { getCities } from "@/lib/mock";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/$country/$city/")({
  component: RouteComponent,
  loader: async ({ params: { country, city } }) => {
    const cities = await getCities(country);
    if (!cities.includes(city)) {
      throw notFound();
    }
    return { city };
  },
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  const { city } = Route.useParams();
  return (
    <div className="space-y-3">
      <h2 className="heading">Selected City: </h2>
      <p className="heading">{city}</p>
    </div>
  );
}
