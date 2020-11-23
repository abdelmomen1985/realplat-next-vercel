import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { initializeApollo } from "../lib/apolloClient";
import { GET_COMPOUNDS } from "../src/queries/compounds";
import { Compound } from "../src/types/compound";

const MyCard = ({ compound }: { compound: Compound }) => (
  <div className="w-1/3 flex">
    <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg flex-1">
      <img
        className="w-full"
        style={{ maxHeight: "250px" }}
        src={compound.media.card_icon}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h1 className="text-purple-500 mb-2"> {compound.name.en}</h1>
        <p className="text-gray-700 text-base">{compound.description.en}</p>
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
const IndexPage = ({ compounds }: { compounds: Compound[] }) => {
  return (
    <Layout title="Realstate Brand">
      <div className="flex flex-wrap pt-4">
        {compounds &&
          compounds.map((compound: any) => (
            <MyCard key={compound.name.ar} compound={compound} />
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
  const resp = await client.query({ query: GET_COMPOUNDS });
  //const { data } = useQuery(allCompounds);
  const compounds: Compound[] = resp?.data.compounds;
  return { props: { compounds } };
};

export default IndexPage;
