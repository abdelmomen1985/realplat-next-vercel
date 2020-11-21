import Link from "next/link";
import { GetStaticProps } from "next";

import { GET_DEVELOPERS } from "../../src/queries/developers";
import Layout from "../../components/Layout";
import { initializeApollo } from "../../lib/apolloClient";

type Developer = {
    name: {ar:string, en: string},
    media: any
}
const DeveloperCard = ({ developer }: { developer: Developer }) => (
  <div className="w-1/3 flex">
    <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg flex-1">
      <img
        className="w-full"
        style={{ maxHeight: "250px" }}
        src={developer.media.card_icon}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h1 className="text-purple-500 mb-2"> {developer.name.ar}</h1>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  </div>
);
const DevelopersPage = ({ developers }: { developers: Developer[] }) => {
  return (
    <Layout title="Realstate Brand">
      <div className="flex flex-wrap ">
        {developers &&
          developers.map((developer: any) => (
            <DeveloperCard key={developer.name.ar} developer={developer} />
          ))}
      </div>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const client = initializeApollo();
  const resp = await client.query({ query: GET_DEVELOPERS });
  //const { data } = useQuery(alldevelopers);
  const developers: Developer[] = resp?.data.developers;
  return { props: { developers } };
};

export default DevelopersPage;