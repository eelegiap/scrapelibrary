// https://stackoverflow.com/questions/69046661/embedding-tiktok-video-in-react-app-video-not-showing
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllData } from '../lib/posts';
import Link from 'next/link';
// import Date from '../components/date';
import { TikTokEmbed } from 'react-social-media-embed';
// import '@justinribeiro/lite-tiktok';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script async src="https://www.tiktok.com/embed.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-tiktok@0.1.0/lite-tiktok.js"></script>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>TikTok Data Library</h2>
        <div
          className="grid gap-2 p-2 py-10 w-full"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // Force 5 columns
            gridAutoRows: '400px', // Fixed height for each row
          }}
        >
          {allPostsData.map(({ id, authorUniqueId, createTime }) => (
            <div>
              <a style={{fontSize: '8px'}} href={`https://www.tiktok.com/@${authorUniqueId}/video/${id}`}>{`https://www.tiktok.com/@${authorUniqueId}/video/${id}`}</a>
              <div>{`@${authorUniqueId}`}</div>
              {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={`https://www.tiktok.com/@${authorUniqueId}/video/${id}`} width={325} />
</div> */}
              {/* <div>{createTime}</div> */}
              {/* <Date createTime={Number(createTime) * 1000}></Date> */}
              <lite-tiktok videoid={id} style={{ height: '75%' }}></lite-tiktok>
              {/* {LiteTikTokWrapper(id)} */}
            </div>
          ))}
        </div>

      </section>
    </Layout>
  );
}

function LiteTikTokWrapper({ id }) {
  try {
    return <lite-tiktok videoid={id} style={{ height: '75%' }}></lite-tiktok>;
  } catch (error) {
    console.error('LiteTikTok failed:', error);
    return <div>Failed to load TikTok embed.</div>;
  }
}

export async function getStaticProps() {
  const data = getAllData()
  const filteredList = data.filter(obj => afdBundestagTikTokers.includes(obj.authorUniqueId));

  const sortedData = filteredList.sort((a, b) => b.diggCount - a.diggCount);
  const allPostsData = sortedData.slice(0,1000)
  // console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
}

const afdBundestagTikTokers = ['albrecht_glaser_mdb',
 'alice_weidel_afd',
 'beatrixvonstorchneu',
 'bernd.schattner.mdb',
 'carolin_bachmann_mdb',
 'christian.wirth2',
 'christinabaumafd',
 'dietmar.friedhoff.mdb',
 'brandesdirk',
 'edgarnaujokmdb',
 'enricokomning',
 'eugen_schmidt.mdb',
 'frank.rinck',
 'gereonbollmann',
 'gerold_otten',
 'gerrithuy',
 'gottfriedcurio',
 'goetzfroemming',
 'hannesgnauck',
 'haraldweyel',
 'jan_nolte_bundestag',
 'janwenzelschmidt',
 'joachim.wundrak',
 'jochenhaug_mdb',
 'joernkoenig_mdb',
 'juergenbraunmdb',
 'juergenpohlafd',
 'karstenhilseafd',
 'kaygottschalk',
 'kayuweziegler71',
 'leiferikholm',
 'malte.kaufmann',
 'manfred.schiller.afd',
 'marcbernhard',
 'marcus_buehl',
 'markusfrohnmaier',
 'martin_hess_klartext',
 'mr_afd',
 'sichertdeutschland',
 'dr_espendiller',
 'kaufmannm',
 'mikemoncsek.de',
 'kleinwaechterafd',
 'peterboehringerafd',
 'peterfelser_mdb',
 'dr.rainer.rothfuss',
 'renebochmann',
 'rene_springer',
 'roger_beckamp',
 'muenzenmaier',
 'stefan_keuter',
 'steffenkotre',
 'brandner_afd',
 'protschkasposition',
 'thomas.ehrhorn',
 'tino.chrupalla.afd',
 'tmpeterka_mdb',
 'ulschzi2',
 'volkermuenz_mdb']