import Head from 'next/head'
import Header from '../components/Header'

const Home = ({}) => {
    return (
        <div
            className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`}
        >
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {/* <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
                <Banner netflixOriginals={netflixOriginals} />

                <section className="md:space-y-24">
                    <Row title="Trending Now" movies={trendingNow} />
                    <Row title="Top Rated" movies={topRated} />
                    <Row title="Action Thrillers" movies={actionMovies} />

                    {list.length > 0 && <Row title="My List" movies={list} />}

                    <Row title="Comedies" movies={comedyMovies} />
                    <Row title="Scary Movies" movies={horrorMovies} />
                    <Row title="Romance Movies" movies={romanceMovies} />
                    <Row title="Documentaries" movies={documentaries} />
                </section>
            </main>
            {showModal && <Modal />} */}
        </div>
    )
}

export default Home
