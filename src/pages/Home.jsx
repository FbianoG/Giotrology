import Header from '../components/Shared/Header'
import SectionHero from '../components/Layout/SectionHero'
import SectionArticles from '../components/Layout/SectionArticles'
import SectionPrice from '../components/Layout/SectionPrice'
import SectionSign from '../components/Layout/SectionSign'
import Footer from '../components/Shared/Footer'
import Stars from '../components/Common/Stars'

export default function Home() {

    return (
        <>
            <Header />
            <div className="content">
                <SectionHero />
                <SectionArticles />
                <SectionSign />
                <SectionPrice />
                <Stars />
            </div>
            <Footer />
        </>
    )
}