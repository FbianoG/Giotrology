import { useState } from 'react'

import Header from '../components/Shared/Header'
import SectionApresentation from '../components/Layout/SectionApresentation'
import SectionBlog from '../components/Layout/SectionBlog'
import SectionPrice from '../components/Layout/SectionPrice'
import SectionSign from '../components/Layout/SectionSign'
import Footer from '../components/Shared/Footer'
import Stars from '../components/Common/Stars'









export default function Home() {

    return (
        <>
            <Header />
            <div className="content">
                <SectionApresentation />
                <SectionBlog />
                <SectionSign />
                <SectionPrice />
                <Stars />
            </div>
            <Footer />
        </>
    )
}